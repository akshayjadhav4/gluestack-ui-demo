import { Image, StyleSheet, View, Platform } from "react-native";
import React from "react";
import { Box, Icon, Text } from "../../../gluestack-ui-comp";
import { Result } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../../../api";
import LoadingSkeleton from "./LoadingSkeleton";
import { SvgUri } from "react-native-svg";
import {
  Flame,
  Feather,
  Trees,
  Biohazard,
  Droplets,
  Bug,
  LucideIcon,
  Bomb,
} from "lucide-react-native";
interface PokemonCardProps {
  item: Result;
  index: number;
}

const getIcon = (name: string): LucideIcon => {
  switch (name) {
    case "fire":
      return Flame;
    case "flying":
      return Feather;
    case "grass":
      return Trees;
    case "poison":
      return Biohazard;
    case "water":
      return Droplets;
    case "bug":
      return Bug;
    default:
      return Bomb;
  }
};

const getColor = (name: string): string => {
  switch (name) {
    case "fire":
      return "$orange500";
    case "flying":
      return "$blue400";
    case "grass":
      return "$lime500";
    case "poison":
      return "$purple500";
    case "water":
      return "$blue600";
    case "bug":
      return "$green800";
    default:
      return "$info100";
  }
};
const PokemonCard: React.FC<PokemonCardProps> = ({ item, index }) => {
  const url = item?.url;
  const lastIndex = url.lastIndexOf("/");
  const secondLastIndex = url.lastIndexOf("/", lastIndex - 1);
  const pokemonNumber = url.substring(secondLastIndex);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", url],
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
    <Box
      height={"$32"}
      flex={1}
      borderRadius={"$xl"}
      bgColor="$info100"
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
        <Text size="lg" textTransform="capitalize" fontWeight="$bold">
          {data?.name}
        </Text>
        <Text size="lg">#{data?.order}</Text>
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
              <Icon as={getIcon(type?.name)} color={getColor(type?.name)} />
              <Text
                size="sm"
                ml={"$0.5"}
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
