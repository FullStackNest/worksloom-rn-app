/* eslint-disable prettier/prettier */
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import BusinessTile from '../../components/BusinessTile/BusinessTile';

import users from '../../apis/businessData';

const Businesses = () => {
  const [data, setData] = useState(users);
  const renderItemFunction = useCallback(
    ({item}) => {
      return <BusinessTile item={item}/>;
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
          data={data}
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

export default Businesses;

