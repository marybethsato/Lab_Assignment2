/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ToDoList></ToDoList>
      <ToDoForm></ToDoForm>
    </SafeAreaView>
  );
}


export default App;
