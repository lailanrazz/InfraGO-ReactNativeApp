import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const validUsername = 'lailaazizah724@gmail.com';
    const validPassword = '12345';

    if (email === validUsername && password === validPassword) {
      navigation.navigate('HomePage');
    } else if (!email || !password) {
      Alert.alert('Invalid Credentials', 'Harap isi email dan password Anda.');
    } else {
      Alert.alert('Invalid Credentials', 'Email atau password salah.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <FontAwesome5 name="road" size={60} color="#ffdf39" />
            <Text style={styles.appName}>InfraGO</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.inputWrapper}>
              <FontAwesome5 name="envelope" size={20} color="#19673d" style={styles.icon} />
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputWrapper}>
              <FontAwesome5 name="lock" size={20} color="#19673d" style={styles.icon} />
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={password}
                secureTextEntry
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerLink}>
              <Text style={styles.registerText}>
                Belum punya akun? <Text style={styles.highlight}>Daftar Sekarang</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffdf39',
    marginTop: 10,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#19673d',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#19673d',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 15,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  highlight: {
    color: '#19673d',
    fontWeight: 'bold',
  },
});
