import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme, Drawer, TouchableRipple, Switch } from 'react-native-paper';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SupportScreen from './SupportScreen';

import { auth } from '../redux/actions';

const DrawerNavigator = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="home-outline" color="red" size={32} />
              </TouchableOpacity>
            </View>
          ),
        }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  const paperTheme = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, paddingTop: '25%', paddingBottom: '25%' }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={{ padding: 20 }}>
            <Image
              source={{
                uri: 'https://api.adorable.io/avatars/68/abott@adorable.png',
                height: 60,
                width: 60,
              }}
              style={{ borderRadius: 30 }}
            />
            <Text style={{ marginTop: 10, color: 'white' }}>
              Jaques Pereira Delgado
            </Text>
            <Text>jaquespd@gmail.com</Text>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Profile"
              labelStyle={{ marginLeft: -24, fontSize: 14, color: 'white' }}
              onPress={() => props.navigation.navigate('Profile')}
              icon={() => <Icon name="home-outline" size={20} color="white" />}
            />
            <DrawerItem
              label="Home"
              labelStyle={{ marginLeft: -16, fontSize: 14, color: 'white' }}
              onPress={() => props.navigation.navigate('Home')}
              icon={() => (
                <Icon name="account-outline" size={30} color="white" />
              )}
            />
            <DrawerItem
              label="Support"
              labelStyle={{ marginLeft: -16, fontSize: 14, color: 'white' }}
              onPress={() => props.navigation.navigate('Support')}
              icon={() => (
                <Icon name="bookmark-outline" size={30} color="white" />
              )}
            />
            <DrawerItem
              label="Support"
              labelStyle={{ marginLeft: -16, fontSize: 14, color: 'white' }}
              onPress={() => props.navigation.navigate('Support')}
              icon={() => (
                <Icon name="account-check-outline" size={30} color="white" />
              )}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => dispatch(auth.toggleTheme())}>
              <View style={styles.preference}>
                <Text style={{ color: 'white' }}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sing Out"
          labelStyle={{ marginLeft: -16, fontSize: 14, color: 'white' }}
          onPress={() => {
            dispatch(auth.signOut());
          }}
          icon={() => <Icon name="exit-to-app" size={30} color="white" />}
        />
      </Drawer.Section>
    </View>
  );
};

export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={styles.default}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <DrawerNavigator.Navigator
          initialRouteName={HomeScreen}
          drawerType="slide"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          contentContainerStyle={{ flex: 1 }}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerContent={(props) => {
            setProgress(props.progress);
            return <DrawerContent {...props} />;
          }}>
          <DrawerNavigator.Screen name="Screens">
            {(props) => <Screens {...props} style={animatedStyle} />}
          </DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
});
