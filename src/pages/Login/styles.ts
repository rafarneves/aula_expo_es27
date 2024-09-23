import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        marginBottom: 40,
    },

    inputView: {
        marginBottom: 10,
    },

    label: {
        fontSize: 22,
    },

    input: {
        padding: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width - 60,
    },

    buttonView: {
        marginTop: 40,
        width: Dimensions.get('screen').width - 200,
    }
})