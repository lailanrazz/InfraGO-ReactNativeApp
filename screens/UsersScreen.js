import React, { useState, useEffect } from 'react'; 
import { FlatList, Text, View, Image, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const UsersScreen = () => {
  const jsonData = require('../assets/DataKerusakan.json'); // Sesuaikan dengan path file JSON Anda
  const [isLoading, setLoading] = useState(true);
  const [dataKerusakan, setDataKerusakan] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    try {
      setDataKerusakan(jsonData.features);
    } catch (error) {
      console.error('Error loading JSON data:', error);
      Alert.alert('Error', 'Failed to load data.');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshPage = () => {
    setRefresh(true);
    try {
      setDataKerusakan(jsonData.features);
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setRefresh(false);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'berat':
        return styles.statusBerat;
      case 'sedang':
        return styles.statusSedang;
      case 'ringan':
        return styles.statusRingan;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require('../assets/bg.jpg')}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>LIST KERUSAKAN INFRASTRUKTUR</Text>
          </View>

          <FlatList
            data={dataKerusakan}
            onRefresh={refreshPage}
            refreshing={refresh}
            keyExtractor={({ properties }) => properties.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                  <Image
                    source={{ uri: item.properties.gambar }}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.properties.laporan}</Text>
                    <Text style={styles.cardSubtitle}>{item.properties.waktu_dilaporkan}</Text>
                    <View style={getStatusStyle(item.properties.tingkat_kerusakan)}>
                      <Text style={styles.statusText}>{item.properties.tingkat_kerusakan.toUpperCase()}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: 'black',
  },
  background: {
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
    marginVertical: 5,
  },
  statusBerat: {
    backgroundColor: '#FF4C4C',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusSedang: {
    backgroundColor: '#FFA500',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusRingan: {
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDefault: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UsersScreen;
