import { Pressable, SafeAreaView } from "react-native";
import React from "react";
import { Box, HStack, Icon } from "../../../gluestack-ui-comp";
import { ArrowLeft, Heart } from "lucide-react-native";
import LoadingPoke from "./LoadingPoke";
import { useRouter } from "expo-router";

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Box px={"$5"} py="$10">
        <HStack alignItems="center" justifyContent="space-between">
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Icon size="lg" as={ArrowLeft} color="$blueGray300" />
          </Pressable>
          <Box
            width={"$1/4"}
            height={"$1"}
            my={"$1.5"}
            borderRadius={"$xl"}
            bg="$backgroundLight200"
          />
          <Icon size="lg" as={Heart} color="$blueGray300" />
        </HStack>
        <Box alignItems="center">
          <LoadingPoke />
        </Box>
        <Box alignItems="center" my="$2">
          <Box
            width={"$2/4"}
            height={"$1"}
            my={"$1.5"}
            borderRadius={"$xl"}
            bg="$backgroundDark950"
          />
          <Box
            width={"$1/4"}
            height={"$1"}
            my={"$1.5"}
            borderRadius={"$xl"}
            bg="$backgroundLight200"
          />
        </Box>
        <HStack
          borderBottomColor="$blueGray300"
          borderBottomWidth={"$1"}
          py={"$2"}
          my={"$10"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            width={"$20"}
            height={"$10"}
            borderRadius={"$xl"}
            bg="$backgroundDark300"
          />
          <Box
            width={"$20"}
            height={"$10"}
            borderRadius={"$xl"}
            bg="$backgroundDark300"
          />
          <Box
            width={"$20"}
            height={"$10"}
            borderRadius={"$xl"}
            bg="$backgroundDark300"
          />
          <Box
            width={"$20"}
            height={"$10"}
            borderRadius={"$xl"}
            bg="$backgroundDark300"
          />
        </HStack>
        <HStack
          mx={"$8"}
          my={"$6"}
          py={"$6"}
          bgColor="$dark800"
          borderRadius={"$xl"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box p="$10" alignItems="center" />
          <Box borderWidth={"$1"} height={"$full"} borderColor="$dark700" />
          <Box p="$10" alignItems="center" />
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default LoadingScreen;
