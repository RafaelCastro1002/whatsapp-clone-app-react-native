import React from "react";
import Header from "../Header";
import { Tab, TabBar, TabPage } from "./styles";
import { View, Text, TabController } from "react-native-ui-lib";
import Chats from "../../pages/Chats";

const TabNavigator = () => {
  const renderPage = (namePage: string) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "black" }}>Render page {namePage} </Text>
      </View>
    );
  };

  return (
    <TabController
      items={[
        { label: "CONVERSAS" },
        { label: "STATUS" },
        { label: "CHAMADAS" },
      ]}
    >
      <TabController.TabBar
        backgroundColor="#075E54"
        labelColor="#80ADA7"
        selectedLabelColor="white"
        labelStyle={{ fontWeight: "bold" }}
        indicatorStyle={{
          backgroundColor: "white",
          height: 4,
        }}
        containerStyle={{
          elevation: 20,
          zIndex: 10000,
          shadowColor: "#075E54",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}
        uppercase
      />
      <View style={{ flex: 1 }}>
        <TabController.TabPage index={0}>
          <Chats />
          {/* {renderPage("two")} */}
        </TabController.TabPage>
        <TabController.TabPage index={1} lazy>
          {renderPage("two")}
        </TabController.TabPage>
        <TabController.TabPage index={2} lazy>
          {renderPage("three")}
        </TabController.TabPage>
      </View>
    </TabController>
  );
};

export default TabNavigator;
