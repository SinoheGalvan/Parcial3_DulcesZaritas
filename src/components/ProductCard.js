import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, description, navigation }) {
    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => 
                navigation.navigate("ProductDetail", {
                    name: name,
                    price: price,
                    image: image,
                    description: description,
                })
             }
            >
            
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff"  ,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3},
    },
    image: {
        width: "100%",
        height: 180,
    },
    infoContainer: {
        padding: 14,
    },
    productName: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111",
    },
    productPrice: {
        fontSize: 15,
        color: "#666",
        marginTop:  6,
    }
});