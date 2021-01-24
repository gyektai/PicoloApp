import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ConfigPlayers from './ConfigPlayers';
import ConfigDeck from './ConfigDeck';
import ConfigDrinks from './ConfigDrinks';

const CarouselCardItem = ({ item, index }) => {

    switch (item.component) {
        case 'players':
            return (
                <View style={{ backgroundColor: '#ff0066'}}>
                    <ConfigPlayers />
                </View>
            );
        case 'deck':
            return (
                <View style={{ backgroundColor: '#ff0066'}}>
                    <ConfigDeck />
                </View>
            );
        case 'drinks':
            return (
                <View style={{ backgroundColor: '#ff0066'}}>
                    <ConfigDrinks />
                </View>
            );
        default:
            return (
                <View style={{ backgroundColor: '#ff0066'}}>
                    <Text style={{ fontSize: 100 }}>Default</Text>
                </View>
            );
    }

    return (
        <View></View>
    );
};

const styles = StyleSheet.create({
});

export default CarouselCardItem;