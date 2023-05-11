import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { getAllPokemons } from "../api";
import { Box } from "../gluestack-ui-comp";
import HomeLoadingSkeleton from "../components/Home/HomeLoadingSkeleton";

export default function Home() {
  const {
    data: allPokemons,
    isLoading: isAllPokemonslistLoading,
    isError: isAllPokemonsGetError,
  } = useQuery({
    queryKey: ["pokelist"],
    queryFn: getAllPokemons,
  });

  if (isAllPokemonslistLoading) {
    return <HomeLoadingSkeleton />;
  }
  if (isAllPokemonsGetError) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Box bgColor="$rose400">
        <Text>Expo Router Setup</Text>
      </Box>
      <Link href={"/details"}>Go To Details</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
