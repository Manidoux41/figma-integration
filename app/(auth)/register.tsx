import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/layouts/Header'

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Header />
      <SafeAreaView style={{width: '95%', marginHorizontal:24, position:'absolute', top: 180, flex:1,}}>
        <Text>Register</Text>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default RegisterPage

const styles = StyleSheet.create({})