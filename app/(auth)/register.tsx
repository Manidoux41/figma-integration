import { Alert, Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/layouts/Header'
import InputTextField from '@/components/InputTextField'
import ButtonComponent from '@/components/ButtonComponent'
import { useRouter } from 'expo-router'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const DATA = [
    {
      id: '1',
      placeholder: 'Enter your name',
      value: name,
      onChangeText: setName
    },
    {
      id: '2',
      placeholder: 'Enter your email',
      value: email,
      onChangeText: setEmail
    },
    {
      id: '3',
      placeholder: 'Enter password',
      value: password,
      onChangeText: setPassword
    },
    {
      id: '4',
      placeholder: 'Confirm password',
      value: password,
      onChangeText: setPassword
    }
  ]

  const router = useRouter()

  return (
    <React.Fragment>
      <Header />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome aboard!</Text>
        <Text style={styles.subtitle}>Let's get you Registered.</Text>
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
        <ButtonComponent onPress={() => Alert.alert('Button clicked')} text='Register' />
        <View style={{display: 'flex', flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize: 20}}>Already have an account? </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={{fontSize:20, fontWeight: 'bold', color:'#5219AF'}}>Sign In</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default RegisterPage

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