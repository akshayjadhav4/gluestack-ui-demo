import { LayoutChangeEvent, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, HStack, Icon } from "../../gluestack-ui-comp";
import { Filter, Search } from "lucide-react-native";

const HomeLoadingSkeleton = () => {
  const [numRows, setNumRows] = useState(1);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event?.nativeEvent?.layout;
    const newNumRows = Math.ceil(height / (128 + 20));
    setNumRows(newNumRows);
  };

  const rows = Array.from({ length: numRows }, (_, index) => (
    <HStack flex={1} space={"md"} key={index} marginBottom={"$5"}>
      <Box height={"$32"} flex={1} borderRadius={"$xl"} bgColor="$info100" />
      <Box height={"$32"} flex={1} borderRadius={"$xl"} bgColor="$info100" />
    </HStack>
  ));
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} width={"$full"} padding={"$5"}>
        <Box
          width={"$1/2"}
          height={"$1"}
          my={"$3.5"}
          borderRadius={"$xl"}
          bg="$backgroundDark950"
        />
        <Box
          width={"$3/4"}
          height={"$1"}
          my={"$1.5"}
          borderRadius={"$xl"}
          bg="$info100"
        />
        <Box
          width={"$2/3"}
          height={"$1"}
          my={"$1.5"}
          borderRadius={"$xl"}
          bg="$info100"
        />
        <HStack
          my={"$5"}
          alignItems="center"
          space={"md"}
          justifyContent="space-between"
        >
          <Box
            flex={1}
            borderRadius={"$full"}
            bgColor="$info200"
            py={"$2"}
            px={"$5"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              width={"$4/5"}
              height={"$1"}
              my={"$3.5"}
              borderRadius={"$xl"}
              bg="$backgroundDark950"
            />
            <Icon as={Search} color="$backgroundDark950" />
          </Box>
          <Box
            height={"$12"}
            width={"$12"}
            borderRadius={"$full"}
            bg="$info200"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={Filter} color="$backgroundDark950" />
          </Box>
        </HStack>
        <Box flex={1} width={"$full"} onLayout={handleLayout}>
          {rows}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeLoadingSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
