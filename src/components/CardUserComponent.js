import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert, Image, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';


const CardUserComponent = ({ data, handleClicked, handleDeleteUser }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => handleClicked(data)}>
            <Icon
                name='x'
                size={26}
                style={styles.title}
                onPress={() => handleDeleteUser(data.id)}
            />
            
            <View style={styles.text}>
                <Text style={styles.mhs}>{data.id}</Text>
                <Text style={styles.mhs}>{data.kategori}</Text>
                <Text style={styles.mhs}>{data.nama}</Text>
                <Text style={styles.mhs}>{data.harga}</Text>
                <Text style={styles.mhs}>{data.stok}</Text>
            </View>          
            
        </TouchableOpacity>
    );
}

export default CardUserComponent;

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: '#DB8667',
        display: 'flex',
        borderWidth: 2,
        borderColor: '#4C7368',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
    },

    title: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    mhs: {
        fontSize: 18,
        color: "white",     
        fontWeight: "bold"
    },

    text:{
        alignItems:'center'
    },
    
    image:{
        width: 60,
        height: 100,
        resizeMode: 'contain',

    }
})
