import { Alert, Button, TextInput, Text, View } from 'react-native'

import styles from './styles'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedsonreis' && password === '123456') {
            Alert.alert('Usuário logado com sucesso')
        } else {
            Alert.alert('Login/senha inválido(a)!')
        }
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Acesso ao App</Text>

            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={value => username = value} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => password = value} secureTextEntry />
            </View>

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={signIn} />
            </View>

        </View>
    )
}
