import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { getAuth } from '@react-native-firebase/auth'

export default function index() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {
        
    }
    
    const  signUp = async () => {
        try {
            await getAuth().createUserWithEmailAndPassword(email, password)
            Alert.alert("successfully created!")
            console.log("successfully created!")
        } catch (e) {
            Alert.alert("Inavlid")
            console.log("Invalid")
        }
    }

  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
      }}>Login to your Account</Text>
      <View style={{
        gap: 8,
        marginBottom: 16
      }}>
        <TextInput
            style={styles.input} 
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            style={styles.input}  
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
      </View>
      <Button 
        title='Login'
        onPress={signUp}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})