/* eslint-disable prettier/prettier */
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import OffersTile from '../../components/OffersTile/OffersTile';

import offers from '../../apis/offers';

const Offers = () => {
  const [data, setData] = useState(offers);
  const renderItemFunction = useCallback(
    ({item}) => {
      return <OffersTile item={item}/>;
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

export default Offers;

