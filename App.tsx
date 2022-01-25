import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { Board, SelectBox } from './compnents';
import { computeWinner } from './utils/compute.utils';

type MarkType = 'X' | 'O';

const INITIAL_BOARD = Array(9).fill(null);

const App = () => {
  const [currentTurn, setCurrentTurn] = React.useState<MarkType>('X');

  const [board, setBoard] = React.useState<MarkType[]>(INITIAL_BOARD);
  const winner = computeWinner(board);

  const handlePress = (i: number) => {
    const newBoard = [...board];

    if (winner || newBoard[i]) {
      return;
    }
    newBoard[i] = currentTurn;
    setBoard(newBoard);
    setCurrentTurn(prev => (prev === 'X' ? 'O' : 'X'));
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', paddingVertical: 16 }}>
        TicTacToe
      </Text>
      <Text>
        {winner ? (
          <Text style={{ fontWeight: 'bold' }}> Winner is {winner} </Text>
        ) : (
          `Now Playing:  ${currentTurn === 'O' ? 'O' : 'X'}`
        )}
      </Text>
      <Board>
        {board.map((_, index) => {
          return (
            <SelectBox
              key={index}
              onPress={() => handlePress(index)}
              mark={board[index] ?? ''}
            />
          );
        })}
      </Board>
      {winner ? (
        <View style={{ marginVertical: 16 }}>
          <Button title="Start Again" onPress={() => setBoard(INITIAL_BOARD)} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default App;
