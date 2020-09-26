import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { todoThunks } from '../redux/thunk';
import { todoActions, auth } from '../redux/actions';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(todoThunks.getAll);
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  const state = useSelector((state) => state.todoReducer);

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder
        style={{ height: 50 }}
        duration={1000}
        visible={!loading}>
        <Text style={{ fontSize: 30 }}>Profile Screen</Text>
      </ShimmerPlaceHolder>
      {state.tasks.map((task, index) => (
        <Text style={{ fontSize: 20 }} key={index}>
          {task}
        </Text>
      ))}

      <ShimmerPlaceHolder
        style={{ height: 50, marginTop: 10 }}
        duration={1000}
        visible={!loading}>
        <TouchableOpacity onPress={() => dispatch(todoActions.add('teste2'))}>
          <Text style={{ fontSize: 30, color: 'red', backgroundColor: '#fff' }}>
            ADD
          </Text>
        </TouchableOpacity>
      </ShimmerPlaceHolder>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
