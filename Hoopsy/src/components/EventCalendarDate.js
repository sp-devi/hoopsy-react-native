import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class EventCalendarDate extends Component {

    getYear() {
        return "2020";
    }

    getMonth() {
        return "NOV";
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
        borderWidth: 1,
        
    },
    calendarDateMonth: {
        borderColor: "black",
    },
    calendarDateMonthText: {
        textAlign: "center"
    },
    calendarDateDay: {
        borderColor: "black",
        borderTopWidth: 1,
        height: 50,
        justifyContent: "center"
    },
    calendarDateDayText: {
        textAlign: "center"
    },
    calendarDateDayName: {
        borderColor: "black",
        borderTopWidth: 1
    },
    calendarDateDayNameText: {
        textAlign: "center"
    }
});
