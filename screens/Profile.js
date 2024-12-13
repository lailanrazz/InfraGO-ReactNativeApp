import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Personal = () => {
  const [dataKerusakan, setDataKerusakan] = useState([]);

  useEffect(() => {
    // Panggil data dari file JSON
    fetch(require('../assets/DataKerusakan.json'))
      .then((response) => response.json())
      .then((data) => setDataKerusakan(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Header dengan Background dan Profil */}
      <ImageBackground source={require('../assets/bg_port.jpg')} style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Laila Nur Azizah</Text>
        <Text style={styles.subtitle}>Koordinator Lapangan - InfraGO</Text>
      </ImageBackground>

      {/* Daftar Laporan Kerusakan */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Laporan Kerusakan Jalan</Text>
        <FlatList
          data={dataKerusakan}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.reportCard}>
              <FontAwesome5 name="exclamation-circle" size={24} color="red" />
              <View style={styles.textContainer}>
                <Text style={styles.reportTitle}>{item.jalan}</Text>
                <Text style={styles.reportDetails}>{item.keterangan}</Text>
                <Text style={styles.reportLocation}>Lokasi: {item.lokasi}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#007260',
    borderWidth: 4,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffdf39',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007260',
    marginBottom: 10,
  },
  reportCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  textContainer: {
    marginLeft: 10,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007260',
  },
  reportDetails: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  reportLocation: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default Personal;
