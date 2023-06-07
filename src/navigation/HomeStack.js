import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";

export const HomeStack = () => {

    const Stack = createStackNavigator();

    const options = {
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }

    return (
        <Stack.Navigator screenOptions={options} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}