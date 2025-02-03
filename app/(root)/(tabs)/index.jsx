import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView>
      <Text>Index</Text>
      <Link href="/sign-in">SignIn</Link>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})