import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'

type ButtonComponentProps = {
    onPress: () => void,
    text: string,
}

const ButtonComponent = ({onPress, text}: ButtonComponentProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={{fontSize:22, fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        width: '88%',
        marginHorizontal:'auto',
        marginVertical: verticalScale(30),
        height: verticalScale(61),
        backgroundColor: '#BE90EB',
        shadowColor:'#333',
        justifyContent: 'center',
        alignItems:'center',
        boxShadow: ''
    }
})