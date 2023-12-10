/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const data = [
    { id: 1, title: 'Item 1', content: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Item 2', content: 'Consectetur adipiscing elit' },
    { id: 3, title: 'Item 3', content: 'Sed do eiusmod tempor incididunt' },
  ];


const Faqs = () => {
    const [expanded, setExpanded] = useState(false);

    const renderListItem = ({ item }) => {
        return (
          <View style={{ margin: 10 }}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
            </TouchableOpacity>
            {expanded && <Text>{item.content}</Text>}
          </View>
        );
      };

  return (
    <View style={{flex: 1}}>
       <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
};

export default Faqs;

//-------------------------
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExpandableListView = ({data}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpand}>
        <Text>{data.title}</Text>
      </TouchableOpacity>
      {expanded && data.children && (
        <View>
          {data.children.map((child, index) => (
            <Text key={index}>{child}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ExpandableListView;

/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import ExpandableListView from './ExpandableListView';

const Faqs = () => {
  const data = [
    {
      title: 'List 1',
      children: ['Child 1', 'Child 2', 'Child 3'],
    },
    {
      title: 'List 2',
      children: ['Child 4', 'Child 5', 'Child 6'],
    },
    {
      title: 'List 3',
      children: ['Child 7', 'Child 8', 'Child 9'],
    },
  ];

  return (
    <View>
      {data.map((item, index) => (
        <ExpandableListView key={index} data={item} />
      ))}
    </View>
  );
};

export default Faqs;
