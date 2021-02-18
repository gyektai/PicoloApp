import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const DrinkOption = ({ drink }) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => setSelected(!selected)}>
            <View style={styles.container}>
                <Text style={styles.text}>{drink}</Text>
                <View style={styles.checkContainer}>
                    {selected ? <Feather name="check" size={26} color="white" style={styles.check} /> : null}
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
        fontFamily: 'raleway',
        fontSize: 20,
        marginVertical: 12,
        marginLeft: 15,
        paddingHorizontal: 6

    },
    checkContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        height: 30,
        width: 30,
        top: 4,
        right: 10,
    },
    check: {
        top: 0,
        right: 0
    }
});

export default DrinkOption;