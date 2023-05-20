import { StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Box, Text } from "../../gluestack-ui-comp";
import Header from "../../components/Details/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientBG from "../../components/Details/GradientBG";
import PokemonImage from "../../components/Details/PokemonImage";
import { Pokemon } from "../../types";

interface DetailsScreenProps {
  data: Pokemon | undefined;
  id: string;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ data, id }) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Box style={styles.container}>
      <GradientBG ability={data?.types[0]?.type?.name ?? ""} />
      <Box flex={1} width={"$full"} p={"$5"}>
        <Box paddingTop={top}>
          <Header
            id={id as string}
            back={() => {
              router.back();
            }}
          />
          {data?.sprites.other?.dream_world?.front_default ? (
            <PokemonImage
              url={data?.sprites.other?.dream_world?.front_default}
            />
          ) : null}
          <Text
            mt={"$6"}
            size="2xl"
            textTransform="capitalize"
            textAlign="center"
            fontWeight="$bold"
            color="$muted900"
          >
            {data?.name}
          </Text>
          <Text
            mb={"$5"}
            size="lg"
            textTransform="capitalize"
            textAlign="center"
            fontWeight="$semibold"
            color="$text400"
            letterSpacing={"$md"}
          >
            {data?.types[0]?.type?.name} Pokémon
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
