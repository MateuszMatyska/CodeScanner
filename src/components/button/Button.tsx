import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button: React.FC<ButtonProps> = ({onPress, title}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
