import styled from "styled-components";
import { View, Text } from "react-native-ui-lib";

export const Card = styled(View)`
  padding: 14px 12px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

export const ContentSection = styled(View)`
  margin-left: 10px;
  display: flex;
  gap: 3px;
`;

export const LineSection = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameContact = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: 500;
`;

export const TimeLastMessage = styled(Text)`
  color: #a4aaac;
  font-size: 12px;
  font-weight: 400;
`;

export const MessagePreview = styled(Text)`
  color: #a4aaac;
  font-size: 14px;
  font-weight: 400;
`;
