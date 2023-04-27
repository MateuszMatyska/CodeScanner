import React from 'react';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import {navigate} from '../../navigation/services/NavigationService';
import {ScreenNames} from '../../navigation/const/ScreensNames';

const MenuScreen: React.FC = () => {
  return (
    <Container>
      <Button onPress={() => navigate(ScreenNames.Camera)} title="Camera" />
    </Container>
  );
};

export default MenuScreen;
