import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Props = {};

const Details = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button
        onPress={() => {
          router.back();
        }}
        title="Go Back"
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
