import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import DrinkOption from './DrinkOption'


const DRINKS = ['tequila', 'beer', 'vodka', 'seltzer', 'cider', 'bourbon', 'cocktail', 'oj', 'sprite', 'coke'];
let drinks = [];


const ConfigDrinks = () => {
    useEffect(
        () => {
            for(let i = 0; i < DRINKS.length; i++){
                drinks.push({ drink: DRINKS[i]});
            }
            console.log(drinks);
        }, []);

    return (
        <View style={styles.container}>
            <View style={styles.drinkListContainer}>
                <FlatList 
                        data={drinks}
                        keyExtractor={item => item.drink}
                        renderItem={(item) => {
                            return (
                                <DrinkOption drink={item.item.drink} isSelected={true} />
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36
    },
    drinkListContainer: {
        height: 320,

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