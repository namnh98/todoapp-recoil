import { View } from 'react-native';
import React from 'react';
import { HomeEmpty } from '@/assets';
import { AppText } from '@/components';
import styles from './styles';

const EmptyView = () => {
  return (
    <View style={styles.container}>
      <HomeEmpty />
      <AppText fontSize={20}>{'What do you want to do today?'}</AppText>
      <AppText fontSize={13} marginTop={8}>
        {'Tap + to add your tasks'}
      </AppText>
    </View>
  );
};

export default EmptyView;
