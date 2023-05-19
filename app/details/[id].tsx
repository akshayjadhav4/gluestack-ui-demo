import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import { Box } from "../../gluestack-ui-comp";
import Header from "../../components/Details/Header";

type Props = {};

const Details = (props: Props) => {
  const router = useRouter();
  const { id } = useSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} width={"$full"} padding={"$5"} mb={"$1.5"}>
        <Header
          id={id as string}
          back={() => {
            router.back();
          }}
        />
      </Box>
    </SafeAreaView>
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
