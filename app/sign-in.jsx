import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../constants/images';


const { height, width } = Dimensions.get('window');
const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Image source={images.onboarding} resizeMode='contain' style={styles.onboardingImg} />
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  onboardingImg:{
    height:height*0.7, // 70% of the screen height
    width:width
  }
})