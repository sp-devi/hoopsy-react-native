import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import EventCardJson from './card'
import AdaptiveCard from 'react-native-adaptivecards';

import EventCard from './EventCard';

export default class SportEvent extends Component {

    render() {
        return (
            <View>
                <EventCard >
                    <View style={styles.eventDate}>
                        <View style={styles.eventDate}>
                            <Text style={styles.eventDateText}>
                                Nov 3
                        </Text>
                        </View>
                        <View style={styles.eventDay}>
                            <Text style={styles.eventDateText}>
                                Tue
                        </Text>
                        </View>
                    </View>
                    <View style={styles.eventName}>
                        <ImageBackground
                            source={require("../../src/assets/bg-masthead-1.jpg")}
                            style={styles.image}>
                            <Text style={styles.eventNameText}>
                                JL Event
                        </Text>
                        </ImageBackground>
                    </View>
                </EventCard>
                <View style={styles.sportEventContainer}>
                    <AdaptiveCard adaptiveCard={EventCardJson.event} />
                </View>
                <EventCard >
                    <Text style={styles.eventNameText}>
                        JL Event
                    </Text>
                </EventCard>
                <EventCard >
                    <View>
                        <Text style={styles.eventNameText}>
                            Nov 3
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.eventNameText}>
                            Nov 3
                        </Text>
                    </View>
                </EventCard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sportEventContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffccb3",
        margin: 7,
        height: 85,
        borderRadius: 5
    },
    eventDate: {
        width: 75,
    },
    eventDateText: {
        textAlign: "center"
    },
    eventDay: {
        textAlign: "center"
    },
    eventName: {
        flex: 1,
        justifyContent: "center"
    },
    eventNameText: {
        textAlign: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
