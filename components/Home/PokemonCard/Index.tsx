import { Image, StyleSheet, View, Platform, Pressable } from "react-native";
import React from "react";
import { Box, Icon, Text } from "../../../gluestack-ui-comp";
import { Result } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../../../api";
import LoadingSkeleton from "./LoadingSkeleton";
import { SvgUri } from "react-native-svg";
import { getColor, getIcon, getPokemonTheme } from "../../../utils";
import { useRouter } from "expo-router";

interface PokemonCardProps {
  item: Result;
  index: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ item, index }) => {
  const router = useRouter();
  const url = item?.url;
  const lastIndex = url.lastIndexOf("/");
  const secondLastIndex = url.lastIndexOf("/", lastIndex - 1);
  const pokemonNumber = url.substring(secondLastIndex);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", pokemonNumber],
    queryFn: () => getPokemonDetails(`/pokemon${pokemonNumber}`),
    enabled: item !== null,
  });

  if (isLoading) {
    return (
      <>
        <LoadingSkeleton index={index} />
      </>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <Pressable
      style={{ width: "50%" }}
      onPress={() => {
        router.push(`/details/${data?.id}`);
      }}
    >
      <Box
        height={"$32"}
        flex={1}
        borderRadius={"$xl"}
        bgColor={getPokemonTheme(data?.types[0]?.type?.name)}
        mb={"$2.5"}
        mr={index % 2 === 0 ? "$2.5" : "$0"}
        py={"$3"}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={"$1.5"}
          px={"$2"}
        >
          <Text
            size="lg"
            color="$light50"
            textTransform="capitalize"
            fontWeight="$bold"
          >
            {data?.name}
          </Text>
          <Text size="lg" color="$light50">
            #{data?.id}
          </Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" flex={1}>
          <Box flex={1} pl={"$2"} pr={"$1.5"}>
            {data?.types?.map(({ type }) => (
              <Box
                key={type.name}
                px={"$1.5"}
                alignItems="center"
                flexDirection="row"
                mb={"$2"}
              >
                <Icon
                  size="sm"
                  as={getIcon(type?.name)}
                  color={getColor(type?.name)}
                />
                <Text
                  size="sm"
                  ml={"$0.5"}
                  color="$light50"
                  textTransform="capitalize"
                  fontWeight="$semibold"
                >
                  {type?.name}
                </Text>
              </Box>
            ))}
          </Box>
          <Box alignSelf="center" p={"$1.5"}>
            {data?.sprites.other?.dream_world?.front_default ? (
              Platform.OS === "web" ? (
                <Image
                  source={{
                    uri: data?.sprites.other?.dream_world?.front_default,
                  }}
                  style={styles.image}
                />
              ) : (
                <Box height={"$16"} width={"$16"} alignSelf="flex-end">
                  <SvgUri
                    uri={data?.sprites.other?.dream_world?.front_default}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              )
            ) : null}
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
    alignSelf: "flex-end",
  },
});
