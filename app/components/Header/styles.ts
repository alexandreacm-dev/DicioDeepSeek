import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

const HeaderContainer = styled.View<ViewProps>`
  ${({ theme }: { theme: DefaultTheme }) => css`
    width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
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
`

const Input = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;

const SearchPressable = styled.Pressable`
position: absolute;
    right: 4px;
    top: 4px;
    height: 45px;
    width: 45px;
    padding: 0;
    text-align: center;
    border-radius: 100px;
    background: #121212;
    color: #fff;
    transition: all .15sease-in-out;
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