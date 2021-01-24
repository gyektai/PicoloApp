import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WIDTH = Dimensions.get('screen').width;

const MyBezier = () => {
    return (
        <Svg width={WIDTH+16} height="200.973" viewBox="8 0 420.705 200.973">
            <Path
                stroke="white" strokeWidth={10}
                transform="translate(0.821 -396.806)"
                d="M1.034,597.033C46.359,484.37,383.617,512.089,417.968,397.38"
            />
        </Svg>
    );
};

export default MyBezier;