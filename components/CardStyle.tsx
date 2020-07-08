import React from 'react'
import { View, StyleSheet } from 'react-native'

//This compnents is reusable style
export interface Props {
    style: object
}

const Card: React.FC<Props> = props => { 
return<View style={{...styles.card, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 0.30,
        backgroundColor: 'white',
        elevation: 4,
        padding: 15,
        borderRadius: 5,
        margin: 15,

    }
});

export default Card