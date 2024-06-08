import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>My Order</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Image source={require('../../images/succ.jpg')} style={styles.icon} />
                </View>
                <Text style={styles.message}>Your order has been Accepted</Text>
                <TouchableOpacity style={styles.trackButton}>
                    <Text style={styles.trackButtonText}>TRACK ORDER</Text>
                </TouchableOpacity>
                <Text style={styles.orderId}>Order ID : #2454677778</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DashBoard')} style={{ marginTop: 30, width: 150, height: 40, borderRadius: 20, backgroundColor: 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'white' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E50B4',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    backButton: {
        color: '#fff',
        fontSize: 30,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 20,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    iconContainer: {
        backgroundColor: '#3E50B4',
        borderRadius: 50,
        padding: 20,
        marginBottom: 20,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        paddingLeft: 2
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    trackButton: {
        borderColor: '#3E50B4',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    trackButtonText: {
        color: '#3E50B4',
        fontSize: 16,
    },
    orderId: {
        color: '#aaa',
    },
});

export default OrderScreen;
