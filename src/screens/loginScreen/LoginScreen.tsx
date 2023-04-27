import React from 'react';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import {navigate} from '../../navigation/services/NavigationService';
import {ScreenNames} from '../../navigation/const/ScreensNames';

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <Button onPress={() => navigate(ScreenNames.Menu)} title="Login" />
    </Container>
  );
};

export default LoginScreen;
