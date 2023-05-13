import { StyleSheet, Text, View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPokemons } from "../api";
import HomeLoadingSkeleton from "../components/Home/Loading";
import HomeScreen from "../components/Home/HomeScreen";

export default function Home() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["pokemonslist"],
    queryFn: getPokemons,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next !== null ? lastPage.next : lastPage,
  });

  if (status === "loading") {
    return <HomeLoadingSkeleton />;
  }
  if (status === "error") {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <HomeScreen
      allPokemons={data?.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
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
