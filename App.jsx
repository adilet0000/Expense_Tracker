import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpenseProvider } from './src/context/ExpenseContext';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import HistoryScreen from './src/screens/historyScreen/HistoryScreen';

const Stack = createStackNavigator();

const App = () => {
   return (
      <ExpenseProvider>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Главная" component={HomeScreen} />
               <Stack.Screen name="История" component={HistoryScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </ExpenseProvider>
   );
};

export default App;