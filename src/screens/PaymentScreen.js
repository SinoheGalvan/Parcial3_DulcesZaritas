import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import CreditCardIcon from '../../assets/credit-card-icon.png';
import MercadoPagoIcon from '../../assets/mercado-pago-icon.png';
import PayPalIcon from '../../assets/paypal-icon.png';
import CashIcon from '../../assets/cash-icon.png';
import TransferIcon from '../../assets/transfer-icon.png';
import PaymentIllustration from '../../assets/payment-illustration.png';
import Logo from '../../assets/logo.png';


export default function PaymentScreen({ navigation, route, setCart }) {
    const { total } = route.params || { total: 0 }; 

    // Estado para el método de pago seleccionado (almacenará el ID del método)
    const [selectedMethod, setSelectedMethod] = useState(null);

    const paymentMethods = [
        { id: 'card', name: 'Tarjeta de Crédito / Débito', icon: require("../../assets/credit-card-icon.png") }, 
        { id: 'mercadopago', name: 'Mercado Pago', icon: require("../../assets/mercado-pago-icon.png") },
        { id: 'paypal', name: 'PayPal', icon: require("../../assets/paypal-icon.png") },
        { id: 'cash', name: 'Efectivo (Oxxo, 7-Eleven, etc.)', icon: require("../../assets/cash-icon.png") },
        { id: 'transfer', name: 'Transferencia Bancaria', icon: require("../../assets/transfer-icon.png") },
    ];

    const renderPaymentMethod = (method) => {
        const isSelected = selectedMethod === method.id;
        return (
            <TouchableOpacity 
                key={method.id} 
                style={[styles.methodRow, isSelected && styles.selectedMethodRow]} 
                onPress={() => setSelectedMethod(method.id)}>
                <View style={styles.methodInfo}>
                    {/* Aquí iría el icono real importado */}
                    <Image source={method.icon} style={styles.methodIcon} />
                    <Text style={styles.methodName}>{method.name}</Text>
                </View>
                {/* Indicador de selección */}
                <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}></View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={require("../../assets/logo.png")} 
                        style={styles.logo} 
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Proceso de pago</Text>
                </View>

                <View style={styles.illustrationContainer}>
                    <Image
                        source={require("../../assets/payment-illustration.png")} 
                        style={styles.illustrationPlaceholder} 
                        resizeMode="given"
                    />
                </View>

                <Text style={styles.sectionTitle}>Selecciona tu método de pago</Text>
                <View style={styles.methodsContainer}>
                    {paymentMethods.map(renderPaymentMethod)}
                </View>

                <View style={styles.divider}></View>

                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Resumen de Pago</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Total a pagar:</Text>
                        <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
                    </View>
                </View>

                <TouchableOpacity 
                    style={[styles.payButton, !selectedMethod && styles.payButtonDisabled]} 
                    onPress={() => {
                        if (selectedMethod) {
                            // 1. Mostramos mensaje de éxito
                            alert(`¡Pago exitoso con ${paymentMethods.find(m => m.id === selectedMethod).name}!`);
                            setCart([]); // Vaciamos el carrito
                            navigation.navigate("Inicio"); // Lo regresamos a la pestaña principal
                        }
                    }}
                    disabled={!selectedMethod}>
                    <Text style={styles.payButtonText}>Continuar con el pago</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0", 
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000000",
    },
    illustrationContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    illustrationPlaceholder: {
        width: '90%',
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#d36d6d',
        borderStyle: 'dashed',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111111",
        marginBottom: 15,
        marginLeft: 5,
    },
    methodsContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    methodRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },
    selectedMethodRow: {
        backgroundColor: 'rgba(211, 109, 109, 0.1)', 
        borderRadius: 8,
    },
    methodInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    methodIcon: {
        width: 40,
        height: 40,
        marginRight: 15,
        resizeMode: 'contain',
    }, 
    iconPlaceholder: {
        width: 35,
        height: 35,
        backgroundColor: '#d36d6d', 
        borderRadius: 17.5,
        marginRight: 15,
    },
    methodName: {
        fontSize: 16,
        color: "#333333",
        fontWeight: '500',
    },
    radioButton: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#d36d6d',
        backgroundColor: '#ffffff',
    },
    radioButtonSelected: {
        backgroundColor: '#d36d6d',
        borderColor: '#d36d6d',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginVertical: 30,
        width: '100%',
    },
    summaryContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 15,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summaryLabel: {
        fontSize: 16,
        color: "#555555",
    },
    summaryValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#d36d6d",
    },
    payButton: {
        backgroundColor: "#ffffff",
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: "center",
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    payButtonDisabled: {
        backgroundColor: '#cccccc',
        elevation: 0,
        shadowOpacity: 0,
    },
    payButtonText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
    },
});