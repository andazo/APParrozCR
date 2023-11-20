import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
    return (
        <View style={{marginLeft:14}}>
            <Text style={{fontWeight:'bold',fontSize:30}}>
                {props.name}
            </Text>
        </View>
    )
}

export default Header