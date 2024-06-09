import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const HomePage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text>HomePage</Text>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
