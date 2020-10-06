import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useTheme} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  // const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill, ...styles.background }}>
        <View style={styles.profileCard}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginRight: 30,
              }}
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{ fontSize: 18 }}>Jaques Delgado</Text>
                <Text>jaquespd@gmail.com</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: 8,
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{ fontSize: 12 }}>Rank</Text>
                  <Text>12</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Rank</Text>
                  <Text>12</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Rank</Text>
                  <Text>12</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: '45%',
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: '45%',
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '85%', marginTop: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="logo-javascript" size={50} color="blue" />
            <Text>Dados do perfil do usuario.</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 20,
              padding: 20,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>ENTER</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>ENTER</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>ENTER</Text>
            </View>
            <View
              style={{
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>ENTER</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: height / 4,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  profileCard: {
    width: '85%',
    height: 200,
    marginTop: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    elevation: 5,
    padding: 15,
  },
});
