import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

const HeaderContainer = styled.View<ViewProps>`
  ${({ theme }: { theme: DefaultTheme }) => css`
    width: 100%;
    height: 250px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
  `}
`;

const InputContainer = styled.View`
    width: 100%;
    height: 55px;
    padding: 15px;
    flex-direction: row;
    color: #404040;
    border-radius: 100px;
    border: 2px solid #fff;
    background-color: #fff;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`

const Input = styled.TextInput`
  width: 90%;
  font-size: 18px;
  ${({ theme }: DefaultTheme) => css`
    font-family: ${({ theme }) => theme.fonts.Inter_500_Medium} ;
  `}
`;

const SearchPressable = styled.Pressable`
    height: 45px;
    width: 45px;
    text-align: center;
    border-radius: 100px;
    color: #fff;
    font-size: 1.25rem;
    justify-content: center;
    align-items: center;
`
export {
  HeaderContainer,
  InputContainer,
  Input,
  SearchPressable
}