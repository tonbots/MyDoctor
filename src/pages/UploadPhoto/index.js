import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, fonts } from '../../utils';

const UploadPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false);
    const getImage = () => {
        launchImageLibrary(callback => {
            console.log('respon', callback);
        });
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={()=>navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>Kartono Saleh</Text>
                    <Text style={styles.profession}>Mobile Developer</Text>
                </View>
                <View>
                    <Button disable title="Upload and Continue" onPress={()=> navigation.replace('MainApp')} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={()=> navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile:{
        alignItems:'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height:110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign:'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4

    }
})
