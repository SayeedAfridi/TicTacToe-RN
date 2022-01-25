import React from 'react';
import { Pressable, Text } from 'react-native';
import { BoardSize } from '../constants/layout.constants';

export interface SelectBoxProps {
  mark: 'O' | 'X' | '';
  onPress?: () => void;
}

const boxSize = BoardSize / 3 - 0.7;

const SelectBox: React.FC<SelectBoxProps> = ({ mark, onPress }) => {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        height: boxSize,
        width: boxSize,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{mark}</Text>
    </Pressable>
  );
};

export default SelectBox;
