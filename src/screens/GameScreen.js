import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as PlayerContext } from '../context/PlayerContext';
import { Context as DeckContext } from '../context/DeckContext';
import { useSpring, animated, config } from 'react-spring';

import Background from '../components/Background';
import PlayCircle from '../components/PlayCircle';
import NextCardButton from '../components/NextCardButton';

let players = [];
let allCards = [];

let curCardIndex = 0;
let numCardsPlayed = 0;

const AnimatedText = animated(Text);


const GameScreen = ( { navigation } ) => {
    const [card, setCard] = useState(allCards[0]);
    const { state: allPlayers } = useContext(PlayerContext);
    const { state: deck } = useContext(DeckContext);

    // to load the player list, only necessary the first time
    // maybe useContext automatically deals with that but I'm gonna need to 
    // change the players array so I don't want to deal with it and Context
    useEffect(() => {
        players = allPlayers;
        allCards = deck.cards;
    }, []);

    const props = useSpring({
        to: {right: 0},
        from: {right: -500},
        config: {tension: 250, friction: 12},
        reset: true,
    });

    const handleNextCard = () => {
        const addToCard = Math.floor(Math.random() * allCards.length) + 1;
        const newCardIndex = (curCardIndex + addToCard) % allCards.length;
        const newCard = allCards[newCardIndex];
        numCardsPlayed <= 20 ? setCard(addNames(newCard)) : setCard('Good Round!');
        numCardsPlayed++;
        allCards.splice(newCardIndex, 1);
    }

    // to add names to the card if it has '*name' in the card's task
    const addNames = (cardToChange) => {
        const cardParts = cardToChange.split('*name');
        let buildingString = cardParts[0];
        let randName = 0;

        for(let i = 1; i < cardParts.length; i++){
            randName = Math.floor(Math.random() * players.length);
            buildingString = buildingString.concat(players[randName].playerName);
            buildingString = buildingString.concat(cardParts[i]);
        }

        return buildingString;
    }

   const game = (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                {allCards.length !== 0
                ? <AnimatedText style={{...styles.task, ...props}}>{card}</AnimatedText>
                : <PlayCircle size={260} /> }
            </View>
            <NextCardButton handleNextCard={handleNextCard} />
        </View>
   )
    return <Background component={game} />;
};




const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',

    },
    taskContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    task: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
        fontFamily: 'raleway',
        top: -45,
        paddingHorizontal: 15
    },
});

export default GameScreen;