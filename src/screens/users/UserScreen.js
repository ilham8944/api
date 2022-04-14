import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Modal, TextInput, Button, ToastAndroid } from "react-native";
import SearchComponent from '../../components/SearchComponent';
import CardUserComponent from '../../components/CardUserComponent';
import VectorIcon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather'
import { createUser, editUser, listUser, removeUser } from '../users/UserService'

const initialForm = {
    
    nim: "",
    nama: "",
    prodi: "",
    alamat: "",
    status: "",
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
                    // console.log("CREATE USER", resp);
                    // showtToast(`User created with ID ${resp.data._id}`)
                    // setModalVisible(false)
                .then(loadData())
                    
                
            }

                break;

            case 'UPDATE': {
                editUser(form).then(resp => {
                    // if (resp.code == 200) {
                        showtToast(`User updated with ID ${resp.data.nim}`)
                        setModalVisible(false)
                        setForm(initialForm)
                        loadData()
                    // }
                })
            }
                break;

            default:
                break;
        }
    }

    const showtToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const handleTextInput = (nim, text) => {
        setForm({ ...form, [nim]: text })
    }

    const handleSelectedUser = (user) => {
        setForm(user)
        setModalVisible(true)
    }

    const handleDeleteUser = (nim) => {
        removeUser(nim)
        .then(loadData())
        // .then(resp => {
        //     if(resp.code == 200){
        //         showtToast(`User with ID ${nim} deleted`)
        //         loadData()
        //     }
        //     else{
        //         console.error(error);
        //     }
        // })
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={styles.container}>
            <SearchComponent placeholder={'Search User. . .'} sortTitle={'FILTER'} />
            <FlatList
                data={users}
                renderItem={({ item: user }) => <CardUserComponent data={user} handleClicked={handleSelectedUser} handleDeleteUser={handleDeleteUser}/>}
                keyExtractor={({ nim }) => nim}
            />
            <VectorIcon name='add-circle' size={66} style={{ position: 'absolute', bottom: 10, right: 10 }} color={'green'}
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
                            <Text style={styles.modalTitle}>New User</Text>
                            <Icon
                                name='x'
                                size={24}
                                onPress={() => setModalVisible(false)}
                            />
                        </View>

                        <TextInput
                            value={form.nim}
                            placeholder="nim"
                            onChangeText={(text) => handleTextInput('nim', text)}
                        />
                        <TextInput
                            value={form.nama}
                            placeholder="nama"
                            onChangeText={(text) => handleTextInput('nama', text)}
                        />
                        <TextInput
                            value={form.prodi}
                            placeholder="prodi"
                            onChangeText={(text) => handleTextInput('prodi', text)}
                        />
                        <TextInput
                            value={form.alamat}
                            placeholder="alamat"
                            onChangeText={(text) => handleTextInput('alamat', text)}
                        />
                        <TextInput
                            value={form.status}
                            placeholder="status"
                            onChangeText={(text) => handleTextInput('status', text)}
                        />
                        <Button 
                            title="Save"
                            onPress={() => {
                                handleSave('CREATE')
                                // else {
                                //     handleSave('UPDATE')
                                // }
                            }}
                        />
                        {/* <Button style={styles.button}
                            title="Update"
                            onPress={() => {
                                handleSave('UPDATE')
                            }}
                        /> */}
                    </View>
                </View>
            </Modal>


        </View>);
}

export default UserScreen;
export {initialForm}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centeredModal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    modalView: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor:'red'
    }

})