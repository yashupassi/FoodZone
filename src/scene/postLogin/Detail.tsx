import React, { memo, useEffect, useMemo, useState } from 'react'
import { WRow, WText, WView } from '../../common/ui'
import { Header, Loader } from '../../common/base_components'
import { DISH_SCREEN, RESTAURANT_LIST } from '../../redux/Types'
import { useNavigation } from '@react-navigation/native'
import { Utils } from '../../common/util'
import { Image, Platform, ScrollView } from 'react-native'
import RatingStar from '../../../assets/img/ratingStar.svg'
import StarIcon from '../../../assets/img/star.svg'
import LocationIcon from '../../../assets/img/location.svg'
import ClockIcon from '../../../assets/img/clock.svg'
import Colors from '../../common/styles/Colors'
import { HorizontalList } from '../../components'

function Detail({ route }: any) {
    const id = route?.params?.id
    const navigation:any = useNavigation()
    const [restaurantData, setRestaurantData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const isAndroid = Platform.OS === 'android'
    useEffect(() => {
        if (id) {
            const restaurant = RESTAURANT_LIST?.filter((ele) => ele?.id === id)?.[0]
            if (restaurant) setRestaurantData(restaurant)
            setLoading(false)
        }
    }, [id])

    const handleBackPress = () => {
        navigation.goBack()
    }
    const renderHeader = useMemo(() => {
        return <Header label={restaurantData?.title} leftPress={handleBackPress} />
    }, [restaurantData])

    const handleListPressWithId = (id:number,type:string) => {
        navigation.navigate(DISH_SCREEN, {restaurantId: restaurantData?.id, dishId:id, type:type})
      };

    const renderMenu = useMemo(() => {
        return (
            <WView flex>
                {
                    restaurantData?.menu?.map((item: any, index: number) => {
                        return (
                            <HorizontalList onPress={handleListPressWithId} label={item?.type} style={{ width: Utils.scaleSize(220) }} data={item?.dishes} />
                        )
                    })
                }
            </WView>

        )
    }, [restaurantData])


    if(loading) return <Loader />

    return (
        <WView flex>
            {renderHeader}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={restaurantData?.image} style={{ height: Utils.scaleSize(150), width: null }} />
                <WView padding={Utils.scaleSize(20)}>
                    {/* Ratings */}
                    <WRow dial={4}>
                        <RatingStar />
                        <WRow margin={[0, Utils.scaleSize(10)]} dial={5}>
                            <StarIcon />
                            <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`${restaurantData?.averageRatings} (${restaurantData?.totalRatings} people)`}</WText>
                        </WRow>
                    </WRow>
                    {/* Location */}
                    <WRow margin={[Utils.scaleSize(10), 0]} dial={4}>
                        <LocationIcon />
                        <WText margin={[0, 0, 0, Utils.scaleSize(10)]} lines={5} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{restaurantData?.address}</WText>
                    </WRow>
                    {/* Timings */}
                    <WRow>
                        <ClockIcon />
                        <WView margin={[0, 0, 0, Utils.scaleSize(10)]}>
                            <WText lines={5} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Monday - Sunday"}</WText>
                            <WText margin={[Utils.scaleSize(5), 0]} color={Colors.dark_gray} lines={5} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"9:00 - 22:00"}</WText>
                        </WView>
                    </WRow>

                </WView>
                <WView backgroundColor={Colors.gray} padding={[Utils.scaleSize(isAndroid ? 2 : 1), 0]} />
                {renderMenu}
            </ScrollView>
        </WView>
    )
}

export default memo(Detail)