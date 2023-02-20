import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'

const Title = ({ text }:any) => {
    const [stateText, setText] = useState('Default');

    useEffect(() => {
        console.log('Hello use effect');
        setText(text);
    }, [text])

    const onTextPress = () => {
        setText('Updated State')
    }

    return (
        <Text style={styles.title}>{text}</Text>
    );
};

Title.defaultProps={
    text : 'default props'
}

export default Title