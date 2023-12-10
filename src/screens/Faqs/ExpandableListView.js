/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExpandableListView = ({ data, index, expandedIndex, setExpandedIndex }) => {
  const isExpanded = index === expandedIndex;

  const toggleExpand = () => {
    setExpandedIndex(isExpanded ? -1 : index);
  };

  return (
    <View style={{margin: 10,  borderColor: '#4d86db', height: 'auto', borderWidth: 1,}}>
      <TouchableOpacity
        style={{
          height: 40,
          padding: 10,
          borderBottomWidth: 1,
          borderColor: '#4d86db',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={toggleExpand}
      >
        <Text>{data.title}</Text>
        <Text>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && data.children && (
        <View style={{ padding: 5, marginTop: 5,}}>
          {data.children.map((child, index) => (
            <Text key={index}>{child}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ExpandableListView;
