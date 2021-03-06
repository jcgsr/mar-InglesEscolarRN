import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/style";

const Oitavo = () => {
  const navigation = useNavigation();
  const navegaAdjComparative = () => {
    navigation.navigate("Adjectives (Comparative)");
  };
  const navegaRelativePronouns = () => {
    navigation.navigate("Relative Pronouns");
  };
  const navegaAdjSuperlative = () => {
    navigation.navigate("Adjectives (Superlative)");
  };

  const navegaBeGoingTo = () => {
    navigation.navigate("Be Going To");
  };
  const navegaWill = () => {
    navigation.navigate("Will");
  };
  const navegaPrefixSufix = () => {
    navigation.navigate("Prefix and Sufix");
  };
  const navegaQuantifiers = () => {
    navigation.navigate("Quantifiers");
  };
  const navegaCountable = () => {
    navigation.navigate("Countable");
  };
  const navegaUsedTo = () => {
    navigation.navigate("Used to");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaAdjComparative}>
        <Text style={styles.txt}>Adj. - Comparative</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaAdjSuperlative}>
        <Text style={styles.txt}>Adj. - Superlative</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaRelativePronouns}>
        <Text style={styles.txt}>Relative Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaBeGoingTo}>
        <Text style={styles.txt}>Future (Be Going To)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaWill}>
        <Text style={styles.txt}>Future (Will)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaPrefixSufix}>
        <Text style={styles.txt}>Prefix and Sufix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaQuantifiers}>
        <Text style={styles.txt}>Quantifiers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaCountable}>
        <Text style={styles.txt}>(Un)Countable Nouns</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={navegaUsedTo}>
        <Text style={styles.txt}>Used to</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Oitavo;
