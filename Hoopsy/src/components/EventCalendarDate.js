import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class EventCalendarDate extends Component {

    getYear() {
        return "2020";
    }

    getMonth() {
        return "Nov";
    }

    getDay() {
        return "3";
    }

    getDayName() {
        return "Tue"
    }

    render() {
        return (
            <View style={styles.calendarDateContainer}>
                <View style={styles.calendarDateMonth}>
                    <Text style={styles.calendarDateMonthText}>
                        {this.getMonth()}
                    </Text>
                </View>
                <View style={styles.calendarDateDay}>
                    <Text style={styles.calendarDateDayText}>
                        {this.getDay()}
                    </Text>
                </View>
                <View style={styles.calendarDateDayName}>
                    <Text style={styles.calendarDateDayNameText}>
                        {this.getDayName()}
                    </Text>
                </View>
            </View>
        );
    }
}
// </EventCard>
const styles = StyleSheet.create({
    calendarDateContainer: {
        flexDirection: "column",
        width: 50,
        borderWidth: 0.5,
        borderRadius: 5,
        shadowColor: "gray"
    },
    calendarDateMonth: {
        borderColor: "black",
        backgroundColor: "orange",
        
    },
    calendarDateMonthText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontFamily: "monospace",
    },
    calendarDateDay: {
        borderColor: "black",
        borderTopWidth: 0.25,
        height: 35,
        justifyContent: "center"
    },
    calendarDateDayText: {
        textAlign: "center",
        fontSize: 35,
        fontFamily: "sans-serif",
        fontWeight: "bold"
    },
    calendarDateDayName: {
    },
    calendarDateDayNameText: {
        textAlign: "center",
        color: "orange",
        fontFamily: "arial",
        fontSize: 16,
        fontFamily: "monospace",
        fontWeight: "bold"
    }
});
