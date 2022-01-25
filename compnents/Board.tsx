import React from 'react';
import { View } from 'react-native';
import { BoardSize } from '../constants/layout.constants';

export interface BoardProps {
  children?: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <View
      style={{
        width: BoardSize,
        height: BoardSize,
        margin: 16,
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {children}
    </View>
  );
};

export default Board;
