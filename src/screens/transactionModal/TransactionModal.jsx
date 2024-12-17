import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';

const TransactionModal = ({ transactionType, closeModal }) => {
   const { addTransaction } = useContext(ExpenseContext);
   const [amount, setAmount] = useState('');
   const [description, setDescription] = useState('');

   const handleSubmit = () => {
      if (amount && description) {
         addTransaction(amount, description, transactionType);
         closeModal();
      }
   };

   return (
      <View style={styles.modalContainer}>
         <Text style={styles.title}>
            {transactionType === 'income' ? 'Пополнение' : 'Трата'}
         </Text>
         <TextInput
            placeholder="Сумма"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
         />
         <TextInput
            placeholder="Описание"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
         />
         <Button title="Добавить" onPress={handleSubmit} />
         <Button title="Закрыть" color="red" onPress={closeModal} />
      </View>
   );
};

const styles = StyleSheet.create({
   modalContainer: { flex: 1, justifyContent: 'center', padding: 20 },
   title: { fontSize: 24, marginBottom: 10, textAlign: 'center' },
   input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});

export default TransactionModal;
