
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
const Createdata = () => {
    const jsonUrl = 'http://10.0.2.2:3000/mahasiswa'; //api yang digunakan emulator untuk mengakses localhost komputer
    const [first_name, setFirstName] = useState(''); 
    const [last_name, setLastName] = useState('');
    const [kelas, setKelas] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
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
    
      
    const submit = () => {
        const data = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          kelas: kelas,
          gender: gender,
        };
        fetch(`http://10.0.2.2:3000/mahasiswa/${selectedUser.id}`, {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              alert('Data tersimpan');
              setFirstName('');
              setLastName('');
              setKelas('');
              setGender('');
              setEmail('');
              refreshPage();
              FlatList.refresh();
            })
        }
       
 const [selectedUser, setSelectedUser] = useState({});
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
 const selectItem = (item) => {
   setSelectedUser(item);
   setFirstName(item.first_name);
   setLastName(item.last_name);
   setKelas(item.kelas);
   setGender(item.gender);
   setEmail(item.email);
 }
    return (
        <SafeAreaView>
     <View>
       {isLoading ? (
         <View style={{ alignItems: 'center', marginTop: 20 }}>
           <Text style={styles.cardtitle}>Loading...</Text>
         </View>
       ) : (
         <View>
            <ScrollView>
           <View>
             <Text style={styles.title}>Edit Data Mahasiswa</Text>
             <View style={styles.form}>
               <TextInput style={styles.input} placeholder="Nama Depan" value={first_name} onChangeText={(value) => setFirstName(value)} />
               <TextInput style={styles.input} placeholder="Nama Belakang" value={last_name} onChangeText={(value) => setLastName(value)} />
               <TextInput style={styles.input} placeholder="Kelas" value={kelas} onChangeText={(value) => setKelas(value)} />
               <TextInput style={styles.input} placeholder="Jenis Kelamin" value={gender} onChangeText={(value) => setGender(value)} />
               <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} />
               <Button title="Edit" style={styles.button} onPress={submit} />
             </View>
           </View>
           <View style={styles.devider}></View>
           
           <FlatList
             style={{ marginBottom: 10 }}
             data={dataUser}
             onRefresh={() => { refreshPage() }}
             refreshing={refresh}
             keyExtractor={({ id }, index) => id}
             renderItem={({ item }) => (
               <View>
                 <TouchableOpacity onPress={() => selectItem(item)}>
                   <View style={styles.card}>
                     <View style={styles.avatar}>
                       <FontAwesomeIcon icon={faGraduationCap} size={50} />
                     </View>
                     <View>
                       <Text style={styles.cardtitle}>{item.first_name} {item.last_name}</Text>
                       <Text>{item.kelas}</Text>
                       <Text>{item.gender}</Text>
                     </View>
                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                       <FontAwesomeIcon icon={faPenToSquare} size={20} />
                     </View>
                   </View>
                 </TouchableOpacity>
               </View>
             )}
           />
           </ScrollView>
         </View>
       )}
     </View>
   </SafeAreaView>
    )
       
}
export default Createdata
const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    form: {
      padding: 10,
      marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
      },
      button: {
        marginVertical: 10,
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
        }
})     