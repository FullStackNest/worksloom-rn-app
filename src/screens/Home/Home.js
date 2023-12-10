/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, SafeAreaView, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, { useCallback, useState } from 'react';
import PostTile from '../../components/PostTile/PostTile';
// import Modal from 'react-native-modal';

import users from '../../apis/data';

const Home = () => {
  const [data, setData] = useState(users);
  const renderItemFunction = useCallback(
    ({item}) => {
      return <PostTile item={item}/>;
    },
    [],
  );

  const keyExtractor = useCallback(item => `${item.id}`, []);
  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 2}} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <SafeAreaView
      style={styles.container}
    >
        <FlatList
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={itemSeparatorComponent}
          renderItem={renderItemFunction}
        />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});


export default Home;
