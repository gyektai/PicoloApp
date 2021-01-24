import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const DrinkOption = ({ drink }) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => setSelected(!selected)}>
            <View style={styles.container}>
                <Text style={styles.text}>{drink}</Text>
                <View style={styles.checkContainer}>
                    {selected ? <Entypo name="check" size={30} color="#ff0066" style={styles.check} /> : null}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginVertical: 10,
        marginLeft: 15,
        paddingHorizontal: 6

    },
    checkContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        height: 30,
        width: 30,
        backgroundColor: 'white',
        top: 4
    },
    check: {
        top: -3,
        right: 2
    }
});

export default DrinkOption;