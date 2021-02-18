import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem from '../components/CarouselCardItem';
import Dot from '../components/Dot';
import Background from '../components/Background';
import PlayCircle from '../components/PlayCircle';
import ActiveDot from '../components/ActiveDot';
import InactiveDot from '../components/InactiveDot';

const WIDTH = Dimensions.get('window').width;
export const SLIDER_WIDTH = WIDTH + 40;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const ConfigScreen = ({ navigation }) => {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    const config = (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.pageTitle}>
                    {index === 0 ? "Players" : null}
                    {index === 1 ? "Vibe" : null}
                    {index === 2 ? "Drinks" : null}
                </Text>
                <Pagination
                    dotsLength={3}
                    activeDotIndex={index}
                    dotElement={<ActiveDot />}
                    inactiveDotElement={<InactiveDot />}
                    carouselRef={isCarousel}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
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
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    pageTitle: {
        color: 'white',
        fontSize: 42,
        fontFamily: 'raleway',
        top: -20,
        right: -1*(WIDTH - (WIDTH+40)*0.7)/2,
    },
    carouselContainer: {
        flex: 6,
        alignSelf: 'center'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        top: -30,
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