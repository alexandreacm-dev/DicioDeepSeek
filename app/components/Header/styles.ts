import { ViewProps } from 'react-native';
import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

const HeaderContainer = styled.View<ViewProps>`
  ${({ theme }: { theme: DefaultTheme }) => css`
     width: 100%;
    height: 100;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
  `}
`;


export { HeaderContainer }