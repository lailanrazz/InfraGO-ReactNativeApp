import { React, useState } from 'react'
import { Text, Alert, TouchableOpacity, View, SafeAreaView, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [confirm, setConfirm] = useState('')
    const navigation = useNavigation()

    const nextPage = () => {
        if (!email || !username || !password || !confirm) {
            Alert.alert('Invalid Credentials', 'Harap isi semua kolom');
        } else if (password !== confirm) {
            Alert.alert('Invalid Credentials', 'Password dan konfirmasi password tidak cocok');
        } else {
            // Semua kondisi valid, navigasi ke halaman selanjutnya
            navigation.navigate('HomePage');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <View
                        style={{
                            width: '100%',
                            maxWidth: 350,
                            padding: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#19673d', textAlign: 'center' }}>
                            Registrasi
                        </Text>

                        {/* Username Input */}
                        <Text style={{ marginBottom: 10, color: '#19673d' }}>Username</Text>
                        <TextInput
                            placeholder="Masukkan username Anda"
                            style={{
                                height: 45,
                                borderWidth: 1,
                                borderColor: '#19673d',
                                borderRadius: 5,
                                paddingLeft: 10,
                                marginBottom: 15,
                            }}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />

                        {/* Email Input */}
                        <Text style={{ marginBottom: 10, color: '#19673d' }}>Email</Text>
                        <TextInput
                            placeholder="Masukkan email Anda"
                            style={{
                                height: 45,
                                borderWidth: 1,
                                borderColor: '#19673d',
                                borderRadius: 5,
                                paddingLeft: 10,
                                marginBottom: 15,
                            }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />

                        {/* Password Input */}
                        <Text style={{ marginBottom: 10, color: '#19673d' }}>Password</Text>
                        <TextInput
                            placeholder="Masukkan password Anda"
                            style={{
                                height: 45,
                                borderWidth: 1,
                                borderColor: '#19673d',
                                borderRadius: 5,
                                paddingLeft: 10,
                                marginBottom: 15,
                            }}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />

                        {/* Confirm Password Input */}
                        <Text style={{ marginBottom: 10, color: '#19673d' }}>Konfirmasi Password</Text>
                        <TextInput
                            placeholder="Konfirmasi password Anda"
                            style={{
                                height: 45,
                                borderWidth: 1,
                                borderColor: '#19673d',
                                borderRadius: 5,
                                paddingLeft: 10,
                                marginBottom: 25,
                            }}
                            value={confirm}
                            secureTextEntry={true}
                            onChangeText={(text) => setConfirm(text)}
                        />

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            onPress={nextPage}
                            style={{
                                backgroundColor: '#19673d',
                                width: '100%',
                                height: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 18 }}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Register;
