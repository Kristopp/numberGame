import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen: React.FC = (props) => {
    return (
        <View style={styles.gameOverScreen}>
            <Text>Game over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.resetGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default GameOverScreen;