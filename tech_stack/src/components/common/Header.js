import React from 'react'
import {View, Text} from 'react-native'

const Header = (props) => {
    const {headerStyle, textStyle} = styles;
        return (
            <View style={headerStyle}>
                <Text style={textStyle}>
                    {props.headerText}
                </Text>
            </View>
        )
};

const styles = {
  headerStyle:{
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2
  },
    textStyle:{
        fontSize: 20
    }

};


export  {Header}