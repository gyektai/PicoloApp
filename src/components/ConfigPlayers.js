import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/PlayerContext';


const ConfigPlayers = () => {
    const [newPlayerName, setNewPlayerName] = useState('');

    const { state, addPlayer } = useContext(Context);

    return (
        <View>
            <Text style={styles.heading}>players</Text>
            <View style={styles.adderContainer}>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='Add New Player...'
                    placeholderTextColor='white'
                    maxLength={12}
                    value={newPlayerName}
                    onChangeText={(text) => setNewPlayerName(text)}
                    onSubmitEditing={() => {
                        addPlayer(newPlayerName);
                        setNewPlayerName('');
                    }}
                    style={styles.playerInput}
                />
                <View style={styles.nameListContainer}>
                    <FlatList
                        data={state}
                        keyExtractor={player => player.playerName}
                        renderItem={({ item }) => {
                            return (
                                <Text style={styles.nameAdded}>{item.playerName}</Text>
                            );
                        }}
                        numColumns={2}
                    />

                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    adderContainer: {
        flexDirection: 'column-reverse',
        height: 320,
    },
    heading: {
        color: 'white',
        fontSize: 36,
        alignSelf: 'center',
    },
    playerInput: {
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 5,
        height: 40,
        fontSize: 22,
        paddingLeft: 6,
        color: 'white',

    }, 
    nameListContainer: {
        flex: 1
    },
    nameAdded: {
        color: 'white',
        fontSize: 28,
        flex: 1,
        textAlign: 'center',
        paddingTop: 23
    },
});

export default ConfigPlayers;