import "styled-components/native";
import DefaultTheme from "@/app/styles/theme/DefaultTheme";

declare module "styled-components/native" {
    type ThemeType = typeof DefaultTheme;

    export interface DefaultTheme extends ThemeType { }
}