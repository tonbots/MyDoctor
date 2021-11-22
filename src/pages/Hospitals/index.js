import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospitals = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                    <Text style={styles.title}>Nearby Hospitals</Text>
                    <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital pic={DummyHospital1} type="Rumah Sakit" name="Omni Hospital" address="Jl. Lippo cikarang" />
                <ListHospital pic={DummyHospital2} type="Rumah Hewan" name="Omni Hospital" address="Jl. Lippo cikarang" />
                <ListHospital pic={DummyHospital3} type="Rumah Anak" name="Permata Keluarga Hospital" address="Jl. Lippo cikarang" />
            </View>
        </View>
    )
}

export default Hospitals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 14,
        paddingHorizontal: 16
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        textAlign: 'center',
        marginTop: 6
    }
})
