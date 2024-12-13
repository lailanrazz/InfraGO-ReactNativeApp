import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Personal = () => {
  const navigation = useNavigation();

  const handleQuitPress = () => {
    navigation.navigate('Explore'); // Navigasi keluar aplikasi
  };

  return (
    <View style={styles.container}>
      {/* Header dengan Background */}
      <ImageBackground source={require('../assets/bg.jpg')} style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
      </ImageBackground>

      {/* Informasi Pelapor */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Laila Nur Azizah</Text>
        <Text style={styles.userDetail}>Pelapor Kerusakan Jalan</Text>
        <Text style={styles.userLocation}>Sleman, Yogyakarta, Indonesia</Text>
      </View>

      {/* Ringkasan Laporan */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Ringkasan Laporan Anda</Text>
        <View style={styles.summaryContent}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#19673d" />
          <Text style={styles.summaryText}>Lokasi: Jl. Raya Gejayan No. 12</Text>
        </View>
        <View style={styles.summaryContent}>
          <FontAwesome5 name="camera" size={20} color="#19673d" />
          <Text style={styles.summaryText}>Foto: Kerusakan Retak Aspal</Text>
        </View>
        <View style={styles.summaryContent}>
          <FontAwesome5 name="tools" size={20} color="#19673d" />
          <Text style={styles.summaryText}>Status: Dalam Proses</Text>
        </View>
      </View>

      {/* Tombol Aksi */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.buttonText}>Tambah Laporan Baru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quitButton} onPress={handleQuitPress}>
          <Text style={styles.buttonText}>Keluar Aplikasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#19673d',
  },
  userInfo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#19673d',
  },
  userDetail: {
    fontSize: 16,
    color: '#444',
  },
  userLocation: {
    fontSize: 14,
    color: 'grey',
  },
  summaryCard: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#19673d',
    marginBottom: 10,
  },
  summaryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  reportButton: {
    backgroundColor: '#19673d',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 2,
  },
  quitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
