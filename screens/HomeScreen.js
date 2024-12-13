import React from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/bg_port.jpg')} 
      style={styles.background}>
      
      {/* Kontainer Utama */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Aplikasi */}
        <View style={styles.header}>
          <Text style={styles.mainTitle}>InfraGO</Text>
          <Text style={styles.subTitle}>Aplikasi Pemantauan dan Pelaporan Kerusakan Infrastruktur Jalan</Text>
        </View>

        {/* Fitur Utama */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fitur Utama</Text>
          <View style={styles.listItem}>
            <FontAwesome5 name="plus-circle" size={20} color="#19673d" />
            <Text style={styles.listText}>Melaporkan kerusakan jalan (lokasi, foto, deskripsi).</Text>
          </View>
          <View style={styles.listItem}>
            <FontAwesome5 name="map-marked-alt" size={20} color="#19673d" />
            <Text style={styles.listText}>Menampilkan laporan kerusakan pada peta.</Text>
          </View>
          <View style={styles.listItem}>
            <FontAwesome5 name="edit" size={20} color="#19673d" />
            <Text style={styles.listText}>Memperbarui status perbaikan (dalam proses, selesai).</Text>
          </View>
          <View style={styles.listItem}>
            <FontAwesome5 name="trash-alt" size={20} color="#19673d" />
            <Text style={styles.listText}>Penghapusan laporan jika sudah diverifikasi selesai.</Text>
          </View>
        </View>

        {/* Use Case */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tujuan</Text>
          <Text style={styles.useCaseText}>
            Membantu pemerintah atau komunitas dalam memperbaiki infrastruktur jalan melalui laporan yang cepat dan akurat.
          </Text>
        </View>

        {/* Tombol Explore */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mulai Gunakan InfraGO</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffdf39',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffdf39',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#19673d',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  listText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  useCaseText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#ffdf39',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#19673d',
  },
});
