/* eslint-disable prettier/prettier */
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import FreelancerTile from '../../components/FreelancerTile/FreelancerTile';

import users from '../../apis/freelancersData';

const Freelancers = () => {
  const [data, setData] = useState(users);
  const renderItemFunction = useCallback(
    ({item}) => {
      return <FreelancerTile item={item}/>;
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



export default Freelancers;
