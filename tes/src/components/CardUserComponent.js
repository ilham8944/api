import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


const CardUserComponent = ({ data, handleClicked, handleDeleteUser }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => handleClicked(data)}>
            <Icon
                name='x'
                size={24}
                style={styles.title}
                onPress={() => handleDeleteUser(data._id)}
            />
            <Text>{data.nim}</Text>
            <Text>{data.nama}</Text>
            <Text>{data.prodi}</Text>
            <Text>{data.alamat}</Text>
            <Text>{data.status}</Text>
        </TouchableOpacity>
    );
}

export default CardUserComponent;

const styles = StyleSheet.create({
    container: {
        height: 124,
        backgroundColor: 'white',
        display: 'flex',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 10,
        right: 10
    },
})
