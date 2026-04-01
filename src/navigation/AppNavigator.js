import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ cart, setCart }) {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: "Inicio" }} 
            />

            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: "Productos" }} 
            />

            <Stack.Screen 
                name="ProductDetail"
                options={{ title: "Detalle del producto" }}
            >
                {(props) => (
                    <ProductDetailScreen 
                        {...props}
                        cart={cart}
                        setCart={setCart}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    const [ cart, setCart ] = useState([]);
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if(route.name === "Inicio") {
                            iconName = "home";
                        } else if(route.name === "Carrito") {
                            iconName = "cart";
                        } else if(route.name === "Perfil") {
                            iconName = "person";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#d36d6d",
                    tabBarInactiveTintColor: "gray",
                })} 
            >
                <Tab.Screen name="Inicio" options={{ headerShown: false }}>
                    {() => <HomeStack cart={cart} setCart={setCart} />}
                </Tab.Screen>
                <Tab.Screen name="Carrito">
                    {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
                </Tab.Screen>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}