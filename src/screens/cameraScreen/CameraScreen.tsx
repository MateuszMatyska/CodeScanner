import React, {useEffect, useState, useCallback} from 'react';
import {Text, Linking} from 'react-native';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {styles} from './CameraScreen.styles';

const CameraScreen: React.FC = () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setCameraPermission(permission);
  }, []);

  return (
    <Container>
      {cameraPermission !== 'authorized' ? (
        <Button
          title="Request Permission for Camera"
          onPress={requestCameraPermission}
        />
      ) : device ? (
        <>
          <Camera
            style={styles.containerFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          {barcodes.map((barcode, idx) => (
            <Text key={idx} style={styles.barcodeTextURL}>
              {barcode.displayValue}
            </Text>
          ))}
        </>
      ) : (
        <Text>Camera Error</Text>
      )}
    </Container>
  );
};

export default CameraScreen;
