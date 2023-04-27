import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './Container.styles';

type ContainerProps = {
  children: JSX.Element;
};

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;
