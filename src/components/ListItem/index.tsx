import { Text, View } from "react-native"

import styles from './styles'

type Props = {
    title: string
    subTitle: string
}

export default function ListItem({ title, subTitle }: Props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}