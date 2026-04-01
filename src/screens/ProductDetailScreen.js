import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

export default function ProductDetailScreen({ route, navigation, cart, setCart }) {
    const { name, price, image, description } = route.params;
    return(
        <ScrollView>
            <Image 
                source={{ uri: image }}
                style={styles.image}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.price}>${price}</Text>

                <Text style={styles.description}>
                    {description}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        const newProduct = { name, price, image };
                        setCart([...cart, newProduct]);
                        alert("Producto agregado al carrito");
                    }}>
                        <Text style={styles.buttonText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0",
    },
    image: {
        width: "100%",
        height: 180,
    },
    infoContainer: {
        padding: 20,
    },
    name: {
        fontSize: 30,
        color: "#d36d6d",
        marginTop: 10,
        fontWeight: "bold",
    },
    price: {    
        fontSize: 22,
        color: "#2ecc71",
        marginTop: 10,
        fontWeight: "600"
    },
    description: {
        marginTop: 20,
        fontSize: 30,
        color: "#555",
        lineHeight: 40,
    },
    button: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "Center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});