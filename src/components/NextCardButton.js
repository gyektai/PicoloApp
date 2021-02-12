import React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Entypo } from '@expo/vector-icons';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const NextCardButton = ({ handleNextCard }) => {
    return (
        <View style={styles.ncContainer}>
            <View style={styles.notTouchableBuffer}>
            </View>
            <TouchableOpacity onPress={handleNextCard}>
                <Svg width={WIDTH} height="185.296" viewBox="0 0 414 140"> 
                    <Path
                        d="M0,105.3a30,30,0,0,1,30-30H384a30,30,0,0,0,30-30h0v140H0Z"
                        fill="rgba(0,0,0,0.12)"
                    />
                </Svg>
            
            <Text style={styles.ncText}>N E X T   C A R D</Text>
            <Entypo name="chevron-thin-right" size={28} color="white" style={styles.rarrIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    ncContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent:'flex-end'

    },
    ncText: {
        color: 'white',
        position: 'absolute',
        fontSize: 18,
        fontFamily: 'ralewayBold',
        bottom: 37,
        right: WIDTH/2-65
    },
    rarrIcon: {
        position: 'absolute',
        bottom: 35,
        right: 10
    },
    notTouchableBuffer: {
        height: 90,
        width: WIDTH,
        top: 80,
        zIndex:2
    }
})

export default NextCardButton;
/*
<svg xmlns="http://www.w3.org/2000/svg" width="414" height="140" viewBox="0 0 414 140">
  <path id="Rectangle" d="M0,105.3a30,30,0,0,1,30-30H384a30,30,0,0,0,30-30h0v140H0Z" transform="translate(0 -45.296)" fill="rgba(0,0,0,0.1)"/>
</svg>

*/