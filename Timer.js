import React from 'react';
import {Text, Vibration, View, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    label:{
        alignItems: 'center',
        fontSize: 40,
    },
    time: {
        alignItems: 'center',
        fontSize: 48,
    },
});

const vibrate = () => Vibration.vibrate([500, 500, 500]);

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.labels = {
            work: "Work Time",
            break: "Breat Time",
        };
        this.workTime = 25 * 60 * 1000; // in ms
        this.breakTime = 5 * 60 * 1000; // in ms
    }

    componentDidMount() {

    }

    render () {
        return (
        <View>
            <Text style={styles.label}> {this.labels.work} </Text>
            <Text style={styles.time}> Time:Left </Text>
        </View>
        )
    }
}