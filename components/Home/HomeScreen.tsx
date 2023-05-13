import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import { Box, Text } from "../../gluestack-ui-comp";
import SearchInput from "./Search";
import { FlashList } from "@shopify/flash-list";
import { AllPokemon } from "../../types";
import PokemonCard from "./PokemonCard/Index";

interface HomeScreenProps {
  allPokemons: AllPokemon[];
  fetchNextPage: any;
  hasNextPage: boolean | undefined;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  allPokemons,
  fetchNextPage,
  hasNextPage,
}) => {
  const results = allPokemons
    ? allPokemons?.flatMap((data) => data?.results)
    : [];
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
        <FlashList
          data={results}
          renderItem={({ item, index }) => (
            <PokemonCard item={item} index={index} />
          )}
          keyExtractor={({ name }) => name}
          estimatedItemSize={128}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        />
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
