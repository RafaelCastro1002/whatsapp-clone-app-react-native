import { ButtonsContainer, Container, TitleApp } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-ui-lib";

const Header = () => {
  return (
    <Container>
      <TitleApp>WhatsApp</TitleApp>
      <ButtonsContainer>
        <TouchableOpacity
          activeBackgroundColor="#80ADA7"
          style={{
            borderRadius: 500,
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}
        >
          <Icon name="search" size={25} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          activeBackgroundColor="#80ADA7"
          style={{
            borderRadius: 500,
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}
        >
          <Icon name="more-vert" size={25} color="#FFF" />
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
