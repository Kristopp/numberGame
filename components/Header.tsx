import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    title: string;
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
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
    }


})
export default Header
