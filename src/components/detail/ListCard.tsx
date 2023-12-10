import React, { memo } from 'react'
import { WRow, WText, WTouchable, WView } from '../../common/ui'
import { Image, Platform } from 'react-native'
import { Utils } from '../../common/util'
import Colors from '../../common/styles/Colors'
import StarIcon from '../../../assets/img/star.svg'

interface ListCardInterface {
    item: any;
    onPress: () => void;
    style?: any
}

function ListCard({ item, onPress, style }: ListCardInterface) {
    const { itemContainer, itemImage } = getStyles()
    const isAndroid = Platform.OS === 'android'

    return (
        <WTouchable onPress={onPress} activeOpacity={0.9} style={[itemContainer, style]}>
            <Image source={item?.image} style={itemImage} />
            <WView padding={Utils.scaleSize(10)}>
                <WRow dial={5} spaceBetween>
                    <WView flex={0.7}>
                        <WText fontSize={Utils.scaleSize(isAndroid ? 13 : 11)}>{item?.title}</WText>
                    </WView>
                    <WRow flex={0.3} dial={6}>
                        <StarIcon />
                        <WText color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{`${item?.averageRatings} (${item?.totalRatings})`}</WText>
                    </WRow>
                </WRow>
                <WText margin={[Utils.scaleSize(5), 0, 0, 0]} color={Colors.dark_gray} fontSize={Utils.scaleSize(isAndroid ? 12 : 10)}>{item?.address}</WText>
            </WView>
        </WTouchable>
    )
}

const getStyles = () => {
    return ({
        itemContainer: {
            borderRadius: Utils.scaleSize(10),
            backgroundColor: Colors.white
        },
        itemImage: {
            height: Utils.scaleSize(100),
            width: '100%',
            backgroundColor: Colors.gray,
            borderTopLeftRadius: Utils.scaleSize(10),
            borderTopRightRadius: Utils.scaleSize(10)
        }
    })
}

export default memo(ListCard)