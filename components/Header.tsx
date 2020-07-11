import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

export interface Props {
    title?: string;
    headrTitle?: object;
    header?: object;
    color?: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
    }


})
export default Header
