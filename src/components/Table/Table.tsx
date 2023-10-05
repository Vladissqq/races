import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {Header} from '../TableHeader/Header';
import {Row} from '../TableRow/Row';
import styles from './styles';
import TableProps from './types';

function Table<T>({
  data,
  headers,
  keyExtractor,
  additionalCell,
  onRowPress,
}: TableProps<T>) {
  const transformedData = useMemo(() => {
    return data.map(item => {
      const newItem: Partial<T> = {};
      headers.forEach(prop => {
        if (Object.prototype.hasOwnProperty.call(item, prop)) {
          newItem[prop as keyof T] = item[prop as keyof T];
        }
      });
      return newItem;
    });
  }, [data, headers]);

  return (
    <View>
      <FlatList
        data={transformedData}
        ListHeaderComponent={
          <View style={styles.header}>
            {headers.map(header => (
              <View key={header} style={{flex: headers.length}}>
                <Header key={header} text={header} />
              </View>
            ))}
          </View>
        }
        renderItem={({item}) => (
          <View style={styles.rowContainer}>
            <Row
              data={item}
              onPress={() => {
                const key = keyExtractor;
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                  onRowPress && onRowPress(String(item[key]));
                }
              }}
            />
            {additionalCell && additionalCell(item as T)}
          </View>
        )}
      />
    </View>
  );
}

export default Table;
