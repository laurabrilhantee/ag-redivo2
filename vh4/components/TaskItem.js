import { View, Text } from 'react-native';

export default function TaskItem({ task }) {
  return (
    <View>
      <Text>{task}</Text>
    </View>
  );
}