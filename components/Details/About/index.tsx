import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ability } from "../../../types";

interface AboutProps {
  abilities: Ability[] | undefined;
}

const About: React.FC<AboutProps> = ({ abilities }) => {
  return (
    <View style={styles.container}>
      {abilities ? <Text>{abilities[0]?.ability?.name}</Text> : null}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
