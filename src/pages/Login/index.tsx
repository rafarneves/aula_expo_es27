import { Alert, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MyInput from '../../components/MyInput'

import styles from './styles'

export default function LoginPage() {

    const navigation = useNavigation<any>()

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedsonreis' && password === '123456') {
            navigation.navigate('Home')
        } else {
            Alert.alert('Login/senha inválido(a)!')
        }
    }

    return (
        <View style={styles.page}>
            <MyInput label='Login' change={value => username = value} />
            <MyInput label='Senha' change={value => password = value} secureTextEntry />

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={signIn} />
            </View>

        </View>
    )
}
