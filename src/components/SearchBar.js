import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ebecf0',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 16
    }
})

export default SearchBar