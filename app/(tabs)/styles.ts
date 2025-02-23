import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

type ThemeProp = {
  theme: DefaultTheme
};

const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    padding: 14px;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`;

const WordDayContainer = styled.View<ViewProps>`
    flex: 1;
    padding: 10px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background-color: #FFF;
    margin-top: 10px;
`;

const TouchableSeeMeans = styled.Pressable`
   width: 100%;
   height: 50px;
   justify-content: center;
   align-items: center;
   border-top-width: 1;
   border-color: #CDCDCD;
   background-color: #FFF;
   border-bottom-left-radius: 14px;
   border-bottom-right-radius: 14px;
`;

const TitleContainer = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;


export {
  Container,
  WordDayContainer,
  TouchableSeeMeans,
  TitleContainer
}