import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import MainRoutes from '@/navigation';
import 'dayjs/locale/vi';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <MainRoutes />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
