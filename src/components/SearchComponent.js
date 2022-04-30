import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const width = Dimensions.get('window').width

const SearchComponent = ({ handleSearchInput, handleSort, placeholder, sortTitle }) => {

    return (
        <View style={styles.container}>
            <Feather name='search' size={24} color='white' style={{ alignSelf: 'center', padding: 15 }} />
            <TextInput
                placeholderTextColor={'white'}
                placeholder={placeholder}
                placeholderFontSize={14}
                color='white'
                style={styles.search}
                //onChangeText={(text) => handleSearchInput(text)}
            />
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 12, backgroundColor: '#4C7368', borderRadius: 10}}
                onPress={handleSort}
            >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{ color: 'orange', fontSize: 14,}}>{sortTitle}</Text>
                    <Feather name='chevron-down' size={24} color='white' style={{ alignSelf: 'center'}} />
                </View>

            </TouchableOpacity>
        </View>
    );
}

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64,
        width: width - 40,
        borderColor: '#aaa',
        borderRadius: 10,
        backgroundColor: '#4C7368',
        margin: 20
    },
    search: {
        flex: 3,
        fontSize: 16
    }
})
