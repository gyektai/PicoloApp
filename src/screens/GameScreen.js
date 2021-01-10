import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const allCards = [{ task: 'Drink a shot' }, { task: 'Kill your drink' }, { task: 'Girls take a shot' }];
let curCardIndex = 0;

const GameScreen = ({ navigation }) => {
    const [card, setCard] = useState(allCards[0]);

    return (
        <View>
            <Text style={styles.task}>{card.task}</Text>
            <TouchableOpacity
                onPress={() => {
                    curCardIndex++;
                    setCard(allCards[curCardIndex]);
                }}
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