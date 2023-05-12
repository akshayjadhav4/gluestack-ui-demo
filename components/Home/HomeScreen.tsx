import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import { Box, Text } from "../../gluestack-ui-comp";
import SearchInput from "./SearchInput";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} width={"$full"} padding={"$5"} mb={"$1.5"}>
        <Text size="3xl" fontWeight="$bold" color="$textDark950">
          Pokédex
        </Text>
        <Text size="md">
          Use the advanced search to find Pokémon by type, weakness, ability and
          more!
        </Text>
        <SearchInput />
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
