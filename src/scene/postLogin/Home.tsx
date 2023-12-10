import React, { memo, useMemo } from 'react'
import { WView } from '../../common/ui'
import { FlatList, Platform } from 'react-native'
import { Utils } from '../../common/util'
import CartIcon from '../../../assets/img/cart.svg'
import LogoutIcon from '../../../assets/img/logout.svg'
import { Header } from '../../common/base_components'
import { CART_SCREEN, DETAIL_SCREEN, DEVICE_CONSTANTS_IS_LOGGED_IN, RESTAURANT_LIST } from '../../redux/Types'
import { useNavigation } from '@react-navigation/native'
import { ListCard } from '../../components'
import { FoodZoneStorage } from '../../apis'
import { useDispatch } from 'react-redux'
import { updateDeviceUIConstraints } from '../../redux/device/Action'

function Home() {
    const navigation:any = useNavigation()
    const { listContainer } = getStyles()
    const isAndroid = Platform.OS === 'android'
    const dispatch = useDispatch()

    const _renderItem = ({ item, index }: any) => {
        return (
            <ListCard item={item} onPress={()=>{navigation.navigate(DETAIL_SCREEN, {id:item?.id})}}/>
        )
    }

    const onClickCart = () =>{
        navigation.navigate(CART_SCREEN)
    }

    const onLogout = async()=>{
        await FoodZoneStorage.clearFoodZoneCartData();
        await FoodZoneStorage.clearFoodZoneLoginData();
        dispatch(
          updateDeviceUIConstraints({
            [DEVICE_CONSTANTS_IS_LOGGED_IN]: false,
          }),
        );
    }

    const renderHeader = useMemo(() => {
        return <Header iconLeft={<LogoutIcon height={Utils.scaleSize(15)} width={Utils.scaleSize(15)} />} label={"Restaurants"} leftPress={onLogout} rightPress={onClickCart} iconRight={<CartIcon />} />
    }, [])

    const renderList = useMemo(() => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={listContainer}
                data={RESTAURANT_LIST}
                renderItem={_renderItem}
                keyExtractor={(item, index) => `restaurants_${index}`}
                ItemSeparatorComponent={() => <WView padding={Utils.scaleSize(isAndroid ? 7 : 5)} />}
            />
        )
    }, [RESTAURANT_LIST])

    return (
        <WView flex>
            {renderHeader}
            {renderList}
        </WView>
    )
}

const getStyles = () => {
    return ({
        listContainer: {
            width: '90%',
            alignSelf: 'center',
            paddingVertical: Utils.scaleSize(10)
        }
    })
}

export default memo(Home)