import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Evolutions = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Evolutions</Text>
    </View>
  );
};

export default Evolutions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
