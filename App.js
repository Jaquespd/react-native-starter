import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Wellcome</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export default App;
