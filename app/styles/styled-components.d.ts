import "styled-components/native";
import theme from "@/app/styles";

type ThemeType = typeof theme.dark;

declare module "styled-components/native" {
    export interface Theme extends ThemeType { }
}