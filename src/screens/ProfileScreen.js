import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return(
        <View style={styles.container}>
            <Image 
                source={require("../../assets/logo.png")}
                style={styles.image}
            />

            <Text style={styles.name}>Usuario Demo</Text>
            <Text style={styles.email}>usuario@correo.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginBottom: 20,
        resizeMode: "contain",
    },
    name: {
        fontSize: 50,
        fontWeight: "700",
        color: "#111",
    },
    email: {
        fontSize: 25,
        color: "#666",
        marginTop: 8,
    },
})