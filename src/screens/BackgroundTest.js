import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import PlayCircle from '../components/PlayCircle';
import NextCardButton from '../components/NextCardButton';


const BackgroundTest = () => {
    return (
        <Background component={[<PlayCircle size={260} />, <NextCardButton /> ]}/>
    );
};

const styles = StyleSheet.create({});

export default BackgroundTest;