import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type InputTextFieldProps = {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
}

export default function InputTextField({ placeholder, value, onChangeText } : InputTextFieldProps) {
  return (
    <TextInput 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText}
        style={{ marginBottom:40, width: '100%', height: 51, backgroundColor: '#D9D9D9', borderRadius: 10, padding:15, color:"#000000", fontSize:20 }}
    />
  )
}

const styles = StyleSheet.create({})