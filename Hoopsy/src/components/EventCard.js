import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';
import EventCalendarDate from './EventCalendarDate';

export default class EventCard extends Component {
    render() {
        return (
            <View style={styles.eventCardContainer}>
                <View style={styles.imageView}>
                    <ImageBackground
                        source={this.props.imgSrc}
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
                            {this.props.eventTime.start} ~ {this.props.eventTime.end}
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.joinButton}>
                        <TouchableOpacity
                            style={styles.joinButton}
                            onPress={() => { }}>
                            <Text style={styles.joinButtonText}>Join</Text>
                        </TouchableOpacity>
                    </View>
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
        marginVertical: 5,
        flex: 1,
    },
    imageView: {
        flex: 6,
        overflow: "hidden",
        borderBottomWidth: 0.25,
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 120,
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
        justifyContent: "center"
    },
    cardTitleText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
    },
    eventTimeView: {
        marginHorizontal: 10,
        justifyContent: "center"

    },
    eventTimeText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    joinButton: {
        backgroundColor: "orange",
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 5
    },
    joinButtonText: {
        fontSize: 17.5,
        fontWeight: "bold"
    }
});