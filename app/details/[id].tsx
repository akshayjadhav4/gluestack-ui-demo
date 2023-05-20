import { StyleSheet } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import { Box } from "../../gluestack-ui-comp";
import Header from "../../components/Details/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientBG from "../../components/Details/GradientBG";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../../api";
import PokemonImage from "../../components/Details/PokemonImage";

type Props = {};

const Details = (props: Props) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useSearchParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonDetails(`/pokemon/${id}`),
    enabled: id !== null && id !== undefined,
  });

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
