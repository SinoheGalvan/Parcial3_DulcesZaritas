import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
    const products = [
        {
            id: "1",
            name: "Caja Cine en Casa",
            price: 499,
            image: "https://i.redd.it/quickly-designed-this-movie-snack-box-for-a-surprise-home-v0-gk67d2eo6rta1.jpg?width=4032&format=pjpg&auto=webp&s=3bb783312da1dd674885416a6ab70dc1cb3f5271",
            description: "Para esas ocaciones donde sientas que quieres sentir la sensación de estar en una sala de cine solo o acompañado, pero en la comodidad de tu casa.",
        },
        {
            id: "3",
            name: "Trufas Artesanales",
            price: 350,
            image: "https://truffelinos.com.co/wp-content/uploads/2025/10/truffelinos-fondo-banner-intermedio.jpg",
            description: "Seguro que haz escuchado alguna vez de estas. No son más que una opción premium y gourmet para aquellos de paladar fino y que disfrutan de lo mejor que puedes probar para saciar tus ganas de un aperitivo dulce pero elegante a la vez.",
        },
    ];

    const renderHeader = () => (
        <View>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.logo} 
            />
            <Text style={styles.sectionTitle}>
                Dulce y diversiones Zaritas
            </Text>
            <Image 
                source={require("../../assets/banner-bienvenida.png")}
                style={styles.banner} 
            />
            <Text style={styles.sectionTitle}>
                Productos destacados
            </Text>
        </View>
    );

    const renderFooter = () => (
        <View style={styles.footerContainer}>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Text style={styles.button}>Ver el resto del catálogo</Text>
                </TouchableOpacity>
            </View>
            <Image 
                source={require("../../assets/banner-envio.png")}
                style={styles.banner} 
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.rowWrapper}
                renderItem={({ item }) => (
                    <ProductCard 
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        navigation={navigation} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0"
    },
    listContainer: {
        paddingBottom: 30, 
    },
    rowWrapper: {
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 120,
        alignSelf: "center",
        marginTop: 40,
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
    footerContainer: {
        marginTop: 20,
    },
    button: {
        width: 200,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        textAlign: "center",
        textAlignVertical: "center",
        marginTop: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "center",
    },
});