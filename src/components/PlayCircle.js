import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const PlayCircle = ({ size }) => {
    return (
        <View>
            <Svg width={size+2} height={size+2} style={styles.playCircles}>
                <Circle 
                    cx={size/2+1} 
                    cy={size/2+1} 
                    r={size/2} 
                    fill={'rgba(0,0,0,0)'} 
                    stroke='white' 
                    strokeWidth='1'
                    opacity='0.6'
                />
                <Circle
                    cx={size/2+1} 
                    cy={size/2+1} 
                    r={size/3}
                    fill={'rgba(255,255,255,0.3)'}
                    stroke='white'
                    strokeWidth='2'
                    opacity='0.75' 
                />
                
            </Svg>
            <Text style={{...styles.playText, top: -1*size/2-12 }}>P   L   A   Y</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    playText: { 
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'ralewayBold'
    },

    playCircles: {
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.32,
        shadowRadius: 3
    }
});

export default PlayCircle;