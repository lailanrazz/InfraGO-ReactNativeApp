import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGraduationCap, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Listdata = () => {

    const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            setDataUser(json)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
      function refreshPage() {
        fetch(jsonUrl)
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            setDataUser(json)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }
     
      function deleteData(id) {
        fetch(jsonUrl + '/' + id, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            alert('Data terhapus');
            refreshPage();
          })
       }
       

 return (
    <SafeAreaView>
    {isLoading ? (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.cardtitle}>Loading...</Text>
      </View>
    ) : (
      <View>
        <FlatList
          style={{ marginBottom: 0 }}
          data={dataUser}
          onRefresh={() => { refreshPage() }}
          refreshing={refresh}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
   <TouchableOpacity>
             <View style={styles.card}>
               <View style={styles.avatar}>
                 <FontAwesomeIcon icon={faGraduationCap} size={50} color={item.color} />
               </View>
               <View>
                 <Text style={styles.cardtitle}>{item.first_name} {item.last_name}</Text>
                 <Text>{item.kelas}</Text>
                 <Text>{item.gender}</Text>
               </View>
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                 <FontAwesomeIcon icon={faChevronRight} size={20} />
               </View>
             </View>
           </TouchableOpacity>
           <View style={styles.form}>
 <Button title="Hapus"
  onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
   { text: 'Tidak', onPress: () => console.log('button tidak') },
   { text: 'Ya', onPress: () => deleteData(item.id) },
  ])}
  color={'red'}
 />
</View>

         </View>
       )}
     />
   </View>
 )}
</SafeAreaView>

 )
}

export default Listdata

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
      },
      form: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 20,
      },
     })
     