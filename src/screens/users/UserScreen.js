import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Modal, TextInput, Button, ToastAndroid, Image } from "react-native";
import SearchComponent from '../../components/SearchComponent';
import CardUserComponent from '../../components/CardUserComponent';
import VectorIcon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather'
import { createUser, editUser, listUser, removeUser } from '../users/UserService'
// import image from '../images/logo.png'
const initialForm = {
    
    id: "",
    kategori: "",
    nama: "",
    harga: "",
    stok: "",
}

const UserScreen = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [users, setUsers] = useState([])
    const [form, setForm] = useState(initialForm)

    const loadData = () => {
        listUser().then(resp => {
            setUsers(resp.data)  
        })
    }

    const handleSave = (action) => {
        switch (action) {
            case 'CREATE': {
                createUser(form)
                .then((result) => console.log(result))
                .catch((error) => console.log(error))
                setForm(initialForm)
                setModalVisible(false)
                loadData()    
            }

                break;

            case 'UPDATE': {
                editUser(form)
                .then((result) => console.log(result))
                .catch((error) => console.log(error))
                setForm(initialForm)
                setModalVisible(false)
                loadData()
                    
                
            }
                break;

            default:
                break;
        }
    }


    const handleTextInput = (id, text) => {
        setForm({ ...form, [id]: text })
    }

    const handleSelectedUser = (user) => {
        setForm(user)
        setModalVisible(true)
    }

    const handleDeleteUser = (id) => {
        removeUser(id)
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
        .then(loadData())
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={styles.container}>
            <SearchComponent placeholder={'Cari Menu'}/>
            <FlatList
                data={users}
                renderItem={({ item: user }) => <CardUserComponent data={user} handleClicked={handleSelectedUser} handleDeleteUser={handleDeleteUser}/>}
                keyExtractor={({ id }) => id}
            />

            <VectorIcon name='add-circle' size={70} style={{ position: 'absolute', bottom: 15, right: 15}} color={'#4C7368'}
                onPress={() => setModalVisible(!modalVisible)}
            />
            <Modal
                visible={modalVisible}
                animationType='fade'
                presentationStyle='overFullScreen'
            >
                <View style={styles.centeredModal}>
                    <View style={styles.modalView}>
                        <View style={styles.title}>
                            <Text style={styles.modalTitle}>Menu</Text>
                            <Icon
                                name='x'
                                size={24}
                                onPress={() => setModalVisible(false)}
                            />
                        </View>

                        <TextInput style={styles.input}
                            value={form.id}
                            placeholder="id"
                            placeholderTextColor='#6E6868'
                            onChangeText={(text) => handleTextInput('id', text)}
                        />
                        <TextInput style={styles.input}
                            value={form.kategori}
                            placeholder="Kategori"
                            placeholderTextColor='#6E6868'
                            onChangeText={(text) => handleTextInput('kategori', text)}
                        />
                        <TextInput style={styles.input}
                            value={form.nama}
                            placeholder="Nama"
                            placeholderTextColor='#6E6868'
                            onChangeText={(text) => handleTextInput('nama', text)}
                        />
                        <TextInput style={styles.input}
                            value={form.harga}
                            placeholder="Harga"
                            placeholderTextColor='#6E6868'
                            onChangeText={(text) => handleTextInput('harga', text)}
                        />
                        <TextInput style={styles.input}
                            value={form.stok}
                            placeholder="Stok"
                            placeholderTextColor='#6E6868'
                            onChangeText={(text) => handleTextInput('stok', text)}
                        />
                        <View style={styles.button}>
                            <Button 
                                color='#4E6980'
                                title="Tambah"
                                onPress={() => {
                                    handleSave('CREATE')
                                }}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button style={styles.button}
                                color='#4C7368'
                                title="Update"
                                onPress={() => {
                                    handleSave('UPDATE')
                                }}
                            />
                        </View>
                       
                    </View>
                </View>
            </Modal>


        </View>);
}

export default UserScreen;
export {initialForm}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDE5A5'
    },
    centeredModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FDE5A5'
    },
    modalView: {
        backgroundColor: "#DB8667",
        borderRadius: 10,
        padding: 20,
        margin: 20,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    button: {
        marginBottom:10,
        backgroundColor:'red'
    },
    input: {
        fontSize: 18,
        color: "white",     
        fontWeight: "bold",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    image:{
        width: 180,
        height: 70,
        resizeMode: 'cover',

    }

})