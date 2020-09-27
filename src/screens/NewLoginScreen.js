import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

import Svg, { Image, Circle, ClipPath } from 'react-native-svg';

import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window');

const NewLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInAnimationRef = useRef(null);
  const backgroundAnimationRef = useRef(null);
  const inputsAnimationRef = useRef(null);
  const closeButtonAnimationRef = useRef(null);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      backgroundAnimationRef.current?.animate({
        0: {
          translateY: 0,
        },
        1: {
          translateY: (-height / 3) * 2 - 30,
        },
      });
    });
    Keyboard.addListener('keyboardDidHide', () => {
      backgroundAnimationRef.current?.animate({
        0: {
          translateY: (-height / 3) * 2 - 30,
        },
        1: {
          translateY: -height / 3 - 30,
        },
      });
    });
  }, []);

  const handlePress = () => {
    if (signInAnimationRef && backgroundAnimationRef) {
      inputsAnimationRef.current?.fadeInUp();
      signInAnimationRef.current?.fadeOutDown();
      inputsAnimationRef.current?.transitionTo({ zIndex: 1, opacity: 1 }, 3000);
      signInAnimationRef.current?.transitionTo({ zIndex: -1 });
      backgroundAnimationRef.current?.animate({
        0: {
          translateY: 0,
        },
        1: {
          translateY: -height / 3 - 30,
        },
      });
      closeButtonAnimationRef.current?.animate({
        0: {
          translateZ: -100,
          rotate: '360 deg',
        },
        1: {
          translateZ: -1,
          rotate: '180 deg',
        },
      });
    }
  };

  const handlePressStop = () => {
    if (signInAnimationRef && backgroundAnimationRef) {
      signInAnimationRef.current?.fadeInUp();
      inputsAnimationRef.current?.fadeOutDownBig();
      inputsAnimationRef.current?.transitionTo({ zIndex: -1, opacity: 0 });
      signInAnimationRef.current?.transitionTo({ zIndex: 1 });
      backgroundAnimationRef.current?.animate({
        0: {
          translateY: -height / 3 - 30,
        },
        1: {
          translateY: 0,
        },
      });
      closeButtonAnimationRef.current?.animate({
        0: {
          rotate: '180 deg',
        },
        1: {
          rotate: '360 deg',
        },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Animatable.View
        ref={backgroundAnimationRef}
        duration={1200}
        style={{ ...StyleSheet.absoluteFill }}>
        <Svg height={height} width={width}>
          <ClipPath id="clip">
            <Circle r={height} cx={width / 2} />
          </ClipPath>
          <Image
            href={require('../assets/bg.png')}
            height={height}
            width={width}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </Animatable.View>
      <View
        style={{
          height: height / 3,
          width: width,
          justifyContent: 'center',
        }}>
        <Animatable.View
          style={{ flex: 1, zIndex: 1, position: 'absolute', width: '100%' }}
          ref={signInAnimationRef}
          duration={1200}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.button}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SING IN</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handlePress}>
            <View
              style={{
                ...styles.button,
                backgroundColor: '#2E71DC',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                SIGN IN WITH FACEBOOK
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Animatable.View>

        <Animatable.View
          style={{ zIndex: -1 }}
          ref={inputsAnimationRef}
          duration={1800}>
          <TouchableWithoutFeedback onPress={handlePressStop}>
            <View style={styles.closeButton}>
              <Animatable.View ref={closeButtonAnimationRef} duration={1200}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>X</Text>
              </Animatable.View>
            </View>
          </TouchableWithoutFeedback>
          <TextInput
            placeholder="EMAIL"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <TextInput
            placeholder="PASSWORD"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <TouchableWithoutFeedback onPress={handlePressStop}>
            <View style={{ ...styles.button, elevation: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SING IN</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#fff',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    // elevation: 2,
  },
  closeButton: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -50,
    left: width / 2 - 20,
    elevation: 1,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});
