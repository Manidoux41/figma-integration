import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/layouts/Header'
import InputTextField from '@/components/InputTextField'

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