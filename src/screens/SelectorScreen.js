import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const decks = ['Quick Play', 'Best Cards', 'So Fucked Up', 'So Much Drinking'];

const SelectorScreen = ({ navigation }) => {
    const [deck, setDeck] = useState('Quick Play');
    const [players, setPlayers] = useState([]);

    return (
        <View>
            <FlatList 
                data={decks}
                keyExtractor={deck => deck.title}
                renderItem={(item) => {
                    console.log(item);
                    return (
                        <TouchableOpacity onPress={() => {
                            setDeck(item.item);
                        }}>
                            <Text style={item.item=== deck ? styles.deckSelected : styles.deckOption}>{item.item}</Text>
                        </TouchableOpacity>
                    
                    );
                }}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    deckOption: {

    },
    deckSelected: {
        fontWeight: 'bold'
    }
});



export default SelectorScreen;