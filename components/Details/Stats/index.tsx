import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Stats = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
