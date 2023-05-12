import React from "react";
import { Box } from "../../../gluestack-ui-comp";

interface LoadingSkeletonProps {
  index: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ index }) => {
  return (
    <Box
      height={"$32"}
      flex={1}
      borderRadius={"$xl"}
      bgColor="$info100"
      mb={"$2.5"}
      mr={index % 2 === 0 ? "$2.5" : "$0"}
      p={"$2.5"}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb={"$1.5"}
      >
        <Box
          width={"$2/4"}
          height={"$1"}
          my={"$1.5"}
          borderRadius={"$xl"}
          bg="$backgroundDark950"
        />
        <Box
          width={"$10"}
          height={"$1"}
          my={"$1.5"}
          borderRadius={"$xl"}
          bg="$backgroundDark950"
        />
      </Box>
      <Box flexDirection="row" flex={1}>
        <Box flex={1 / 2} p={"$2.5"} justifyContent="space-between">
          <Box
            width={"$full"}
            height={"$6"}
            borderRadius={"$lg"}
            bg="$backgroundLight100"
          />
          <Box
            width={"$full"}
            height={"$6"}
            borderRadius={"$lg"}
            bg="$backgroundLight100"
          />
        </Box>
        <Box flex={1 / 2} alignSelf="center">
          <Box
            height={"$16"}
            width={"$16"}
            borderRadius={"$lg"}
            bg="$backgroundLight100"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingSkeleton;
