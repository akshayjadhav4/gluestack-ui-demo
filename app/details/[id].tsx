import { StyleSheet } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import { Box } from "../../gluestack-ui-comp";
import Header from "../../components/Details/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientBG from "../../components/Details/GradientBG";

type Props = {};

const Details = (props: Props) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useSearchParams();

  return (
    <Box style={styles.container}>
      <GradientBG ability="psychic" />
      <Box flex={1} width={"$full"}>
        <Box paddingTop={top}>
          <Header
            id={id as string}
            back={() => {
              router.back();
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
