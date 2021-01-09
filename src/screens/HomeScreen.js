import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSpring, animated } from 'react-spring';
import { FontAwesome5 } from '@expo/vector-icons';

const AnimatedText = animated(Text);

const HomeScreen = ({ navigation }) => {
    const props = useSpring({
        from: {fontSize: 20},
        to: {fontSize: 60},
        config: {tension: 200, friction: 5}
        }
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <AnimatedText style={{...props, ...styles.title}}>It&apos;s Picolo,</AnimatedText>
                <AnimatedText style={{...props, ...styles.title}}>Mofo!</AnimatedText>
                
            </View>
            <View style={styles.justALine}></View>
            <View style={styles.playContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Selector')}>
                        <Text style={styles.play}>Play <FontAwesome5 name='long-arrow-alt-right' style={{fontSize: 30}} /></Text>
                        
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
    titleContainer: {
        flex: 4,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: 'white'
    },
    
    playContainer: {
        flex: 1,

        justifyContent: 'flex-end'

    },
    play: {
        fontSize: 34,
        textAlign: 'center',
        height: 120,
        paddingTop: 30,
        borderColor: 'white',
        borderTopWidth: 3,
        color: 'white'

    },
    justALine: {
        borderColor: 'white',
        borderWidth: 1
    },
});

export default HomeScreen;