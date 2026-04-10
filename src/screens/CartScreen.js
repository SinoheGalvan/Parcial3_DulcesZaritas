import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CartScreen({ navigation, cart, setCart }) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const removeProduct = (productName) => {
        setCart(cart.filter(item => item.name !== productName));
    };

    // Función para manejar el contador de productos (+ y -)
    const updateQuantity = (productName, change) => {
        setCart(cart.map(item => {
            if (item.name === productName) {
                const newQuantity = item.quantity + change;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi carrito</Text>

            <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />

                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            
                            {/* CONTADOR DE PRODUCTOS */}
                            <View style={styles.counterContainer}>
                                <TouchableOpacity 
                                    style={styles.counterButton} 
                                    onPress={() => updateQuantity(item.name, -1)}>
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                                
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                
                                <TouchableOpacity 
                                    style={styles.counterButton} 
                                    onPress={() => updateQuantity(item.name, 1)}>
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* BOTÓN ELIMINAR INDIVIDUAL */}
                        <TouchableOpacity 
                            style={styles.deleteButton} 
                            onPress={() => removeProduct(item.name)}>
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                }
                contentContainerStyle={cart.length === 0 ? styles.emptyContainer : styles.listContainer}
            />
            
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${total}</Text>
                <TouchableOpacity 
                    style={styles.buttonPay} 
                    onPress={() => {
                        if (cart.length > 0) {
                            // Navegamos a Payment y le pasamos el total y una función para limpiar el carrito
                            navigation.navigate("Payment", { 
                                total: total,
                                onSuccess: () => setCart([]) // Esta función se ejecutará cuando el pago sea exitoso
                            });
                        } else {
                            alert("Agrega productos al carrito antes de pagar.");
                        }
                    }}>
                    <Text style={styles.buttonPayText}>Pagar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonEmpty} onPress={() => setCart([])}>
                    <Text style={styles.buttonEmptyText}>Vaciar carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0",
        padding: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111",
        marginBottom: 18,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#d36d6d",
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden",
        elevation: 3,
        position: "relative", 
    },
    image: {
        width: 100,
        height: 110, 
    },
    info: {
        padding: 12,
        justifyContent: "center",
        flex: 1, 
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111",
        paddingRight: 20, 
    },
    price: {
        fontSize: 15,
        color: "#2ecc71",
        marginTop: 4,
        fontWeight: "600",
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    counterButton: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    counterText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111",
    },
    quantityText: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 8,
        color: "#d36d6d",
    },
    deleteButton: {
        position: "absolute",
        top: 8,
        right: 12,
        backgroundColor: "rgba(0,0,0,0.2)", 
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
    emptyText: {
        fontSize: 16,
        color: "#8f4848",
        textAlign: "center",
        marginTop: 40,
    },
    emptyContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    listContainer: {
        paddingBottom: 20,
    },
    footer: {
        marginTop: "auto",
        paddingTop: 10,
    },
    total: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 14,
        color: "#111",
        textAlign: "right",
    },
    buttonEmpty: {
        backgroundColor: "#d36d6d",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonPay: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonEmptyText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    buttonPayText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
});