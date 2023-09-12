import styled from "styled-components";
import { View, Text } from "react-native-ui-lib";

export const Container = styled(View)`
  width: 100%;
  background-color: #075e54;
  z-index: 100000;
  padding: 10px 10px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleApp = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonsContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
