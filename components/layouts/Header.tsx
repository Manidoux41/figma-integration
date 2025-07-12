import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import BackgroundLogo from '../svg/BackgroundLogo'

const Header = () => {
  return (
     <ImageBackground style={{ flex: 1, width:'100%', height:'100%', backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
        <BackgroundLogo style={{position: 'absolute', left: 0, top: 0, zIndex:10 }} />
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({})