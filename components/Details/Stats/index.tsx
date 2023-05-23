import React from "react";
import { Box, HStack, Text } from "../../../gluestack-ui-comp";
import { Stat } from "../../../types";

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <Box bgColor="$white" flex={1} p="$8">
      {stats?.map(({ base_stat, stat }) => (
        <Box key={stat.name} mb={"$5"}>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            mb={"$1.5"}
          >
            <Text
              textTransform="uppercase"
              fontWeight="$normal"
              fontSize={"$lg"}
            >
              {stat.name}
            </Text>
            <Text fontWeight="$bold" fontSize={"$lg"}>
              {base_stat}
            </Text>
          </HStack>
          <HStack alignItems="center">
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <Box
                  key={index}
                  height={"$10"}
                  width={"$2.5"}
                  bgColor={
                    index < Math.floor(base_stat / 10)
                      ? "$amber300"
                      : "$dark800"
                  }
                  mr="$2.5"
                />
              ))}
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default Stats;
