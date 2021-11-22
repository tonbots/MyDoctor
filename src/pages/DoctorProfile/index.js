import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = () => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" />
            <Profile name="Santika Putri" desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Pelita Bangsa" />
            <ProfileItem label="Tempat Praktik" value="Puskesmas Tahan Sakit" />
            <ProfileItem label="No. STR" value="0000324235423423" />
            <View style={styles.action}>
                <Button title="Start Consultation" />
            </View>
        </View>
    )
}

export default DoctorProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingTop: 23,
        paddingHorizontal: 40
    }
})
