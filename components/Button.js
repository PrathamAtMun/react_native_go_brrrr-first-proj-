import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Button({ title, backgroundColor, action }) {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        padding: 10,
        borderRadius: 50,
      }}
      onPress={action}
    >
      <Text style={{ color: "white", fontWeight: "600" }}>{title}</Text>
    </Pressable>
  );
}
