import React, { memo, useEffect, useMemo, useState } from 'react'
import { WRow, WText, WTouchable, WView } from '../../common/ui'
import { Image, Platform } from 'react-native'
import { FullButton, Header, Loader } from '../../common/base_components'
import { useNavigation } from '@react-navigation/native'
import { CART_SCREEN, COUNT_ADD, COUNT_SUBTRACT, RESPONSE, RESTAURANT_LIST, RUPPEE_SYMBOL, STATUS, SUCCESS } from '../../redux/Types'
import { Utils } from '../../common/util'
import StarIcon from '../../../assets/img/star.svg'
import ClockIcon from '../../../assets/img/clock.svg'
import Colors from '../../common/styles/Colors'
import SubtractIcon from '../../../assets/img/subtract.svg'
import AddIcon from '../../../assets/img/add.svg'
import { FoodZoneStorage } from '../../apis'
import { showAlert } from '../../apis/Helper'


function Dish({ route }: any) {
    const restaurantId = route?.params?.restaurantId
    const dishId = route?.params?.dishId
    const type = route?.params?.type

    const [restaurant, setRestaurant] = useState<any>(null)
    const [dish, setDish] = useState<any>(null)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState<boolean>(true)

    const navigation: any = useNavigation()
    const isAndroid = Platform.OS === 'android'

    const { restaurantImage, dishImage } = getStyles()

    useEffect(() => {
        if (restaurantId && dishId && type) {
            getDishData(restaurantId, type, dishId)
        }

    }, [restaurantId, dishId, type])


    const getDishData = (restaurantId: number, type: string, dishId: number) => {
        // Find the restaurant based on restaurantId
        const restaurantData = RESTAURANT_LIST?.find((r: any) => r.id === restaurantId);
        // If the restaurant is found, find the type
        if (restaurantData) {
            setRestaurant(restaurantData)
            const menuType = restaurantData?.menu?.find((menu: any) => menu.type === type);

            // If the type is found, find the dish based on dishId
            if (menuType) {
                const dish = menuType?.dishes?.find((d: any) => d.id === dishId);
                // Return the dish data if found
                if (dish) {
                    setDish(dish)
                }
            }
        }
        setLoading(false)
    };

    const handleBackPress = () => {
        navigation.goBack()
    }

    const handleCount = (type: string) => {
        if (type === COUNT_ADD) {
            setCount(count + 1)
        }
        else if (type === COUNT_SUBTRACT && count > 0) {
            setCount(count - 1)
        }
    }

    const onAddCart = async () => {
        if (count > 0) {
            const cart_data_obj: any = await FoodZoneStorage.getFoodZoneCartData(null);
            const cart_data = cart_data_obj && cart_data_obj[STATUS] === SUCCESS ? cart_data_obj[RESPONSE] : {};
            if (cart_data[dish?.id]) {
                cart_data[dish?.id].quantity += count
            }
            else {
                cart_data[dish.id] = { ...dish, quantity: count };
            }
            await FoodZoneStorage.storeFoodZoneCartData(cart_data)
            navigation.popToTop()
            navigation.navigate(CART_SCREEN)
        }
        else showAlert("", "Please add quantity first")
    }

    const renderHeader = useMemo(() => {
        return <Header label={dish?.title} leftPress={handleBackPress} />
    }, [dish])

    if(loading) return <Loader />
    return (
        <WView flex>
            {renderHeader}
            <WView flex showsVerticalScrollIndicator={false}>
                <Image source={dish?.image} style={dishImage} />
                <WView padding={Utils.scaleSize(20)}>
                    <WText margin={[0, 0, Utils.scaleSize(10), 0]} color={Colors.theme_color} fontWeight="700" fontSize={Utils.scaleSize(isAndroid ? 14 : 12)}>{`${RUPPEE_SYMBOL}${dish?.price}`}</WText>

                    {/* Ratings */}
                    <WRow spaceBetween dial={4}>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 14 : 12)}>{dish?.title}</WText>
                        <WRow margin={[0, Utils.scaleSize(10)]} dial={5}>
                            <StarIcon />
                            <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`${dish?.averageRatings} (${dish?.totalRatings} people)`}</WText>
                        </WRow>
                    </WRow>
                    {/* Timings */}
                    <WRow spaceBetween dial={4}>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`${restaurant?.distance} km away`}</WText>

                        <WRow margin={[Utils.scaleSize(10), 0]} dial={4}>
                            <ClockIcon />
                            <WText margin={[0, 0, 0, Utils.scaleSize(10)]} lines={5} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`Delivery : ${dish?.duration}`}</WText>
                        </WRow>
                    </WRow>

                </WView>
                <WView backgroundColor={Colors.gray} padding={[Utils.scaleSize(isAndroid ? 2 :1), 0]} />
                <WView padding={Utils.scaleSize(20)}>
                    <WRow>
                        <Image source={restaurant?.image} style={restaurantImage} />
                        <WView flex margin={[0, Utils.scaleSize(10)]}>
                            <WText fontSize={Utils.scaleSize(isAndroid ? 14 : 12)}>{restaurant?.title}</WText>
                            <WText margin={[Utils.scaleSize(5), 0]} color={Colors.dark_gray} lines={3} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{restaurant?.address}</WText>
                        </WView>
                    </WRow>
                </WView>
            </WView>
            <WView dial={4} padding={Utils.scaleSize(20)} backgroundColor={Colors.white}>
                <WRow spaceBetween>
                    <WRow flex dial={4}>
                        <WTouchable onPress={() => handleCount(COUNT_SUBTRACT)} padding={Utils.scaleSize(5)}>
                            <SubtractIcon />
                        </WTouchable>
                        <WText fontSize={isAndroid ? 12 : 10}>{count}</WText>
                        <WTouchable onPress={() => handleCount(COUNT_ADD)} padding={Utils.scaleSize(5)}>
                            <AddIcon />
                        </WTouchable>
                    </WRow>

                    <FullButton
                        label={"Add to cart"}
                        onPress={onAddCart}
                        color={Colors.white}
                        btnStyle={{ fontSize: Utils.scaleSize(isAndroid ? 13 : 11) }}
                        style={{ paddingHorizontal: Utils.scaleSize(30), borderRadius: Utils.scaleSize(10) }}
                    />
                </WRow>


            </WView>
        </WView>
    )
}

const getStyles = () => {
    return ({
        restaurantImage: {
            height: Utils.scaleSize(60),
            width: Utils.scaleSize(60),
            borderRadius: Utils.scaleSize(50)
        },
        dishImage:{
            height: Utils.scaleSize(150), 
            width: null
        }
    })
}

export default memo(Dish)