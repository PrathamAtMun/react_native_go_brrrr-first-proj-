import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";

export default function MonsterComponent({ monster, backgroundColor, action }) {
  return (
    <Pressable onPress={() => action(monster.id)}>
      <Text
        style={{
          padding: 10,
          backgroundColor: backgroundColor,
          margin: 5,
          borderRadius: 5,
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {monster.name} , {monster.health}
      </Text>
    </Pressable>
  );
}
