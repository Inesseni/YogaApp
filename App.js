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

/*
Fragen:

- kann ich eine screen transition haben?
- wie kriege ich den array index der angeklickten pose um die seiten liste zum laufen zu kriegen?
- Fotos den Übungen zuweisen?
- progress bar einbauen? https://mui.com/material-ui/react-progress/
- shrinkable text? zb für button, sonst mach ich schrft einfach kleiner
*/
