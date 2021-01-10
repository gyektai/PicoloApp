import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const allCards = [{ task: 'Drink a shot' }, { task: '*name Kill your drink' }, { task: 'Girls take a shot' }, { task: 'Hands Up' }, { task: 'You blow' }, { task: 'Card card' }, { task: '*name mess with *name' }, { task: 'Hit *name with some shit' }, { task: '*name has to do a body shot off of *name'}];
const players = [{ name: 'Gideon'}, { name: 'Spencer' }, { name: 'Lilah' }, { name: 'Zoe' }];

let curCardIndex = 0;
let numCardsPlayed = 0;

const GameScreen = ({ navigation }) => {
    const [card, setCard] = useState(allCards[0]);

    const handleNextCard = () => {
        const addToCard = Math.floor(Math.random() * allCards.length) + 1;
        const newCardIndex = (curCardIndex + addToCard) % allCards.length;
        const newCard = allCards[newCardIndex];
        numCardsPlayed <= 20 ? setCard(addNames(newCard)) : setCard('Good Round!');
        numCardsPlayed++;
        allCards.splice(newCardIndex, 1);
    }

    const addNames = (cardToChange) => {
        const cardParts = cardToChange.task.split('*name');

        let buildingString = cardParts[0];
        let randName = 0;
        for(let i = 1; i < cardParts.length; i++){
            randName = Math.floor(Math.random() * players.length);
            buildingString = buildingString.concat(players[randName].name);
            buildingString = buildingString.concat(cardParts[i]);
        }
        return { task: buildingString };
    }

    return (
        <View>
            <Text style={styles.task}>{card.task}</Text>
            <TouchableOpacity
                onPress={handleNextCard}
            >
                <Text>Next Card</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    task: {
        marginTop: 20,
    },
});

export default GameScreen;