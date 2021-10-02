import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import greenColor from '../../colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  group: {
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  square: {
    width: 10,
    height: 20,
    margin: 2,
    backgroundColor: greenColor,
    borderWidth: 2,
    borderColor: greenColor,
  },
});

const ObjectAnimated = ({value, colors, scales}) => (
  <Animated.View
    style={[
      styles.square,
      {
        backgroundColor: value.interpolate({
          inputRange: [0, 1, 2],
          outputRange: colors,
        }),
        transform: [
          {
            scaleY: value.interpolate({
              inputRange: [0, 1, 2],
              outputRange: scales,
            }),
          },
        ],
      },
    ]}
  />
);

function Square(props) {
  const animatedValue = new Animated.Value(0);

  const setTimingAnimed = (originalValue, newValue, duration) => {
    console.log({originalValue, newValue, duration});
    return Animated.timing(originalValue, {
      toValue: newValue,
      duration,
    });
  };

  const animate = () => {
    Animated.sequence([
      setTimingAnimed(animatedValue, 1, 350),
      setTimingAnimed(animatedValue, 2, 350),
      setTimingAnimed(animatedValue, 0, 350),
    ]).start(() => this.animate());
  };
  if (active) {
    animate();
  }

  const {active} = props;
  console.log({active});
  return active === true ? (
    <View style={styles.container}>
      <View style={styles.group}>
        <ObjectAnimated
          value={this.animatedValue}
          colors={['#eee', greenColor, greenColor]}
          scales={[1.5, 1, 1]}
        />
        <ObjectAnimated
          value={this.animatedValue}
          colors={[greenColor, '#eee', greenColor]}
          scales={[1, 1.5, 1]}
        />
        <ObjectAnimated
          value={this.animatedValue}
          colors={[greenColor, greenColor, '#eee']}
          scales={[1, 1, 1.5]}
        />
      </View>
    </View>
  ) : (
    <React.Fragment />
  );
}

export default Square;
