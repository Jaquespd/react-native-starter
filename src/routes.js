import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import Drawer from './screens/DrawerScreen-copy';

import { auth } from './redux/actions';

const RootStack = createStackNavigator();

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  const loading = useSelector((state) => state.auth.loading);
  const isDarkTheme = useSelector((state) => state.auth.isDarkTheme);

  const dispatch = useDispatch();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      textMenu: '#ffffff',
      iconColor: '#ffffff',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      textMenu: '#000000',
      iconColor: '#000000',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    dispatch(auth.signInRequest());
    setTimeout(async () => {
      dispatch(auth.signFailure());
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={require('../src/assets/stay-safe-stay-home.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  const LoginStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {signed ? <Drawer /> : <LoginStackScreen />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
