import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';

const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart</Text>
      </View>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={require('../../../src/images/image1.jpg')} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Tactical Uniform Hat</Text>
          <Text style={styles.itemPrice}>$42.95</Text>
        </View>
      </View>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={require('../../../src/images/image2.jpg')} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>White Blank T-Shirt</Text>
          <Text style={styles.itemOldPrice}>$23.99</Text>
          <Text style={styles.itemPrice}>$47.98</Text>
        </View>
      </View>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={require('../../../src/images/image4.jpg')} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Gray Sneaker</Text>
          <Text style={styles.itemPrice}>$33.50</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Products</Text>
          <Text style={styles.totalText}>$124.43</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Discount</Text>
          <Text style={styles.totalText}>-$12.44</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$111.99</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('AddressForm')} style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay via Card — $111.99</Text>
      </TouchableOpacity>
      <Text style={styles.continueText}>Continue shopping</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
  },
  itemOldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  totalContainer: {
    marginVertical: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalText: {
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  continueText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default CartScreen;
