/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Post from '../mark4_amp_d1/src1/components/Post'
import {
  SafeAreaView,
  StatusBar,  
} from 'react-native';

import Home from './src1/screens/Home';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView>
        <Home/>
        
      </SafeAreaView>
    </>
  );
};

export default App;
