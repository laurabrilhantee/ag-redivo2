import { View, Text, Button, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  return (
    <View>
      <Button title="Adicionar Tarefa"
        onPress={() => navigation.navigate('Adicionar', { setTasks })}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
}