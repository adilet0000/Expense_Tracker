import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
   return (
      <View style={styles.item}>
         <Text style={styles.description}>{transaction.description}</Text>
         <Text style={transaction.type === 'income' ? styles.income : styles.expense}>
            {transaction.amount} KGS
         </Text>
         <Text style={styles.date}>{transaction.date}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   item: { padding: 10, borderBottomWidth: 1 },
   description: { fontSize: 16 },
   income: { color: 'green', fontWeight: 'bold' },
   expense: { color: 'red', fontWeight: 'bold' },
   date: { fontSize: 12, color: 'gray' },
});

export default TransactionItem;
