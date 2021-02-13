import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ConfigPlayers from './ConfigPlayers';
import ConfigDeck from './ConfigDeck';
import ConfigDrinks from './ConfigDrinks';

const CarouselCardItem = ({ item, index }) => {

    switch (item.component) {
        case 'players':
            return (
                <View style={styles.card}>
                    <ConfigPlayers />
                </View>
            );
        case 'deck':
            return (
                <View style={styles.card}>
                    <ConfigDeck />
                </View>
            );
        case 'drinks':
            return (
                <View style={styles.card}>
                    <ConfigDrinks />
                </View>
            );
        default:
            return (
                <View style={styles.card}>
                    <Text style={{ fontSize: 100 }}>Default</Text>
                </View>
            );
    }

    return (
        <View></View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.2)',
    }
});

export default CarouselCardItem;