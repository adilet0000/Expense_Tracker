import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';
import TransactionItem from '../components/transactionItem/TransactionItem';

const HistoryScreen = () => {
   const { transactions } = useContext(ExpenseContext);

   return (
      <View style={styles.container}>
         <Text style={styles.title}>История транзакций</Text>
         <FlatList
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TransactionItem transaction={item} />}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, padding: 20 },
   title: { fontSize: 24, marginBottom: 10, textAlign: 'center' },
});

export default HistoryScreen;
