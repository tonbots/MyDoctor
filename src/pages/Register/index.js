import React from 'react';
import { ScrollView, StyleSheet,View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';

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

    const onContinue = () => {
        console.log(form)
        // navigation.navigate('UploadPhoto')
    }
    return (
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
