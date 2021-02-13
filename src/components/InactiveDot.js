import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InactiveDot = ({ index }) => {
    return (
        <View style={styles.idot}>
        </View>
    );
};

const styles = StyleSheet.create({
    idot: {
        height: 10,
        width: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 8
    },

});

export default InactiveDot;