import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRouteProps } from '@/types';
import { EMainRoute } from '@/enums';
import { CreateScreen, HomeScreen } from '@/screens';

const MainStack = createNativeStackNavigator<MainRouteProps>();

const MainRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={EMainRoute.HomeScreen} component={HomeScreen} />
      <MainStack.Screen name={EMainRoute.CreateScreen} component={CreateScreen} />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
