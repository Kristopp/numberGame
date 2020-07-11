import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard,Alert } from 'react-native'
import Card from '../components/CardStyle'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'



export interface Props {
    inputNumbers: string;
    inputhandler: Function;
}

const StartGameScreen: React.FC = (props) => {

    const [enterValue, setEnterdValue] = useState('');
    const [lastConf, setLastConf] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)

    const inputhandler = (inputNumbers: Props) => {
        //we want to validate that input is numbers
        setEnterdValue(inputNumbers.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => { 
        setEnterdValue('');
        setLastConf(false)
    } 
    const confirmInputHandler = () => { 
        const trueNumber = parseInt(enterValue);
        if(isNaN(trueNumber) || trueNumber <= 0 ||trueNumber > 99 ){ 
            Alert.alert(
                'Invalid input','Add number between 1-99', [{ text: 'Okay', style: 'destructive', onPress: resetHandler 
            }])
            return

        }
        setLastConf(true)
        //Parse string to number
        setSelectedNumber(trueNumber);
        setEnterdValue('')
    }

    let confirmedOutput;
    if (lastConf) { 
    confirmedOutput = 
    //We use CardStle as resuable component and there we use custom component
    <Card style={styles.summaryContainer}>
        <Text>U chose!!</Text>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title="Start Game"></Button>
    </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { 
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.newGame}>Start a new Game</Text>
                <Text>select a number</Text>
                <Card style={styles.inputContainer}>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        onChangeText={inputhandler}
                        maxLength={2}
                        value={enterValue} />
                    {/*                 //I use 1 style for both buttons */}
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}><Button title="Reset" onPress={resetHandler} color={Colors.buttonCancel}></Button></View>
                        <View style={styles.buttonStyle}><Button title="Confirm" onPress={confirmInputHandler } color={Colors.buttonCon}></Button></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },
    summaryContainer: { 
        marginTop: 20
    }

})

export default StartGameScreen