import React from "react";
import {
  GridList,
  GridListProps,
  Image,
  TouchableOpacity,
} from "react-native-ui-lib";
import { generateChats } from "../../utils/faker";
import ChatCardPreview from "../../components/ChatCardPreview";
import { ChatCard } from "../../types/chats";
import { FloatButton } from "./styles";

const Chats = () => {
  const chats = generateChats();

  const renderItem: GridListProps<ChatCard>["renderItem"] = ({
    item,
    index,
  }) => {
    return <ChatCardPreview {...item} key={index} />;
  };

  return (
    <>
      <GridList<ChatCard>
        data={chats}
        renderItem={renderItem}
        numColumns={1}
        scrollEnabled={true}
        keyExtractor={(item) => item.nameContact}
        itemSpacing={0}
        listPadding={0}
        style={{ flexGrow: 1, paddingBottom: 20 }}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
      <TouchableOpacity>
        <FloatButton style={{ elevation: 3 }}>
          <Image source={require("../../../assets/new-chat-icon.png")} />
        </FloatButton>
      </TouchableOpacity>
    </>
  );
};

export default Chats;
