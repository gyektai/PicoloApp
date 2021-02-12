import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const BGCircle = ({ size, color, x, y }) => {
    return (
        <Svg width={size} height={size} style={{ position: 'absolute', left: x, top: y }}>
            <Circle cx={size/2} cy={size/2} r={size/2} fill={color}/>
        </Svg>
    );
};

const styles = StyleSheet.create({

});

export default BGCircle;