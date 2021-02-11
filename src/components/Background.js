import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView } from 'expo-blur';
import Svg, { Circle } from 'react-native-svg';
import MyCircle from './MyCircle';
import Title from './Title';

// double blurview to make the shapes so much better and less harsh
const Background = () => {
    return (
        <LinearGradient colors={['rgba(0, 244, 243, 1)', 'rgba(0, 122, 255, 1)']} style={styles.lg}>
            
            <MyCircle size={150} color={"#7418a7"} x={-75} y={400} />
            <MyCircle size={210} color={"#ffd06b"} x={230} y={-60} />
            <MyCircle size={150} color={"#eca4fc"} x={160} y={250} />
            <MyCircle size={200} color={"#4cdcec"} x={220} y={400} />

            <BlurView intensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                <Title />
                {/*<BlurView intensity={80} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <Title />
                </BlurView>
                */}
            </BlurView>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    lg: {
        ...StyleSheet.absoluteFillObject,

    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});

export default Background;