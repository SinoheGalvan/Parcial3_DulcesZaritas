import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function CartScreen({ cart, setCart}) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mi carrito</Text>

            <FlatList 
                data={cart}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{uri:item.image}} style={styles.image} />

                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                    </View>
                  )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                }
                contentContainerStyle={styles.ListEmptyComponent}
                />
                <Text style={styles.total}>Total: ${total}</Text>

                <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
                    <Text style={styles.buttonText}>Vaciar carrito</Text>
                </TouchableOpacity>
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
    },
    image: {
        width: 90,
        height: 90,
    },
    info: {
        padding: 12,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111",
    },
    price: {
        fontSize: 15,
        color: "#2ecc71",
        marginTop: 6,
        fontWeight: "600",
    },
    emptyText: {
        fontSize: 16,
        color: "777",
        textAlign: "center",
        marginTop: 40,
    },
    listContainer: {
        paddingBlock: 20,
    },
    total: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 14,
        color: "#111",
    },
    button: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});