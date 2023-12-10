/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Header from '../../components/Header/Header';
import ExpandableListView from './ExpandableListView';

const Faqs = ({navigation}) => {
  const data = [
    {
      title: 'Question 1',
      children: ['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'],
    },
    {
      title: 'Question 2',
      children: ['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'],
    },
    {
      title: 'Question 3',
      children: ['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'],
    },
    {
      title: 'Question 4',
      children: ['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'],
    },
    {
      title: 'Question 5',
      children: ['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#2e63b8" />
      <Header navigation={navigation}/>
      {data.map((item, index) => (
        <ExpandableListView
          key={index}
          data={item}
          index={index}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
    </SafeAreaView>
  );
};
export default Faqs;
