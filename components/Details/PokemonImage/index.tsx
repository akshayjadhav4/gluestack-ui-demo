import React from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { Box } from "../../../gluestack-ui-comp";

interface PokemonImageProps {
  url: string;
}

const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.4;
const WEB_IMAGE_HEIGHT = height * 0.5;
const IMAGE_WIDTH = width * 0.8;
const PokemonImage: React.FC<PokemonImageProps> = ({ url }) => {
  return Platform.OS === "web" ? (
    <Image
      source={{
        uri: url,
      }}
      style={styles.image}
      resizeMode="contain"
    />
  ) : (
    <Box
      height={IMAGE_HEIGHT}
      width={IMAGE_WIDTH}
      alignSelf="center"
      justifyContent="center"
      paddingTop={"$6"}
    >
      <SvgUri uri={url} width={"100%"} height={"100%"} />
    </Box>
  );
};

export default PokemonImage;

const styles = StyleSheet.create({
  image: {
    height: WEB_IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    marginTop: 24,
  },
});
