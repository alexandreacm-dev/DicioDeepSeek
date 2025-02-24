import { DefaultTheme } from 'styled-components/dist/models/ThemeProvider';

import styled, { css } from 'styled-components/native'

type ThemeProp = {
  theme: DefaultTheme
};

const Container = styled.View`
  ${({ theme }: ThemeProp) => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`;

export { Container }