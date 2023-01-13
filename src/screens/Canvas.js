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

const CanvasScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DragResizeBlock x={0} y={0}>
          {/* <Animated.View
          style={{
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }}
        {...panResponder.panHandlers}> */}
          <View style={styles.box} />
          <Text style={styles.titleText}>Drag this box!</Text>
          {/* </Animated.View> */}
        </DragResizeBlock>
      </View>
      <View style={styles.squreButton}>
        <Button title="Square"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignSelf: 'flex-end'
  },
});

export default CanvasScreen;
  