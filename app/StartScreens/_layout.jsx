import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StartScreenLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='Onboarding'  options={{headerShown: false}}/>
    </Stack>
  )
}

export default StartScreenLayout

const styles = StyleSheet.create({})