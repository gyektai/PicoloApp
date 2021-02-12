import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSpring, animated } from 'react-spring';

import MyBezier from '../components/MyBezier';
import Dot from '../components/Dot';
import Background from '../components/Background';
import Title from '../components/Title';

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

    

    const home = (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title />
                
            </View>
            <View style={styles.startContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                    <View style={styles.startButton}>
                        <Text style={styles.startText}>S   T   A   R   T</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/*}
            <View style={styles.playContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                        <View style={styles.dotContainer}>
                            <Dot direction='horizontal' xPos={0} />
                        </View>
                        <AnimatedText style={{...mProps, ...styles.play}}>play</AnimatedText>
                        
                    </TouchableOpacity>
            </View>
            */}
        </View>
    );
    return <Background component={home} />
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    titleContainer: {
        flex: 4,
        alignItems: 'center',
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
    startContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',


    },
    startButton: {
        backgroundColor: 'rgba(255, 255, 255, .25)',
        height: 60,
        width: 274,
        borderRadius: 30,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    startText: {
        color: 'white',
        opacity: 1,
        fontSize: 18,
        fontFamily: 'ralewayBold',

    },
    justALine: {
        borderColor: 'white',
        borderWidth: 1
    },
});

export default HomeScreen;