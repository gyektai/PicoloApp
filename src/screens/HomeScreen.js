import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSpring, animated } from 'react-spring';

import MyBezier from '../components/MyBezier';
import Dot from '../components/Dot';


const AnimatedText = animated(Text);


const HomeScreen = ({ navigation }) => {
    const iProps = useSpring({
        from: {fontSize: 20},
        to: {fontSize: 34},
        config: {tension: 200, friction: 5}
        }
    );
    const pProps= useSpring({
        from: {fontSize: 20},
        to: {fontSize: 76},
        config: {tension: 200, friction: 5}
        }
    );
    const mProps = useSpring({
        from: {fontSize: 20},
        to: {fontSize: 48},
        config: {tension: 200, friction: 5}
        }
    );

    

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <AnimatedText style={{...iProps, ...styles.title}}>it&apos;s <AnimatedText style={{...pProps, ...styles.title}}>Picolo,</AnimatedText></AnimatedText>
                <AnimatedText style={{...mProps, ...styles.title, ...styles.mTitle}}>mofo!</AnimatedText>
                
            </View>
            <View style={styles.bezierContainer}>
                <MyBezier />
            </View>
            
            <View style={styles.playContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                        <View style={styles.dotContainer}>
                            <Dot direction='horizontal' xPos={0} />
                        </View>
                        <AnimatedText style={{...mProps, ...styles.play}}>play</AnimatedText>
                        
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
        justifyContent: 'center',

    },
    title: {
        textAlign: 'center',
        color: 'white'
    },
    mTitle: {
        right: -45,
        top: -35,
    },
    bezierContainer: {
        position: 'absolute',
        top: 350,
    },
    dotContainer: {
        position: 'absolute',
        top: 62,
        right: -58,
    },
    playContainer: {
        flex: 4,

        justifyContent: 'flex-end',


    },
    play: {
        textAlign: 'center',
        height: 200,
        paddingTop: 30,
        color: 'white',
        right: -30,
        top: 10

    },
    justALine: {
        borderColor: 'white',
        borderWidth: 1
    },
});

export default HomeScreen;