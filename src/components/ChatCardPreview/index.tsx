import { Image, Badge, TouchableOpacity } from "react-native-ui-lib";
import { ChatCard } from "../../types/chats";
import { getFormattedDateOrTimeToMessage } from "../../utils/date";
import {
  Card,
  ContentSection,
  LineSection,
  MessagePreview,
  NameContact,
  TimeLastMessage,
} from "./styles";

const ChatCardPreview = ({
  nameContact,
  lastMessage,
  photoContact,
  unviewedMessages,
  unviewedMessagesAmount,
}: ChatCard) => {
  return (
    <TouchableOpacity>
      <Card>
        <Image
          source={{
            uri: photoContact,
          }}
          width={50}
          height={50}
          borderRadius={500}
        />
        <ContentSection style={{ flex: 1 }}>
          <LineSection>
            <NameContact numberOfLines={1}>{nameContact}</NameContact>
            <TimeLastMessage
              style={
                unviewedMessages && {
                  color: "#2BCE2C",
                }
              }
            >
              {getFormattedDateOrTimeToMessage(lastMessage.datetime)}
            </TimeLastMessage>
          </LineSection>
          <LineSection>
            <MessagePreview numberOfLines={1}>
              {lastMessage.message}
            </MessagePreview>
            {unviewedMessages && (
              <Badge
                label={unviewedMessagesAmount?.toString()}
                size={20}
                backgroundColor="#00D15B"
              />
            )}
          </LineSection>
        </ContentSection>
      </Card>
    </TouchableOpacity>
  );
};

export default ChatCardPreview;
