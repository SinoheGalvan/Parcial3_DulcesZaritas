import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Image
            source={require("../../assets/logo.png")}
            style= {styles.logo} />
            <Text style={styles.sectionTitle}>
                Dulce y diversiones Zaritas
            </Text>
            <Image 
            source={{uri: "https://youtalkonline.com/wp-content/uploads/Dulces-en-ingles-725x408.jpg"}}
            style={styles.banner} />
            <Text style={styles.sectionTitle}>
                Productos destacados
            </Text>
            <View style={styles.productsPreview}>
                <View style={styles.productCard}>
                    <Text> Producto 1</Text>
                </View>
                <View style={styles.productCard}>
                    <Text> Producto 2</Text>
                </View>
            </View>
            <Image 
            source={{uri: "https://www.ntrguadalajara.com/evidimg/2018-05-07_10-05-56___6538.jpg"}}
            style={styles.banner} />
            <View style={styles.actions}>
                <TouchableOpacity
                onPress={() => navigation.navigate("ProductList")}
                >
                <Text style={styles.button}>Ver catálogo</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0"
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 120,
        alignSelf: "center",
        marginTop: 20,
        resizeMode: "contain",
    },
    banner: {
        width: "90%",
        height: 180,
        alignSelf: "center",
        borderRadius: 12,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 30,
        textAlign: "center",
    },
    productsPreview: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20 
    },
    productCard: {
        width: 120,
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    button: {
        width: 120,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        textAlign: "center",
        marginTop: 30,
        marginLeft: "10%",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});