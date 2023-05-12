import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Box, HStack, Icon } from "../../gluestack-ui-comp";
import { Filter, Search } from "lucide-react-native";

const SearchInput = () => {
  return (
    <HStack
      my={"$5"}
      alignItems="center"
      space={"md"}
      justifyContent="space-between"
    >
      <Box
        flex={1}
        borderRadius={"$lg"}
        px={"$3.5"}
        height={"$12"}
        width={"$12"}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderColor="$borderDark100"
        borderWidth={"$1"}
      >
        <Icon as={Search} color="$backgroundDark950" />
        <TextInput placeholder="Search a Pokémon" style={styles.input} />
      </Box>
      <Box
        height={"$12"}
        width={"$12"}
        borderRadius={"$lg"}
        bg="$backgroundLight100"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={Filter} color="$backgroundDark950" />
      </Box>
    </HStack>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
});
