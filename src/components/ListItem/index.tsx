import { Button, Text, View } from "react-native"

import styles from './styles'

type Props = {
    title: string
    subTitle: string
    onRemove: () => void
}

export default function ListItem({ title, subTitle, onRemove }: Props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Button title="Remover" onPress={onRemove} />
        </View>
    )
}