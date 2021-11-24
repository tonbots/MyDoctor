import React, { useState } from 'react';
import { ScrollView, StyleSheet,View } from 'react-native';
import { Button, Gap, Header, Input, Loading } from '../../components';
import { colors, useForm } from '../../utils';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';

const Register = ({navigation}) => {
    // const [fullname, setFullName] = useState('');
    // const [profission, setProfission] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useForm({
        fullName: '',
        profission: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form)

        setLoading(true);
        const auth = getAuth(Fire);
        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((success) => {
            setLoading(false)
            setForm('reset')
            // const data = {
            //     fullName:'',
            //     profission:'',
            //     email:'',
            // }
            // auth.database()
            // .ref('users/'+success.user.uid+'/').set(data)

            console.log('berhasil', success)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoading(false)
            showMessage({
                message: errorMessage,
                type: "default",
                backgroundColor: colors.error,
                color: colors.white
            });
            // ..
        });
        // navigation.navigate('UploadPhoto')
    }
    return (
        <>
            <View style={styles.page}>
                <Header title="Daftar Akun" onPress={()=> navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Input 
                            label="Full Name" 
                            value={form.fullName} 
                            onChangeText={value=> setForm('fullName',value)} 
                        />
                        <Gap height={24} />
                        <Input 
                            label="Pekerjaan" 
                            value={form.profission} 
                            onChangeText={value=> setForm('profission',value)} 
                        />
                        <Gap height={24} />
                        <Input 
                            label="Email Address" 
                            value={form.email} 
                            onChangeText={value=> setForm('email',value)} 
                        />
                        <Gap height={24} />
                        <Input 
                            label="Password" 
                            secureTextEntry 
                            value={form.password} 
                            onChangeText={value=> setForm('password',value)} 
                        />
                        <Gap height={40} />
                        <Button title="Continue" onPress={onContinue} />
                    </View>
                </ScrollView>
            </View>
            {
                loading && <Loading />
            }
        </>
    );
};

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content:{
        padding: 40,
        paddingTop: 0
    }
});
