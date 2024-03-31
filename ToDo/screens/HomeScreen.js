import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState(["Add a task"]);

  const addTask = (taskText) => {
    if (taskText.trim().length === 0) {
      return;
    }

    const existingTask = tasks.find((task) => task.toLowerCase() === taskText.toLowerCase());

    if (existingTask) {
      alert('Task already exists');
      return;
    }

    setTasks([...tasks, taskText]);
  };

  const removeTask = (taskText) => {
    setTasks(tasks.filter((task) => task !== taskText));
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} removeTask={removeTask} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
