import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderTitle } from '@react-navigation/elements'

export default function TabLayout() {
  return (
    <Stack>
        <Stack.Screen name='home' options={{
            headerTitle: 'HomePage',
            headerStyle: {
                backgroundColor: 'red'
            },
            headerTintColor: 'white',
            headerShown: false
        }}/>
    </Stack>
  )
}