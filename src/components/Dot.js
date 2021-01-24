import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { useSpring, animated } from 'react-spring';
import Svg, { Circle } from 'react-native-svg';

const AnimatedView = animated(View);

const Dot = ({ direction, xPos, yPos }) => {
    
    const from = direction === 'horizontal' ? { right: xPos+30 } : { top: yPos+30 };
    const to   = direction === 'horizontal' ? { right: xPos} : { top: yPos };
    const [alt, setAlt] = useState(true);
    /* const props = useSpring({
        from,
        to,
        config: { tension: 200, friction: 5 }
    });
    */
    const props = direction === 'horizontal'
        ? useSpring({
            from: {right: xPos+50},
            to: async next => {
                while(1) {
                    await next({ right: xPos });
                    setAlt(false);
                    await next({ right: xPos+50 });
                    setAlt(true);
                }
            },
            config: !alt ? { tension: 250, friction: 18 } : { tension: 90, friction: 15 }
        })
        : useSpring({

        });

    return (
        <AnimatedView style={props}>
            <Svg height="100" width="100">
                <Circle cx="6" cy="6" r="6" fill="white" />
            </Svg>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({});

export default Dot;