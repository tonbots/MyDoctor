import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../..';
import { colors, fonts } from '../../../utils';

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk samsul" />
            <Button title="send" type="btn-icon-send" disable />
        </View>
    )
}

export default InputChat;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.disable,
        paddingHorizontal: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45
    }
})
