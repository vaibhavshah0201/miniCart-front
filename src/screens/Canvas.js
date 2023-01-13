import React, {useRef} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  Text,
  View,
  PanResponder,
  StyleSheet,
} from 'react-native';
import {DragResizeBlock} from 'react-native-drag-resize';
import { IconButton, MD3Colors } from 'react-native-paper';

const CanvasScreen = () => {
  // const pan = useRef(new Animated.ValueXY()).current;

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
  //     onPanResponderRelease: () => {
  //       pan.extractOffset();
  //     },
  //   }),
  // ).current;

  return (
    <SafeAreaView style={styles.safeAreaCotainer}>
      <View style={styles.canvasArea}>
        <View style={styles.container}>
          <DragResizeBlock x={0} y={0}>
            <View style={styles.box} />
            <Text style={styles.titleText}>Drag this box!</Text>
          </DragResizeBlock>
        </View>
      </View>
      <View style={styles.componentArea}>
        <View style={styles.squreButton}>
          <Button title="Square"></Button>
          <IconButton
            icon="camera"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaCotainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasArea: {
    alignSelf: 'center',
    // backgroundColor: 'grey'
  },
  componentArea: {
    backgroundColor: 'grey',
    width: '100%',
    alignSelf: 'flex-end',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  squreButton: {
    height: 40,
    width: 100,
    alignSelf: 'flex-end',
  },
});

export default CanvasScreen;
