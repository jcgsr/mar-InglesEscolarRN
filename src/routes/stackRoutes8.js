import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Oitavo from "../components/Oitavo";
import AdjectivesComparative from "../components/anos/OitavoSubjects/AdjectivesComparative";
import RelativePronouns from "../components/anos/OitavoSubjects/RelativePronouns";

const Stack = createNativeStackNavigator();

const StackRoutes8 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Oitavo"
        component={Oitavo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Adjectives (Comparative)"
        component={AdjectivesComparative}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Relative Pronouns"
        component={RelativePronouns}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes8;