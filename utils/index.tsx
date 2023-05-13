import {
  Flame,
  Feather,
  Trees,
  Biohazard,
  Droplets,
  Bug,
  LucideIcon,
  Bomb,
} from "lucide-react-native";

export const getIcon = (name: string): LucideIcon => {
  switch (name) {
    case "fire":
      return Flame;
    case "flying":
      return Feather;
    case "grass":
      return Trees;
    case "poison":
      return Biohazard;
    case "water":
      return Droplets;
    case "bug":
      return Bug;
    default:
      return Bomb;
  }
};

export const getColor = (name: string): string => {
  switch (name) {
    case "fire":
      return "$warning600";
    case "flying":
      return "$blue400";
    case "grass":
      return "$green600";
    case "poison":
      return "$purple500";
    case "water":
      return "$blue600";
    case "bug":
      return "$green800";
    default:
      return "$info100";
  }
};

export const getPokemonTheme = (name: string): string => {
  switch (name) {
    case "fire":
      return "$warning400";
    case "flying":
      return "$blue400";
    case "grass":
      return "$green400";
    case "poison":
      return "$purple500";
    case "water":
      return "$lightBlue500";
    case "bug":
      return "$lime500";
    default:
      return "$info100";
  }
};
