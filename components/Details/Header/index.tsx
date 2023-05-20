import React from "react";
import { HStack, Icon, Text } from "../../../gluestack-ui-comp";
import { Pressable } from "react-native";
import { ArrowLeft, Heart } from "lucide-react-native";
import { getFormattedId } from "../../../utils";

interface HeaderProps {
  id: string;
  back: () => void;
}

const Header: React.FC<HeaderProps> = ({ id, back }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" p={"$5"}>
      <Pressable onPress={back}>
        <Icon size="lg" as={ArrowLeft} color="$muted900" />
      </Pressable>
      <Text fontSize={"$xl"} fontWeight="$semibold" color="$muted900">
        {getFormattedId(id as string)}
      </Text>
      <Icon size="lg" as={Heart} color="$muted900" />
    </HStack>
  );
};

export default Header;
