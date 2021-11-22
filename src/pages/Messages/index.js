import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';
import { List } from '../../components';
import { colors, fonts } from '../../utils';

const Messages = () => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: 'Joko Widodo',
            desc: 'Baik saya kerjakan'
        },
        {
            id: 2,
            profile: DummyDoctor5,
            name: 'Joko Widodo',
            desc: 'Baik saya kerjakan'
        },
        {
            id: 3,
            profile: DummyDoctor6,
            name: 'Joko Widodo',
            desc: 'Baik saya kerjakan'
        },
    ])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        doctors.map(doctor => {
                            return <List
                            key={doctor.id}
                            profile={doctor.profile} 
                            name={doctor.name} 
                            desc={doctor.desc} />
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 16
    }
})
