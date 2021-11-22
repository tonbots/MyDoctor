import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets';
import { colors, fonts } from '../../../utils';

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if(icon === 'edit-profile'){
            return <IconEditProfile />
        }
        if(icon === 'language'){
            return <IconLanguage />
        }
        if(icon === 'rate'){
            return <IconRate />
        }
        if(icon === 'help'){
            return <IconHelp />
        }
        return <IconEditProfile />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
                {icon ? <Icon /> : <Image source={profile} style={styles.avatar} /> }
                <View style={styles.profile}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.chat}>{desc}</Text>
                </View>
                {type === 'next' && <IconNext />}
            </View>
        </TouchableOpacity>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    profile: {
        flex: 1,
        marginLeft: 16
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
    },
    chat: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    },
    wrapper: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between'
    }
})
