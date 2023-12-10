import React, { memo, useEffect, useMemo, useState } from 'react'
import { WRow, WText, WTouchable, WView } from '../../common/ui'
import { FullButton, Header } from '../../common/base_components'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, Platform } from 'react-native'
import { FoodZoneStorage } from '../../apis'
import { COUNT_ADD, COUNT_SUBTRACT, RESPONSE, RUPPEE_SYMBOL, STATUS, SUCCESS } from '../../redux/Types'
import Colors from '../../common/styles/Colors'
import { Utils } from '../../common/util'
import SubtractIcon from '../../../assets/img/subtract.svg'
import AddIcon from '../../../assets/img/add.svg'

function Cart() {
    const navigation: any = useNavigation()
    const [cartData, setCartData] = useState<any>(null)
    const isAndroid = Platform.OS === 'android'
    const {listContainer, dishImage, checkoutBtn, itemContainer} = getStyles()

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const cart_data_obj: any = await FoodZoneStorage.getFoodZoneCartData(null);
        const cart_data = cart_data_obj && cart_data_obj[STATUS] === SUCCESS ? cart_data_obj[RESPONSE] : {};
        if (Object.keys(cart_data)?.length) setCartData(cart_data)
    }

    const handleBackPress = () => {
        navigation.goBack()
    }

    const renderHeader = useMemo(() => {
        return <Header label={"Cart"} leftPress={handleBackPress} />
    }, [])

    const handleCount = async(type: string, id: number) => {
        const tempObj = { ...cartData }
        if (type === COUNT_ADD) {
            tempObj[id].quantity += 1
        }
        else if (type === COUNT_SUBTRACT) {
            if (tempObj[id].quantity > 0) {
                tempObj[id].quantity -= 1
            }
        }
        setCartData(tempObj)
        await FoodZoneStorage.storeFoodZoneCartData(tempObj)
    }

    const _renderItem = ({ item, index }: any) => {
        return (
            <WView style={itemContainer} backgroundColor={Colors.white} padding={Utils.scaleSize(10)}>
                <WRow spaceBetween dial={4}>
                    <WRow>
                        <Image source={item?.image} style={dishImage} />
                        <WView margin={[0, Utils.scaleSize(10)]}>
                            <WText fontSize={Utils.scaleSize(isAndroid ? 13 : 11)}>{item?.title}</WText>
                            <WText margin={[Utils.scaleSize(5), 0, 0, 0]} color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 13 : 11)}>{`${RUPPEE_SYMBOL}${item?.price || 0}`}</WText>
                        </WView>
                    </WRow>


                    <WView dial={5}>
                        <WTouchable onPress={() => handleCount(COUNT_SUBTRACT, item?.id)} padding={Utils.scaleSize(5)}>
                            <SubtractIcon />
                        </WTouchable>
                        <WText fontSize={isAndroid ? 12 : 10}>{item?.quantity}</WText>
                        <WTouchable onPress={() => handleCount(COUNT_ADD, item?.id)} padding={Utils.scaleSize(5)}>
                            <AddIcon />
                        </WTouchable>
                    </WView>
                </WRow>
            </WView>
        )
    }

    const emptyComponent = () => {
        return (
            <WView dial={5} flex>
                <WText>{"Your Cart is Hungry! Fill it with Deliciousness."}</WText>
            </WView>
        )
    }

    const renderList = useMemo(() => {
        return (
            <FlatList
                style={{ flex: 0.6 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={listContainer}
                data={cartData && Object.values(cartData) || []}
                renderItem={_renderItem}
                ItemSeparatorComponent={() => <WView padding={Utils.scaleSize(isAndroid ? 7 : 5)} />}
                ListEmptyComponent={emptyComponent}
            />
        )
    }, [cartData])

    const renderTotalContent = useMemo(() => {
        if (cartData && Object.keys(cartData)?.length) {
            const subtotal = Object.values(cartData).reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);

            return (
                <WView padding={Utils.scaleSize(20)} backgroundColor={Colors.white} flex={0.4}>
                    <WRow spaceBetween>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Subtotal"}</WText>
                        <WText color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`${RUPPEE_SYMBOL}${subtotal}`}</WText>
                    </WRow>
                    <WRow margin={[Utils.scaleSize(10), 0]} spaceBetween>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Tax & Fee"}</WText>
                        <WText color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Free"}</WText>
                    </WRow>
                    <WRow spaceBetween>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Delivery"}</WText>
                        <WText color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{"Free"}</WText>
                    </WRow>
                    <WRow margin={[Utils.scaleSize(10), 0, Utils.scaleSize(20), 0]} spaceBetween>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 14 : 12)}>{"Total"}</WText>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 14 : 12)}>{`${RUPPEE_SYMBOL}${subtotal}`}</WText>
                    </WRow>
                    <FullButton
                        label={"Checkout"}
                        onPress={() => { }}
                        color={Colors.white}
                        btnStyle={{ fontSize: Utils.scaleSize(isAndroid ? 13 : 11) }}
                        style={checkoutBtn}
                    />
                </WView>
            )
        }

    }, [cartData])


    return (
        <WView flex>
            {renderHeader}

            {renderList}

            {renderTotalContent}
        </WView>
    )
}

const getStyles = () => {
    return ({
        listContainer:{
            width: '90%', 
            alignSelf: 'center', 
            paddingVertical: Utils.scaleSize(10)
        },
        itemContainer:{
            borderRadius: Utils.scaleSize(10)
        },
        dishImage:{
            height: Utils.scaleSize(50), 
            width: Utils.scaleSize(50), 
            borderRadius: Utils.scaleSize(50)
        },
        checkoutBtn:{
            width: '100%', 
            borderRadius: Utils.scaleSize(10)
        }
    })
}

export default memo(Cart)