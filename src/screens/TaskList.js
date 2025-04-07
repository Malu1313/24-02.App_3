import { Title } from "@mui/icons-material";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TaskList({ navigation }) {
  const tasks = [
    {
      id: 1,
      title: "Comprar Leite",
      date: "2025-04-27",
      time: "10:00",
      address: "Supermercado Noemia",
    },
    {
      id: 2,
      title: "Eviar email",
      date: "2024-06-20",
      time: "14:45",
      address: "Trabalho",
    },
    {
      id: 3,
      title: "Estudar React Native",
      date: "2024-05-26",
      time: "00:00",
      address: "Casa",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList 
      data={tasks}
      keyExtractor={(item)=>item.id.toString}
      ronderItem={(item)=>(
        <TouchableOpacity
          style={styles.itemCard}
          onPress={()=> handleTaskPress(item)}
          >
            <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}
const styles = StyleSheet({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  itemCard: {
    padding: 15,
    backgroundColor: "green",
    marginBottom: 10,
    borderRadius: 8,
  },
});
