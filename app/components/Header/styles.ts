import { ViewProps } from 'react-native';
import styled from 'styled-components/native'

const HeaderContainer = styled<ViewProps>`
  width: 100%;
  height: 100;
  background-color: ${({ theme }: { theme: any }) => theme.colors.light.header};
  justify-content: center;
  align-items: center;
`;


export { HeaderContainer }