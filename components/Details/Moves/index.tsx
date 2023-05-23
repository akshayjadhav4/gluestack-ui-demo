import React from "react";
import { Move } from "../../../types";
import { Box, Text } from "../../../gluestack-ui-comp";

interface MovesProps {
  moves: Move[];
}

const Moves: React.FC<MovesProps> = ({ moves }) => {
  return (
    <Box bgColor="$white" flex={1} px="$8" py="$2.5">
      {moves?.slice(0, 10)?.map(({ move }) => (
        <Box py="$2.5" borderBottomColor="$dark700" borderBottomWidth={"$1"}>
          <Text textTransform="capitalize" fontWeight="$medium">
            {move.name}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Moves;
