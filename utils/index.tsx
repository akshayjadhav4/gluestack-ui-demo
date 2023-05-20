import {
  Flame,
  Feather,
  Trees,
  Biohazard,
  Droplets,
  Bug,
  LucideIcon,
  Bomb,
  Component,
  Zap,
  Globe2,
  Brain,
  Hammer,
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
    case "normal":
      return Component;
    case "electric":
      return Zap;
    case "ground":
      return Globe2;
    case "psychic":
      return Brain;
    case "fighting":
      return Hammer;
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
      return "$purple900";
    case "water":
      return "$blue600";
    case "bug":
      return "$green800";
    case "normal":
      return "$amber800";
    case "electric":
      return "$yellow500";
    case "ground":
      return "$teal700";
    case "psychic":
      return "$pink800";
    case "fighting":
      return "$emerald800";
    default:
      return "$warning700";
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
    case "normal":
      return "$amber300";
    case "electric":
      return "$yellow300";
    case "ground":
      return "$teal300";
    case "psychic":
      return "$pink300";
    case "fighting":
      return "$emerald500";
    default:
      return "$warning200";
  }
};

export const geColorValuesForGradient = (name: string): string => {
  switch (name) {
    case "fire":
      return "#fb923c";
    case "flying":
      return "#60a5fa";
    case "grass":
      return "#4ade80";
    case "poison":
      return "#a855f7";
    case "water":
      return "#0ea5e9";
    case "bug":
      return "#84cc16";
    case "normal":
      return "#fcd34d";
    case "electric":
      return "#fde047";
    case "ground":
      return "#5eead4";
    case "psychic":
      return "#f9a8d4";
    case "fighting":
      return "#10b981";
    default:
      return "#fed7aa";
  }
};

export const getFormattedId = (id: string) => {
  if (id) {
    if (id.length === 1) {
      return `#00${id}`;
    } else if (id.length === 2) {
      return `#0${id}`;
    } else {
      return id;
    }
  }
  return "#000";
};
