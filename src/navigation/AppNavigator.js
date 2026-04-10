import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ cart, setCart }) {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: "Inicio", headerShown: false }} 
            />
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: "Productos", headerShown: false }} 
            />
            <Stack.Screen 
                name="ProductDetail"
                options={{ title: "Detalle del producto", headerShown: false }}
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

function CartStack({ cart, setCart }) {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="CartMain" 
                options={{ headerShown: false }} 
            >
                {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
            </Stack.Screen>
            
            <Stack.Screen
                name="Payment"
                options={{ title: "Pago", headerShown: false }} 
            >
                {(props) => <PaymentScreen {...props} setCart={setCart} />}
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
                
                {/* 3. CONECTAMOS EL NUEVO STACK A LA PESTAÑA CARRITO */}
                <Tab.Screen name="Carrito" options={{ headerShown: false }}>
                    {() => <CartStack cart={cart} setCart={setCart} />}
                </Tab.Screen>
                
                <Tab.Screen name="Perfil" component={ProfileScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}