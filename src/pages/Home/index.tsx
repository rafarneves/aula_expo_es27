import React from 'react'
import { Button, FlatList, Text, View } from "react-native"
import { NavigationProp, useNavigation } from '@react-navigation/native'

import { userService } from '../../services/user.service'
import { User } from "../../models/user.model"
import ListItem from '../../components/ListItem'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()
    const [users, setUsers] = React.useState<User[]>([])
    const [refreshing, setRefreshing] = React.useState(false)

    function fetchUsers() {
        setRefreshing(true)

        userService.getList().then(list => {
            setUsers(list)
            setRefreshing(false)
        }).catch(error => {
            navigation.navigate('Login')
        })
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button title="Sair" />,
            headerRight: () => <Button title="Add" onPress={goToNewUser} />
        })

        fetchUsers()
    }, [])

    function goToNewUser() {
        navigation.navigate('User')
    }

    return (
        <View>
            <FlatList
                onRefresh={fetchUsers}
                refreshing={refreshing}
                data={users}
                renderItem={({ item }) => (
                    <ListItem title={item.name} subTitle={item.username} />
                )}
            />
        </View>
    )
}