import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import EventCard from './EventCard';

export default class SportEvent extends Component {

    render() {
        return (
            <View>
                <EventCard
                    cardTitle="Sp Event"
                    eventDate="Nov 12, 2009"
                    eventTime={{
                        start: "19:00",
                        end: "20:00"
                    }}
                    imgSrc={require("../assets/bg-masthead-2.jpg")}>
                </EventCard>
                <EventCard
                    cardTitle="Sp Event"
                    eventDate="Nov 12, 2009"
                    eventTime={{
                        start: "19:00",
                        end: "20:00"
                    }}
                    imgSrc={require("../assets/bg-masthead-1.jpg")}>
                </EventCard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventDateContainer: {
        flex: 1,
        flexDirection: "row"
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        flex: 1
    }
});
