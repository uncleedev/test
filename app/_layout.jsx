import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import  { getAuth } from '@react-native-firebase/auth'

export default function RootLayout() {

    const [initializing, setInitializing] = useState(false)
    const [user, setUser] = useState()

    const onAuthStateChanged = (user) => {
        console.log('onAuthStateChanged',  user)
        setUser(user)
        if (initializing) setInitializing(true)
    }

    useEffect(() => {
        const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    if (initializing)
        return <View><Text>Loading...</Text></View>

  return (
    <Stack>
        <Stack.Screen name='index'/>
    </Stack>
  )
}

const styles = StyleSheet.create({})