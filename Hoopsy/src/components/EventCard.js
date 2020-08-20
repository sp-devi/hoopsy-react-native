import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
import EventCalendarDate from './EventCalendarDate';

export default class EventCard extends Component {
    render() {
        return (
            <View style={styles.eventCardContainer}>
                <View style={styles.imageView}>
                    <ImageBackground
                        source={require("../assets/bg-masthead-1.jpg")}
                        style={styles.image}>
                        <View style={styles.eventDateView}>
                            <EventCalendarDate eventDate={this.props.eventDate} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.cardTitleView}>
                        <Text style={styles.cardTitleText}>
                            {this.props.cardTitle}
                        </Text>
                    </View>
                    <View style={styles.eventTimeView}>
                        <Text style={styles.eventTimeText}>
                            {this.props.eventTime.start} ~  {this.props.eventTime.end}
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="join"
                        color="#cc3300"
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    allCard: {
        flex: 1,
        flexDirection: "column"
    },
    richHeadContainer: {
    },
    eventCardContainer: {
        borderRadius: 7.5,
        elevation: 10,
        backgroundColor: "#fff",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.55,
        shadowRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flex: 1,
        overflow: "hidden",
        height: 175,
    },
    eventCard: {
        marginHorizontal: 15,
        marginBottom: 100,
    },
    imageView: {
        flex: 6,
        overflow: "hidden",
        borderBottomWidth: 0.25,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 120
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    eventDateView: {
        marginHorizontal: 10
    },
    cardTitleView: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5
    },
    cardTitleText: {
        fontFamily: "sans-serif",
        fontSize: 17,
        fontWeight: "bold",
    },
    eventTimeView: {
        marginHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    eventTimeText: {
        fontFamily: "sans-serif",
        fontSize: 17,
        fontWeight: "bold",
    },
    buttonContainer: {
        width: 60,
        marginHorizontal: 5,
        marginVertical: 5
    },
    joinButton: {
    }
});