import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import { ExpenseContext } from '../../context/ExpenseContext';
import TransactionModal from '../transactionModal/TransactionModal';

const HomeScreen = ({ navigation }) => {
   const { balance } = useContext(ExpenseContext);
   const [modalVisible, setModalVisible] = useState(false);
   const [transactionType, setTransactionType] = useState('');

   const openModal = (type) => {
      setTransactionType(type);
      setModalVisible(true);
   };

   return (
      <View style={styles.container}>
         <Text style={styles.balanceTitle}>Текущий баланс</Text>
         <Text style={styles.balance}>{balance} KGS</Text>

         <View style={styles.buttonContainer}>
            <Button title="Потратил" onPress={() => openModal('expense')} />
            <Button title="Пополнил" onPress={() => openModal('income')} />
         </View>

         <Button title="История транзакций" onPress={() => navigation.navigate('History')} />

         {/* Всплывающее окно */}
         <Modal visible={modalVisible} animationType="slide">
            <TransactionModal
               transactionType={transactionType}
               closeModal={() => setModalVisible(false)}
            />
         </Modal>
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
   balanceTitle: { fontSize: 20, marginBottom: 10 },
   balance: { fontSize: 36, fontWeight: 'bold', marginBottom: 20 },
   buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' },
});

export default HomeScreen;
