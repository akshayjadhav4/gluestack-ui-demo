import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { styled } from "@dank-style/react";
import { geColorValuesForGradient } from "../../../utils";

interface GradientBGProps {
  ability: string;
}
/**
 * REVISIT::
 * Property Resolver (Experimental)
 * propertyResolver sometime not returning color values. In that case seen white bg in iOS,
 * and crash on android with  Cannot set prop 'colors' on view 'class abi48_0_0.expo.modules.lineargradient.LinearGradientView'
 */

// const StyledLinearGradient = styled(
//   LinearGradient,
//   {
//     position: "absolute",
//     top: "$0",
//     h: "$full",
//     w: "$full",
//   },
//   { resolveProps: ["colors"] },
//   {
//     propertyTokenMap: {
//       colors: "colors",
//     },
//     propertyResolver: {
//       props: {
//         colors: (value: any, resolver: any) => {
//           return value.map((color: any) => resolver(color));
//         },
//       },
//     },
//   }
// );

const GradientBG: React.FC<GradientBGProps> = ({ ability }) => {
  const color = geColorValuesForGradient(ability);

  return (
    <LinearGradient
      colors={[color, color, "#ffffff", "#ffffff", "#ffffff"]}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
      }}
    />
  );
};

export default GradientBG;
