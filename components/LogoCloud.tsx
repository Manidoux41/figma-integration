import { Image, StyleSheet, Text, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters';

import React from 'react'

import { ImageSourcePropType } from 'react-native';

type LogoCloudProps = {
    source: ImageSourcePropType,
    hposition: number,
    vposition: number
}

export default function LogoCloud({source, hposition, vposition}: LogoCloudProps) {
  return (
    <View style={{
        position: 'absolute', 
        left: hposition, 
        top: vposition,
        width: scale(94),
        height: verticalScale(69),
        borderWidth:1,
        borderRadius: 10,
        borderColor: '#3F3D56',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Image source={source} style={{ width: scale(58), height: verticalScale(32) }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        left: 0, 
        top: 85,
        width: scale(94),
        height: verticalScale(69),
        borderWidth:1,
        borderRadius: 10,
        borderColor: '#3F3D56',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})