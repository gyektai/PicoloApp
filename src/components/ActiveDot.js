import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActiveDot = ({ index }) => {
    return (
        <View style={styles.adot}>
            <Text style={styles.indexText}>{index+1}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    adot: {
        height: 30,
        width: 30,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indexText: {
        color: 'white',
        fontFamily: 'raleway',
        fontSize: 20,
        top: -2,
        right: -1
    }
});

export default ActiveDot;