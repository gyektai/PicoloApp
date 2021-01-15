import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/PlayerContext';
import { FontAwesome5 } from '@expo/vector-icons';
import useDecks from '../hooks/useDecks';


// const decks = [{ title: 'Quick Play', id: 1 }, { title: 'Best Cards', id: 2 }, { title: 'So Fucked Up', id:3 }, {title: 'So Much Drinking', id: 4}];

const SelectorScreen = ({ navigation }) => {
    const [deck, setDeck] = useState('Quick Play');
    const [deckList, setDeckList] = useState([]);
    const [newPlayerName, setNewPlayerName] = useState('');
    const [getDecks, results] = useDecks();


    const { state, addPlayer } = useContext(Context);

    // the async function has to be declared in the useEffect to be called in it
    useEffect(() => {
        const loadDecks = async () => {
            await getDecks();
        };
        loadDecks();
    }, []);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.topContainer}>
                <FlatList 
                    data={results}
                    keyExtractor={deck => deck.title}
                    scrollEnabled={false}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                setDeck(item.item.title );
                            }}>
                                <Text style={item.item.title === deck ? { ...styles.deckOption, ...styles.deckSelected } : styles.deckOption}>{item.item.title}</Text>
                            </TouchableOpacity>
                        
                        );
                    }}
                />
                <View style={styles.adderContainer}>
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder='Add New Player...'
                        placeholderTextColor='white'
                        maxLength={25}
                        value={newPlayerName}
                        onChangeText={(text) => setNewPlayerName(text)}
                        onSubmitEditing={() => {
                            addPlayer(newPlayerName);
                            setNewPlayerName('');
                        }}
                        style={styles.playerInput}
                    />
                    <FlatList
                        data={state}
                        keyExtractor={player => player.playerName}
                        renderItem={({ item }) => {
                            return (
                                <Text style={styles.nameAdded}>{item.playerName}</Text>
                            );
                        }}
                    />
                </View>
            </View>
            <View style={styles.justALine}></View>
            <View style={styles.playContainer}>
 
                <TouchableOpacity
                    onPress={() => navigation.navigate('Game', { deck: results.find((deckToCheck) => deckToCheck.title === deck) })}
                >
                    <Text style={styles.play}>Play <FontAwesome5 name='long-arrow-alt-right' style={{fontSize: 30}} /></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#0000ff',
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start'
    },
    topContainer: {
        flex: 4
    },
    deckOption: {
        color: 'white',
        fontSize: 24,
        marginVertical: 10,
        marginHorizontal: 15,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        padding: 5,
    },
    deckSelected: {
        fontWeight: 'bold'
    },
    adderContainer: {
        flex: 2000
    },
    playerInput: {
        fontSize: 22,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        color: 'white',
    },
    nameAdded: {
        color: 'white',
        marginLeft: 15,
        marginVertical: 5,
    },
    playContainer: {
        flex: 1,

        justifyContent: 'flex-end'

    },
    play: {
        fontSize: 34,
        textAlign: 'center',
        height: 120,
        paddingTop: 30,
        borderColor: 'white',
        borderTopWidth: 3,
        color: 'white'

    },
    justALine: {
        alignSelf: 'stretch',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 4,
    },
});



export default SelectorScreen;