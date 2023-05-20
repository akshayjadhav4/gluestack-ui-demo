import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Box, Text } from "../../gluestack-ui-comp";
import Header from "../../components/Details/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import GradientBG from "../../components/Details/GradientBG";
import PokemonImage from "../../components/Details/PokemonImage";
import { Pokemon } from "../../types";
import About from "./About";
import Stats from "./Stats";
import Moves from "./Moves";
import Evolutions from "./Evolutions";
interface DetailsScreenProps {
  data: Pokemon | undefined;
  id: string;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ data, id }) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "about", title: "About" },
    { key: "stats", title: "Stats" },
    { key: "moves", title: "Moves" },
    { key: "evolutions", title: "Evolutions" },
  ]);

  const renderScene = SceneMap({
    about: () => <About abilities={data?.abilities} />,
    stats: Stats,
    moves: Moves,
    evolutions: Evolutions,
  });

  return (
    <Box style={styles.container}>
      <GradientBG ability={data?.types[0]?.type?.name ?? ""} />
      <Box flex={1} width={"$full"} pt={"$5"}>
        <Box paddingTop={top} px={"$5"}>
          <Header
            id={id as string}
            back={() => {
              router.back();
            }}
          />
          {data?.sprites.other?.dream_world?.front_default ? (
            <PokemonImage
              url={data?.sprites.other?.dream_world?.front_default}
            />
          ) : null}
          <Text
            mt={"$6"}
            size="2xl"
            textTransform="capitalize"
            textAlign="center"
            fontWeight="$bold"
            color="$muted900"
          >
            {data?.name}
          </Text>
          <Text
            mb={"$5"}
            size="lg"
            textTransform="capitalize"
            textAlign="center"
            fontWeight="$semibold"
            color="$text400"
            letterSpacing={"$md"}
          >
            {data?.types[0]?.type?.name} Pokémon
          </Text>
        </Box>
        {/* Tabs Start */}
        <TabView
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: "#000000",
              }}
              style={{ backgroundColor: "#ffffff" }}
              renderLabel={({ route, focused }) => (
                <Text
                  style={{
                    color: focused ? "#000000" : "#a1a1aa",
                    fontSize: 15,
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  {route.title}
                </Text>
              )}
            />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        {/* Tabs End */}
      </Box>
    </Box>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
