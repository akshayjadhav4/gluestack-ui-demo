import { StyleSheet } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import { Box, Text } from "../../gluestack-ui-comp";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../../api";
import DetailsScreen from "../../components/Details/DetailsScreen";

type Props = {};

const Details = (props: Props) => {
  const { id } = useSearchParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonDetails(`/pokemon/${id}`),
    enabled: id !== null && id !== undefined,
  });

  if (isLoading) {
    return (
      <Box style={styles.container}>
        <Text>Loading</Text>
      </Box>
    );
  }
  if (isError) {
    return (
      <Box style={styles.container}>
        <Text>Error</Text>
      </Box>
    );
  }
  return <DetailsScreen data={data} id={id as string} />;
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
