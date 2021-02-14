import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const NoPlayers = ({ navigation }) => {
    return (
        <View style={styles.noPContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="ios-person-sharp" size={34} color="white" style={styles.personIcon} />
            </View>
            <Text style={styles.topText}>NO PLAYERS ADDED</Text>
            <Text style={styles.botText}>Please add new players</Text>
            <Text style={styles.botText}>to start the game</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    noPContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    iconContainer: {
        marginBottom: 10,
        height: 56,
        width: 56,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    personIcon: {
        top: -2,
        right: -2,

    },
    topText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'ralewayBold',
        marginBottom: 5,
    },
    botText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'raleway',
    }


});

export default NoPlayers;