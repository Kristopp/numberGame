import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/CardStyle'

export interface Props {
    userChoice: number
    onGameOver: Function

}
const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNum: number = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen: React.FC<Props> = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currenthigh = useRef(100);
    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
        //if any of these dependancys has changed useEffect will run on render
    }, [currentGuess, userChoice, onGameOver]);
    //This function is for validate users pick
    const nextGuessHandler = (direction: string) => {
        if ((direction === 'Lower' && currentGuess < props.userChoice) || (direction === 'Greater' && currentGuess > props.userChoice)) {
            Alert.alert('Play fare', 'and dont lie!', [{ text: 'deem', style: 'cancel' }])
            return null
        }
        if (direction === 'Lower') {
            //we need to help computer understand wht kind of hint we gave
            //Lets use useRef hook,with use ref u can create object 
            //witch u ca1n bind to input elements to gain accses
            //useRef allows u do save value witch survives component reRender
            currenthigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess;
        }
        //and now we use our store input lower or higer as arguments in generate new number function
        const nextNumber = generateRandomBetween(currentLow.current, currenthigh.current, currentGuess);
        setCurrentGuess(nextNumber)
        setRounds(rounds => rounds + 1)
    }

    return (
        <View style={styles.gScreen}>
            <Text>Oponent`s Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'Lower')}></Button>
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'Greater')}></Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    gScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen