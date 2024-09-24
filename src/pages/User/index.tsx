import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

import MyInput from '../../components/MyInput'

import styles from './styles'

export default function UserPage() {

    const [name, setName] = React.useState('')

    let username = ''
    let password = ''
    let confirmPass = ''

    function save() {
        if (name.trim() === '') {
            Alert.alert('O Nome é obrigatório')
            return
        }
        if (username.trim() === '') {
            Alert.alert('O Login é obrigatório')
            return
        }
        if (password.trim() === '') {
            Alert.alert('A Senha é obrigatória')
            return
        }
        if (password !== confirmPass) {
            Alert.alert('A senha não confere')
            return
        }

        // salvar o usuário novo
        Alert.alert('Usuário salvo com sucesso!')
    }

    return (
        <View style={styles.page}>

            <MyInput label='Name' initialValue={name} change={setName} />
            <MyInput label='Login' change={value => username = value} />
            <MyInput label='Senha' change={value => password = value} secureTextEntry />
            <MyInput label='Confirmar Senha' change={value => confirmPass = value} secureTextEntry />

            <View style={styles.buttonView}>
                <Button title='Salvar' onPress={save} />
            </View>

        </View>
    )
}