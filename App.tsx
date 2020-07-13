
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './components/gameScreen';
import GameOverScreen from './screens/GameOverScreen'

export interface Props {
  selectedNumber: number;
  onStartGame: Function;
  nrOfRounds: number;

}

export default function App<Props>() {
  //inital state is undefined = false 
  const [userNumber, setUserNumber] = useState(null);
  const [nrOfRounds, setRounds] = useState(0);

  const configureNewGameHandler = () => {
    setRounds(0);
    //NULL ise falsy value
    setUserNumber(null)

  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setRounds(0)
  }

  const gameOverHandler = (numOfRounds: number) => {
    setRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && nrOfRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (nrOfRounds > 0) {
    content = <GameOverScreen
      roundsNumber={nrOfRounds}
      userNumber={userNumber}
      resetGame={configureNewGameHandler} />
  }
  return (
    <View style={styles.container}>
      <Header title='NumbersGame'></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
