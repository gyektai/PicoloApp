import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import DrinkOption from './DrinkOption'


const ConfigDrinks = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>drinks</Text>
            <View style={styles.drinkListContainer}>
                <FlatList 
                        data={[{ drink: 'tequila' }, { drink: 'beer' } , { drink: 'vodka' }, { drink: 'seltzer' }]}
                        keyExtractor={item => item.drink}
                        renderItem={(item) => {
                            return (
                                <DrinkOption drink={item.item.drink} isSelected={true} />
                            );
                        }}
                    />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36
    },
    drinkListContainer: {
        height: 325,

    }, 
    deckTOp: {
        flex: 1
    },
    drinkOption: {
        color: 'white',
        fontSize: 24,
        marginVertical: 10,
        marginLeft: 15,
        paddingHorizontal: 6

    },
});

export default ConfigDrinks;