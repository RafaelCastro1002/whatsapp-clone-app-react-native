import { faker } from "@faker-js/faker";
import { ChatCard } from "../types/chats";
import { generateRandomNumber } from "./number";

const MAX_SIZE_MESSAGE = 35;

export const generateChats = (): ChatCard[] => {
  const loop = 30;
  const chats: ChatCard[] = [];

  for (let index = 0; index < loop; index++) {
    const unviewedMessages = faker.datatype.boolean();

    const chat: ChatCard = {
      nameContact: `${faker.person.firstName()} ${faker.person.lastName()}`,
      photoContact: `https://picsum.photos/80/80?${generateRandomNumber()}`,
      lastMessage: {
        nameContact: `${faker.person.firstName()} ${faker.person.lastName()}`,
        message: getMessage(),
        datetime: faker.date.recent(),
      },
      unviewedMessages,
      ...(unviewedMessages && {
        unviewedMessagesAmount: faker.number.int({
          min: 1,
          max: 9,
        }),
      }),
    };

    chats.push(chat);
  }

  return chats.sort((a, b) =>
    a.lastMessage.datetime > b.lastMessage.datetime ? -1 : 1
  );
};

const getMessage = () => {
  const message = faker.lorem.paragraph();

  return message.length > MAX_SIZE_MESSAGE
    ? `${message.substring(0, MAX_SIZE_MESSAGE)}...`
    : message;
};
