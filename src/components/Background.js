import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {BlurView } from 'expo-blur';
import Svg, { Circle } from 'react-native-svg';
import BGCircle from './BGCircle';
import Title from './Title';
import NextCardButton from './NextCardButton';

// double blurview to make the shapes so much better and less harsh
const Background = ({ component }) => {
    return (
        <LinearGradient colors={['rgba(0, 172, 181, 1)', 'rgba(0, 94, 217, 1)']} style={styles.lg}>
            
            <BGCircle size={150} color={"#7418a7"} x={-75} y={400} />
            <BGCircle size={210} color={"#ffd06b"} x={230} y={-60} />
            <BGCircle size={150} color={"#eca4fc"} x={160} y={250} />
            <BGCircle size={200} color={"#4cdcec"} x={220} y={400} />
            <BGCircle size={150} color={"#4cdcec"} x={0} y={0} />

            <BlurView intensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                <BlurView intensity={30} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    {component}
                </BlurView>
            
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