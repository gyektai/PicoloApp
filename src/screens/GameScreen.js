import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/PlayerContext';
import { useSpring, animated, config } from 'react-spring';


const allCards = [{ task: 'Drink a shot' }, { task: '*name Kill your drink' }, { task: 'Girls take a shot' }, { task: 'Hands Up' }, { task: 'You blow' }, { task: 'Card card' }, { task: '*name mess with *name' }, { task: 'Hit *name with some shit' }, { task: '*name has to do a body shot off of *name'}];
let players = [];

let curCardIndex = 0;
let numCardsPlayed = 0;

const AnimatedText = animated(Text);
const AnimatedTask = ({ task }) => {
    console.log('called again');
    const props = useSpring({
        translateX: 0,
        from: {translateX: -200},
        config: {tension: 200, friction: 5}});
    console.log(props);
    return <AnimatedText style={{...styles.task, transform: [{ translateX: props.translateX}]}}>{task}</AnimatedText>;
}

const GameScreen = ({ navigation }) => {
    const [card, setCard] = useState(allCards[0]);
    const { state } = useContext(Context);

    // to load the player list, only necessary the first time
    // maybe useContext automatically deals with that but I'm gonna need to 
    // change the players array so I don't want to deal with it and Context
    useEffect(() => {
        players = state;
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
        const cardParts = cardToChange.task.split('*name');
        let buildingString = cardParts[0];
        let randName = 0;

        for(let i = 1; i < cardParts.length; i++){
            randName = Math.floor(Math.random() * players.length);
            buildingString = buildingString.concat(players[randName].playerName);
            buildingString = buildingString.concat(cardParts[i]);
        }

        return { task: buildingString };
    }

    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <AnimatedTask task={card.task} key={card} />
            </View>
            <View style={styles.justALine}></View>
            <View style={styles.nextBtnContainer}>
            <TouchableOpacity
                onPress={handleNextCard}
            >
                <Text style={styles.nextCardButton}>Next Card</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#ff0066',

    },
    taskContainer: {
        flex: 4,
        justifyContent: 'center',
    },
    task: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40
    },
    nextBtnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    nextCardButton: {
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
    },
});

export default GameScreen;