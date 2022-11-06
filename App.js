import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Startscreen from "./screens/Startscreen";

import Stretchroutine from "./screens/Stretchroutine";

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return <Startscreen onClick={() => navigation.navigate("Stretch")} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Stretch"
          component={Stretchroutine}
          options={{
            title: "Your stretching routine",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// i cant check the boy from the parent when time is over ?! do i need to rerender or sth?
// maybe we should skip a pose if it is already checked?
// Timer doesn't stop after time is up and doesn't change to new pose? it worked before i think, it broke :c
// Implementing fotos as a bulk ?
