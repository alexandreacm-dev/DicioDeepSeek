import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

type ThemeProp = {
  theme: DefaultTheme
};

const Container = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
  `}
`;

const NextWordsContainer = styled.View<ViewProps>`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.background};
    margin-bottom: 16px;
`;


const WebViewContainer = styled.View`
  width: 100%;
  height: 35%;
`;

const PageContainer = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    justify-content: center;
    align-items: center;
  `}
`;

const NoContentContainer = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: flex-start;
    align-items: center;
  `}
`;

const ButtonContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 10%;
  justify-content: center;
  align-items: center;
`;


const PressableButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
   width: 100%;
   padding: 10px;
   flex-direction: row;
   border-radius: 20px;
   background-color: ${({ theme }) => theme.colors.secondaryColor};
   margin-top: 10px;
`
const ErrorContainer = styled.View`
  ${({ theme }: ThemeProp) => css`
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    background-color: #f5e50970;
    justify-content: center;
    align-items: center;
  `}
`;

const DefinitionArea = styled.TextInput`
   flex: 1;
   padding: 14px;
   background-color: #FFF;
   ${({ theme }: ThemeProp) => css`
    font-family: ${({ theme }) => theme.fonts.Inter_400_Regular};
    font-size: 15px;
   `}
`;

export {
  Container,
  NextWordsContainer,
  WebViewContainer,
  PageContainer,
  NoContentContainer,
  PressableButton,
  ButtonContainer,
  IconContainer,
  ErrorContainer,
  DefinitionArea
}