import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import Button from "./components/Button";
import MonsterComponent from "./components/MonsterComponent";

//["orc", "dragon", "wyvern", "goblin", "ghost"];

export default function App() {
  const [health, setHealth] = useState(10);
  const [healPoints, setHealPoints] = useState(1);
  const [monsters, setMonsters] = useState([
    { name: "orc", health: 2, id: 0 },
    { name: "dragon", health: 5, id: 1 },
    { name: "wyvern", health: 4, id: 2 },
    { name: "goblin", health: 1, id: 3 },
    { name: "ghost", health: 3, id: 4 },
  ]);
  const [selectedMonster, setSelectedMonster] = useState(0);

  const heal = () => {
    if (healPoints > 0) {
      setHealth(health + 1);
      setHealPoints(healPoints - 1);
    }
  };

  const attack = () => {
    console.log(selectedMonster);
    if (!monsters.find((monster) => monster.id == selectedMonster)) return;
    const damageTo = ["monster", "player"];
    const action = damageTo[Math.floor(Math.random() * 2)];
    console.log(action);
    if (action == "monster") {
      setMonsters(
        monsters
          .map((monster) => {
            if (monster.id == selectedMonster) {
              monster.health--;
            }
            if (monster.health == 0) {
              setHealPoints(healPoints + 1);
            }
            return monster;
          })
          .filter((monster) => monster.health > 0)
      );
    } else {
      setHealth(health - 1);
    }
  };

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
      <Text>
        Health: {health} : Healing potions: {healPoints}
      </Text>
      <Button title="Attack" backgroundColor="red" action={attack}></Button>
      <Button title="Heal" backgroundColor="green" action={heal}></Button>
      <StatusBar style="auto" />
      <FlatList
        data={monsters}
        keyExtractor={(item, i) => i}
        renderItem={({ item }) => (
          <MonsterComponent
            monster={item}
            backgroundColor={item.id === selectedMonster ? "orange" : "grey"}
            action={setSelectedMonster}
          ></MonsterComponent>
        )}
      ></FlatList>
      <Text
        style={{
          color: health == 0 ? "red" : "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Game over
      </Text>
    </View>
  );
}
