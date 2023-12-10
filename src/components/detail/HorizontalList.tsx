import React, { memo } from 'react'
import { WText, WView } from '../../common/ui'
import { FlatList } from 'react-native'
import { Utils } from '../../common/util'
import ListCard from './ListCard'
import Colors from '../../common/styles/Colors'

interface HorizontalListInterface {
    onPress:any;
    data:any;
    style:any;
    label:string;
}

function HorizontalList({ data, style, label, onPress }: HorizontalListInterface) {


    const onClickItem = (id:number, type:string)=>{
        onPress(id, label)
    }

    const _renderItem = ({ item, index }: any) => {
        return (
            <ListCard style={style} item={item} onPress={()=>{onClickItem(item?.id, label)}} />
        )
    }

    return (
        <WView padding={[0, Utils.scaleSize(10)]}>
            <WText margin={[Utils.scaleSize(10), 0]} fontSize={Utils.scaleSize(14)} color={Colors.black}>{label}</WText>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={_renderItem}
                keyExtractor={(item, index) => `horizontal_list_${index}`}
                ItemSeparatorComponent={() => <WView padding={Utils.scaleSize(5)} />}
            />
        </WView>

    )
}

export default memo(HorizontalList)