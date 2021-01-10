import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/PlayerContext';

const decks = [{ title: 'Quick Play', id: 1 }, { title: 'Best Cards', id: 2 }, { title: 'So Fucked Up', id:3 }, {title: 'So Much Drinking', id: 4}];

const SelectorScreen = ({ navigation }) => {
    const [deck, setDeck] = useState('Quick Play');
    const [newPlayerName, setNewPlayerName] = useState('');

    const { players, addPlayer } = useContext(Context);

    return (
        <View>
            <FlatList 
                data={decks}
                keyExtractor={deck => deck.title}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            setDeck(item.item.title );
                        }}>
                            <Text style={item.item.title === deck ? styles.deckSelected : styles.deckOption}>{item.item.title}</Text>
                        </TouchableOpacity>
                    
                    );
                }}
            />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Add New Player...'
                maxLength={25}
                value={newPlayerName}
                onChangeText={(text) => setNewPlayerName(text)}
                onEndEditing={() => {
                    addPlayer( newPlayerName );
                    setNewPlayerName('');
                }}
                style={styles.playerInput}
            />
            <FlatList
                data={players}
                keyExtractor={player => player.playerName}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.playerName}</Text>
                    );
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Game')}
            >
                <Text>Play!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    deckOption: {

    },
    deckSelected: {
        fontWeight: 'bold'
    },
    playerInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
});



export default SelectorScreen;