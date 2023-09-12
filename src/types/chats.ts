export type ChatCard = {
  nameContact: string;
  photoContact: string;
  lastMessage: {
    nameContact: string;
    message: string;
    datetime: Date;
  };
  unviewedMessages: boolean;
  unviewedMessagesAmount?: number;
};
