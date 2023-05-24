import React, { useState } from "react";
import { Box, Icon, Text } from "../../../gluestack-ui-comp";
import { useQuery } from "@tanstack/react-query";
import { getPokemonEvolutionDetails } from "../../../api";
import {
  Chain,
  Child,
  PokemonEvolutionDetails,
  ProcessedPokemonEvolutionDetails,
} from "../../../types";
import { getFormattedId } from "../../../utils";
import { ArrowDown } from "lucide-react-native";
interface EvolutionsProps {
  name: string;
}

const processedEvolutionDetails = (
  data: PokemonEvolutionDetails | undefined
): ProcessedPokemonEvolutionDetails => {
  if (!data) {
    return {} as ProcessedPokemonEvolutionDetails;
  }
  return {
    id: data?.id,
    name: data?.chain.species.name,
    children:
      data?.chain?.evolves_to.length === 0
        ? []
        : data?.chain?.evolves_to.map((e) => getEvolutionChain(e)),
  };
};

const getEvolutionChain = (chain: Chain): Child => {
  const id = chain?.species?.url?.split("/").slice(-2, -1)[0];
  if (chain?.evolves_to?.length === 0) {
    return {
      children: [],
      id,
      name: chain?.species?.name,
    };
  }

  const children = chain?.evolves_to?.map((child) => getEvolutionChain(child));

  return {
    children,
    id,
    name: chain?.species?.name,
  };
};

const renderRecursive = (data: any) => {
  if (!data || !data.name) {
    return null;
  }

  return (
    <Box width={"$full"} alignItems="center" key={data?.id}>
      <Box
        alignItems="center"
        p={"$10"}
        my="$3"
        minWidth={"$3/4"}
        rounded={"$md"}
        bgColor="$dark800"
      >
        <Text fontWeight="$bold" fontSize={"$xl"} color="$text400" mb="$2">
          {getFormattedId(data?.id?.toString())}
        </Text>
        <Text textTransform="capitalize" fontWeight="$medium" fontSize={"$2xl"}>
          {data?.name}
        </Text>
      </Box>
      {data?.children.length > 0 ? (
        <Icon size="xl" as={ArrowDown} color={"$black"} />
      ) : null}
      {data?.children &&
        data?.children.map((data: any) => renderRecursive(data))}
    </Box>
  );
};

const Evolutions: React.FC<EvolutionsProps> = ({ name }) => {
  const [data, setData] = useState<ProcessedPokemonEvolutionDetails | null>(
    null
  );
  const {
    data: evoData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonEvolutionDetails", name],
    queryFn: () => getPokemonEvolutionDetails(name),
    enabled: name !== null && name !== undefined,
  });

  React.useEffect(() => {
    if (evoData) {
      setData(processedEvolutionDetails(evoData));
    }
  }, [evoData]);

  if (isLoading) {
    return (
      <Box flex={1}>
        <Text>Loading</Text>
      </Box>
    );
  }
  if (isError) {
    return (
      <Box flex={1}>
        <Text>Error</Text>
      </Box>
    );
  }
  return (
    <Box bgColor="$white" flex={1} px="$8" py="$2.5">
      {renderRecursive(data)}
    </Box>
  );
};

export default Evolutions;
