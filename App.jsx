import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpenseProvider } from './src/context/ExpenseContext';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import AddExpenseScreen from './src/screens/addExpenseScreen/AddExpenseScreen';

const Stack = createStackNavigator();

const App = () => {
   return (
      <ExpenseProvider>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={HomeScreen} />
               <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </ExpenseProvider>
   );
};

export default App;
