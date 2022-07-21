import { NativeBaseProvider, StatusBar, View } from 'native-base';
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/loading';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';
import { AppRoutes } from './src/routes/app.routes';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
