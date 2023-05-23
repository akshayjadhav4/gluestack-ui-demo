import React from "react";
import { Ability } from "../../../types";
import { Box, HStack, Icon, Text } from "../../../gluestack-ui-comp";
import { ScrollView } from "react-native";
import {
  decimetersToCentimeters,
  getPokemonTheme,
  getIcon,
  hectogramsToKilograms,
} from "../../../utils";
import { Type } from "../../../types";

interface AboutProps {
  abilities: Ability[] | undefined;
  types: Type[];
  weight: number;
  height: number;
}

const About: React.FC<AboutProps> = ({ abilities, height, weight, types }) => {
  return (
    <ScrollView>
      <HStack
        mx={"$8"}
        my={"$6"}
        py={"$6"}
        bgColor="$dark800"
        borderRadius={"$xl"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box p="$10" alignItems="center">
          <Text fontWeight="$bold" fontSize={"$lg"} mb={"$1.5"}>
            {hectogramsToKilograms(weight)} kg
          </Text>
          <Text>Weight</Text>
        </Box>
        <Box borderWidth={"$1"} height={"$full"} borderColor="$dark700" />
        <Box p="$10" alignItems="center">
          <Text fontWeight="$bold" fontSize={"$lg"} mb={"$1.5"}>
            {decimetersToCentimeters(height)} cm
          </Text>
          <Text>Height</Text>
        </Box>
      </HStack>
      <Box mx={"$8"} my={"$6"} bgColor="$dark800" borderRadius={"$xl"}>
        <Box my="$5" px="$5" alignItems="center">
          <HStack my="$5" px="$5" alignItems="center" space="md">
            {types?.map(({ type }) => (
              <Box
                height={"$8"}
                width={"$8"}
                borderRadius={"$full"}
                bgColor={getPokemonTheme(type.name)}
                alignItems="center"
                justifyContent="center"
              >
                <Icon size="xl" as={getIcon(type.name)} color={"$white"} />
              </Box>
            ))}
          </HStack>

          <Text>Category</Text>
        </Box>
        <Box
          width={"$4/5"}
          alignSelf="center"
          height={"$0.5"}
          bgColor="$dark700"
        />
        {abilities ? (
          <>
            <Box my="$5" px="$5" alignItems="center">
              <Text
                fontWeight="$bold"
                textTransform="capitalize"
                fontSize={"$lg"}
                mb={"$1.5"}
              >
                {abilities[0]?.ability?.name}, {abilities[1]?.ability?.name}
              </Text>
              <Text>Ability</Text>
            </Box>
          </>
        ) : null}
      </Box>
    </ScrollView>
  );
};

export default About;
