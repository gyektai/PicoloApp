import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useSpring, animated } from 'react-spring';
import Svg, { Circle } from 'react-native-svg';

const Dot = () => {
    const props = useSpring({
        from: {fontSize: 20},
        to: {fontSize: 34},
        config: {tension: 200, friction: 5}
        }
    );
    return (
        <View>
            <Svg height="100" width="100">
                <Circle cx="50" cy="50" r="50" fill="white" />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Dot;