import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AddressForm = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="First name" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Last name" />
      </View>
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Apartment, suite, etc." />
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="State/province" />
      <TextInput style={styles.input} placeholder="Country" />
      <TextInput style={styles.input} placeholder="ZIP/postal code" />
      <TouchableOpacity onPress={()=> navigation.navigate('OrderScreen')} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  halfInput: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default AddressForm;
