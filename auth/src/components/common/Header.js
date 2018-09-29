import React from 'react'
import {View, Text} from 'react-native'

const Header = (props) => {
        return (
            <View>
                <Text>
                    {props.headerText}
                </Text>
            </View>
        )
};


export  {Header}