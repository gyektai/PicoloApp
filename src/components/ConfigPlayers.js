import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Context } from '../context/PlayerContext';

import NoPlayers from '../components/NoPlayers';
import { Ionicons } from '@expo/vector-icons';

const ConfigPlayers = () => {
    const [newPlayerName, setNewPlayerName] = useState('');

    const { state, addPlayer } = useContext(Context);

    return (
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
            <View style={styles.insideContainer}>
            {state.length === 0
                ?   <NoPlayers />
                :   <View style={styles.namesListContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="ios-person-add-sharp" size={36} color="white" />
                        </View>
                        <FlatList
                            data={state}
                            keyExtractor={player => player.playerName}
                            renderItem={({ item, index }) => {
                                return (
                                    <Text style={styles.nameAdded}>{item.playerName}</Text>
                                );
                            }}
                            numColumns={2}
                        /> 
                    </View>
                    }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    adderContainer: {
        flexDirection: 'column-reverse',
        height: 320,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    heading: {
        color: 'white',
        fontSize: 36,
        alignSelf: 'center',
    },
    playerInput: {
        borderColor: 'rgba(255,255,255,0.6)',
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderWidth: 1,
        borderRadius: 8,
        height: 54,
        fontSize: 18,
        paddingLeft: 30,
        color: 'white',
        marginHorizontal: 18,
        marginBottom: 6

    }, 
    iconContainer: {
        marginBottom: 10,
        height: 56,
        width: 56,
        borderColor: 'rgba(255,255,255,0.6)',
        borderWidth: 1,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: 20,
    },
    apIcon: {
        top: -2,
        right: -2,
    },
    insideContainer: {
        flex: 1,
    },
    namesListContainer: {
        flex: 1,
    },
    nameAdded: {
        color: 'white',
        fontFamily: 'raleway',
        fontSize: 22,
        flex: 1,
        textAlign: 'center',
        paddingTop: 20
    },
});

export default ConfigPlayers;