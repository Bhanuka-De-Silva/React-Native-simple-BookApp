import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./screens/Categories";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Literary from "./assets/cat/Literary";
import Mystery from "./assets/cat/Mystery";
import Thriller from "./assets/cat/Thriller";
import Horror from "./assets/cat/Horror";
import Romance from "./assets/cat/Romance";
import Zorrie from "./assets/books/Zorrie";
import Beloved from "./assets/books/Beloved";
import GoneGirl from "./assets/books/GoneGirl";
import Seconds22 from "./assets/books/Seconds22";
import Verity from "./assets/books/Verity";
import Misery from "./assets/books/Misery";
import It from "./assets/books/It";
import Ring from "./assets/books/Ring";
import FiftyShadesDarker from "./assets/books/FiftyShadesDarker";
import TheNotebook from "./assets/books/TheNotebook";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Categories" component={Categories} />
        <Stack.Screen name = "Register" component={Register} />

        <Stack.Screen name = "Liteary" component={Literary} />
        <Stack.Screen name = "Mystery" component={Mystery} />
        <Stack.Screen name = "Thriller" component={Thriller} />
        <Stack.Screen name = "Horror" component={Horror} />
        <Stack.Screen name = "Romance" component={Romance} />
        
        <Stack.Screen name = "Zorrie" component={Zorrie} />
        <Stack.Screen name = "Beloved" component={Beloved} />
        <Stack.Screen name = "GoneGirl" component={GoneGirl} />
        <Stack.Screen name = "Seconds22" component={Seconds22} />
        <Stack.Screen name = "Verity" component={Verity} />
        <Stack.Screen name = "Misery" component={Misery} />
        <Stack.Screen name = "It" component={It} />
        <Stack.Screen name = "Ring" component={Ring} />
        <Stack.Screen name = "FiftyShadesDarker" component={FiftyShadesDarker} />
        <Stack.Screen name = "TheNotebook" component={TheNotebook} />
         
      </Stack.Navigator>
    </NavigationContainer>

  );
}



