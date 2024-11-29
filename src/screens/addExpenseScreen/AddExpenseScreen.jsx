import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';

const AddExpenseScreen = ({ navigation }) => {
   const { addExpense } = useContext(ExpenseContext);
   const [name, setName] = useState('');
   const [amount, setAmount] = useState('');

   const handleSubmit = () => {
      addExpense({ name, amount });
      navigation.goBack();
   };

   return (
      <View style={styles.container}>
         <TextInput
            placeholder="Название"
            value={name}
            onChangeText={setName}
            style={styles.input}
         />
         <TextInput
            placeholder="Сумма"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={styles.input}
         />
         <Button title="Добавить" onPress={handleSubmit} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, padding: 20 },
   input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
});

export default AddExpenseScreen;
