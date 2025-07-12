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
        style={{ marginBottom:40 }}
    />
  )
}

const styles = StyleSheet.create({})