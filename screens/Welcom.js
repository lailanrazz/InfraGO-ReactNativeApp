import React from 'react'; 
import { Text, TouchableOpacity, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Welcom = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      style={{ height: "100%" }}
      resizeMode="cover"
      source={require("../assets/bg.jpg")}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        {/* Add the Logo Image */}
        <Image
          source={require("../assets/infrago-highres-logo.png")}  // Replace with the path to your logo
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Pemantauan dan Pelaporan</Text>
        <Text style={styles.subtitle}>Kerusakan Infrastruktur</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Laporkan kerusakan infrastruktur di sekitar lokasimu, Demi mewujudkan kota</Text>
        <Text style={styles.description}>dengan Infrastruktur yang Baik!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={handleNextPress} style={styles.button}>
          <Text style={styles.buttonText}>Lanjutkan</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,  // Set the width of the logo
    height: 100,  // Set the height of the logo
    marginBottom: 20,  // Space between logo and title
    marginTop : 200,
  },

  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffdf39',
    marginTop: -10,
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#19673d',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  buttonText: {
    color: '#ffdf39',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default Welcom;
