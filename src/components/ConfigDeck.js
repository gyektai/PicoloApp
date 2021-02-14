import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/DeckContext';
import Decks from '../static/deckData';

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
                                    <Text style={item.item === state ? { ...styles.deckOption, ...styles.deckSelected } : styles.deckOption}>{item.item.title}</Text>
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
    deckTOp: {
        flex: 1
    },
    deckOption: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 50,
        paddingHorizontal: 6

    },
    deckSelected: {
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        // has to be different than the deckOption because of the border and padding
        marginVertical: 37,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
});

export default ConfigDecks;