import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Moves = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Moves</Text>
    </View>
  );
};

export default Moves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
