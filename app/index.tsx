import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { getAllPokemons } from "../api";
import HomeLoadingSkeleton from "../components/Home/HomeLoadingSkeleton";
import HomeScreen from "../components/Home/HomeScreen";

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
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
