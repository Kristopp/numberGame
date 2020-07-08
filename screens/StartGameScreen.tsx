import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/CardStyle'



const StartGameScreen: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.newGame}>Start a new Game</Text>
            <Text>select a number</Text>
            <Card style={styles.inputContainer}>
                <TextInput />
{/*                 //I use 1 style for both buttons */}
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }}></Button>
                    <Button title="Confirm" onPress={() => { }}></Button>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    newGame: {
        fontSize: 35 
    },
    inputContainer: { 
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    }

})

export default StartGameScreen