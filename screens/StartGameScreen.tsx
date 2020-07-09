import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../components/CardStyle'
import Colors from '../constants/colors'
import Input from '../components/Input'



const StartGameScreen: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.newGame}>Start a new Game</Text>
            <Text>select a number</Text>
            <Card style={styles.inputContainer}>
               <Input style={styles.input} />
{/*                 //I use 1 style for both buttons */}
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}><Button title="Reset" onPress={() => { }} color={Colors.buttonCancel}></Button></View>
                    <View style={styles.buttonStyle}><Button title="Confirm" onPress={() => { }} color={Colors.buttonCon}></Button></View>
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
    },
    buttonStyle: { 
        width: '45%',
        borderRadius: 20,
    },
    input: { 
        width: 60,
        textAlign: 'center',
    }

})

export default StartGameScreen