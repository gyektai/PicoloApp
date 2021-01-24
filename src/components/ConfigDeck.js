import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/DeckContext';

import useDecks from '../hooks/useDecks';

const ConfigDecks = () => {
    const [getDecks, results] = useDecks();
    const { state, changeDeck } = useContext(Context);


    // the async function has to be declared in the useEffect to be called in it
    useEffect(() => {
        const loadDecks = async () => {
            await getDecks();
        };
        loadDecks();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>vibe</Text>
            <View style={styles.deckListContainer}>
                <FlatList 
                        data={results}
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
        padding: 8,
    },
    header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36
    },
    deckListContainer: {
        height: 325,

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