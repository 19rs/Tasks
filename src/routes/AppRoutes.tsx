import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import User from "../screens/User";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export const HomeRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: "Lista de Tarefas"
                }}
            />
        </Stack.Navigator>
    );
};

export const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeRoutes}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="home" size={30} color="#4169E1"/>
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="person" size={30} color="#4169E1" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};