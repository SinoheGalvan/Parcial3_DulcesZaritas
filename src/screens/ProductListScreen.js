import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen( { navigation }) {
    const products = [
        {
            id: "1",
            name: "Caja Cine en Casa",
            price: 499,
            image: "https://i.redd.it/quickly-designed-this-movie-snack-box-for-a-surprise-home-v0-gk67d2eo6rta1.jpg?width=4032&format=pjpg&auto=webp&s=3bb783312da1dd674885416a6ab70dc1cb3f5271",
            description: "Para esas ocaciones donde sientas que quieres sentir la sensación de estar en una sala de cine solo o acompañado, pero en la comodidad de tu casa.",
        },
        {
            id: "2",
            name: "Kit de Supervivencia de Cumpleaños",
            price: 899,
            image: "https://m.media-amazon.com/images/I/91Rq44dnezL._AC_UF350,350_QL80_.jpg",
            description: "¿Aún no haz planeado nada para tú cumpleaños o el de otra persona?. No hay problema, que el KIT DE SUPERVIVENCIA DE CUMPLEAÑOS viene a salvar la fiesta con la cantidad selecta de snacks, dulces y demás apetitivos que este paquete incluye.",
        },
        {
            id: "3",
            name: "Trufas Artesanales",
            price: 350,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjx9sTk4RjzsORjtiQGR-7NTcIjlyjhsy4w&s",
            description: "Seguro que haz escuchado alguna vez de estas. No son más que una opción premium y gourmet para aquellos de paladar fino y que disfrutan de lo mejor que puedes probar para saciar tus ganas de un aperitivo dulce pero elegante a la vez.",
        },
        {
            id: "4",
            name: "Box de Dulces Internacionales",
            price: 1200,
            image: "https://m.media-amazon.com/images/I/91InDIrv8bL.jpg",
            description: "Si lo tuyo no es probar sabores conocidos de toda la vida o quieres explorar nuevas maneras de saciar tus ganas de dulces, esta oferta es para tí. el BOX DE DULCES INTERNACIONALES ofrece postres de varias latitudes del mundo, desde dulces del Medio Oriente hasta los más iconicos dulces de Asia.",
        },
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Catálogo de Productos</Text>
            <FlatList
             data={products}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
                    <ProductCard name={item.name}
                                 price={item.price}
                                 image={item.image}
                                 description={item.description}
                                 navigation={navigation} />
             )}
             contentContainerStyle={styles.listContainer}
             showVerticalScrollIndicator={false}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b0b0",
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111",
        marginBottom: 18,
    },
    listContainer: {
        paddingBottom: 20,
    }
});