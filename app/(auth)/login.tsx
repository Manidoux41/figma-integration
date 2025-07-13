import { Alert, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/layouts/Header'
import InputTextField from '@/components/InputTextField'
import ButtonComponent from '@/components/ButtonComponent'
import { useRouter } from 'expo-router'
import { scale, verticalScale } from 'react-native-size-matters'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const DATA = [
  
    {
      id: '1',
      placeholder: 'Enter your email',
      value: email,
      onChangeText: setEmail
    },
    {
      id: '2',
      placeholder: 'Enter password',
      value: password,
      onChangeText: setPassword
    },
  ]

  const router = useRouter()

  return (
    <React.Fragment>
      <Header />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome back!</Text>
        <Image source={require('../../assets/images/loginpageimage.png')} style={{width:scale(202), height: verticalScale(179), marginLeft:scale(14), marginVertical:verticalScale(2)}} />
        <FlatList 
          data={DATA}
          renderItem={({ item }) => (
            <InputTextField 
              placeholder={item.placeholder} 
              value={item.value} 
              onChangeText={item.onChangeText} 
              
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={{display:'flex', marginTop:40, marginHorizontal: 24,
 }}
        />
        <ButtonComponent onPress={() => Alert.alert('Button clicked')} text='Log In' />
        <View style={{display: 'flex', flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize: 20}}>Don't have an account? </Text>
          <Pressable onPress={() => router.push('/(auth)/register')}>
            <Text style={{fontSize:20, fontWeight: 'bold', color:'#5219AF'}}>Sign Up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginHorizontal: 4,
    position: 'absolute',
    top: 180,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20
  }
})