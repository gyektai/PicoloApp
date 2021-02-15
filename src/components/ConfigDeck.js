import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/DeckContext';
import Decks from '../static/deckData';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 


import useDecks from '../hooks/useDecks';

const ConfigDecks = () => {
    const [getDecks, results] = useDecks();
    const { state, changeDeck } = useContext(Context);


    // the async function has to be declared in the useEffect to be called in it
    // this is for using an api to load the decks but now I do that all locally which is so much easier
    /*
    useEffect(() => {
        const loadDecks = async () => {
            await getDecks();
            console.log(results[3]);
        };
        loadDecks();
    }, []);
    */
    const selectedDeckOption = (deckTitle) => (
        <LinearGradient colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.05)']} style={styles.lg}>
            <Feather name="check" size={28} color="white" style={styles.checkIcon} />
            <Text style={{ ...styles.deckOption, ...styles.deckSelected }}>{deckTitle}</Text>
        </LinearGradient>
    );
    const unselectedDeckOption = (deckTitle) => (
        <Text style={styles.deckOption}>{deckTitle}</Text>
    )

    return (
        <View style={styles.container}>
            <View style={styles.deckListContainer}>
                <FlatList 
                        data={Decks}
                        keyExtractor={deck => deck.title}
                        scrollEnabled={false}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity 
                                    style={styles.deckTOp}
                                    onPress={() => {
                                    changeDeck(item.item);
                                }}>
                                    <View style={styles.deckContainer}>
                                        {item.item === state ? selectedDeckOption(item.item.title) : unselectedDeckOption(item.item.title)}
                                    </View>
                                </TouchableOpacity>
                            
                            );
                        }}
                        numColumns={2}
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
    deckListContainer: {
        height: 320,

    }, 
    // deck touchable opacity
    deckTOp: {
        flex: 1,
        justifyContent: 'center'
    },
    lg: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        borderRadius: 12,
    },
    checkIcon: {
        position: 'absolute',
        right: 10,
        top: 7,
    },
    deckContainer: {
        height: 140,
        width: 140,
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 2,
        borderRadius: 14,
        marginVertical: 10,
        paddingHorizontal: 6,
        justifyContent: 'center',
    },
    deckOption: {
        color: 'white',
        fontFamily: 'raleway',
        fontSize: 28,
        textAlign: 'center',
    },
});

export default ConfigDecks;