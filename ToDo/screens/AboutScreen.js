import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen = () => {
  const appName = "To-Do App";
  const authorName = "Sheraj Singh Thabal";
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>App Name: {appName}</Text>
        <Text style={styles.text}>Author: {authorName}</Text>
        <Text style={styles.text}>Current Date: {currentDate}</Text>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;
