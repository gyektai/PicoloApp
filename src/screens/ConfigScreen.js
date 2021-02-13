import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from '../components/CarouselCardItem';
import Dot from '../components/Dot';
import Background from '../components/Background';
import PlayCircle from '../components/PlayCircle';
import ActiveDot from '../components/ActiveDot';
import InactiveDot from '../components/InactiveDot';

export const SLIDER_WIDTH = Dimensions.get('window').width + 40
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const ConfigScreen = ({ navigation }) => {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    const config = (
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
                    dotElement={<ActiveDot />}
                    inactiveDotElement={<InactiveDot />}
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
                        <PlayCircle size={150} />
                        
                </TouchableOpacity>
            </View>
        </View>
    );
    return <Background component={config} />;
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

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
        alignItems: 'center',
        top: -15,
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