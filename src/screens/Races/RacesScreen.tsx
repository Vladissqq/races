import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useLazyFetchRacesByIdQuery} from '../../services/racesService';
import Table from '../../components/Table/Table';
import styles from './styles';
import RacesScreenProps from './types';
import useNavigation from '../../hooks/useNavigation';
import Button from '../../components/Button/Button';

const Races = ({route}: RacesScreenProps) => {
  const driverId = route.params.driverId;
  const [getRacesById, {data}] = useLazyFetchRacesByIdQuery();
  const navigation = useNavigation();

  useEffect(() => {
    getRacesById({id: driverId});
  }, [driverId, getRacesById]);

  const handlePress = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Button handlePress={handlePress} text="Back" />
      {data && (
        <Table
          data={data}
          headers={['raceName', 'position', 'points', 'season']}
          keyExtractor="circuitId"
        />
      )}
    </View>
  );
};

export default Races;
