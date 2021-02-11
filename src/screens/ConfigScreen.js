import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from '../components/CarouselCardItem';
import Dot from '../components/Dot';


export const SLIDER_WIDTH = Dimensions.get('window').width + 40
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const ConfigScreen = ({ navigation }) => {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            </View>
            <View style={styles.carouselContainer}>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={[{ component: "players" }, { component: "deck" }, { component: "drinks"}]}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
                <Pagination
                    dotsLength={3}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10, height: 10, borderRadius: 5, marginHorizontal: 0, backgroundColor: 'white'
                        }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                        <View style={styles.dotContainer}>
                            <Dot direction='horizontal' xPos={0} />
                        </View>
                        <Text style={styles.start}>start</Text>
                        
                    </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FF0066',
        opacity: 0.2,

    },
    topContainer: {
        flex: 1,
    },
    carouselContainer: {
        flex: 6,
        alignSelf: 'center'
    },
    bottomContainer: {
        flex: 2,
    },
    dotContainer: {
        position: 'absolute',
        top: 41,
        right: -10,
    },
    start: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: 30,
    },


});

export default ConfigScreen;