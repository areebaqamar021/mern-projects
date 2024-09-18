import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Calendar</Text>
      <Calendar
       style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}
      />
    </View>
  );
};

export default CalendarComponent;
