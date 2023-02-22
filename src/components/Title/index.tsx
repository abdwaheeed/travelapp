import {Text} from 'react-native'
import React from 'react'
import styles from './style'

const Title = ({ text, style }:any) => {

    return (
        <Text style={[styles.title, style]}>{text}</Text>
    );
};

Title.defaultProps={
    text : 'default props'
}

export default React.memo(Title)