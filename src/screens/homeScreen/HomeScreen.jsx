import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';

const HomeScreen = () => {
   const { expenses } = useContext(ExpenseContext);

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Ваши расходы</Text>
         <FlatList
            data={expenses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
               <View style={styles.expenseItem}>
                  <Text>{item.name}</Text>
                  <Text>{item.amount} KGS</Text>
               </View>
            )}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, padding: 20 },
   title: { fontSize: 20, fontWeight: 'bold' },
   expenseItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
});

export default HomeScreen;
