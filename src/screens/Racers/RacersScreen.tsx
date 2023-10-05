import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useLazyFetchRacersQuery} from '../../services/racersService';
import {setRacers} from '../../store/reducers/racersSlice';
import Table from '../../components/Table/Table';
import useAppSelector from '../../hooks/redux';
import {Routes} from '../../navigation/Routes';
import useNavigation from '../../hooks/useNavigation';
import {Driver} from '../../models/driver';
import styles from './styles';
import Button from '../../components/Button/Button';

const Racers = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(1);

  const [fetchRacers, {data, isLoading}] = useLazyFetchRacersQuery();

  const {racers} = useAppSelector(state => state.racersReducer);

  useEffect(() => {
    fetchRacers({page: currentPage - 1});
  }, [fetchRacers, currentPage]);

  useEffect(() => {
    if (data) {
      dispatch(setRacers(data));
    }
  }, [data, dispatch]);

  const handleRowPress = (driverId: string) => {
    navigation.navigate(Routes.RACER, {driverId});
  };

  const handleRaceClick = ({driverId}: Driver) => {
    navigation.navigate(Routes.RACES, {driverId});
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {racers && (
        <Table
          data={racers}
          keyExtractor="driverId"
          headers={['driverId', 'familyName', 'givenName', '']}
          onRowPress={handleRowPress}
          additionalCell={item => (
            <Button handlePress={() => handleRaceClick(item)} text="Races" />
          )}
        />
      )}

      <View style={styles.pagination}>
        <TouchableOpacity
          disabled={currentPage === 1}
          onPress={() => setCurrentPage(prev => prev - 1)}>
          <Text style={styles.paginationText}>Предыдущая</Text>
        </TouchableOpacity>
        <Text style={styles.paginationText}>Страница {currentPage}</Text>
        <TouchableOpacity
          disabled={!racers || racers.length < 10}
          onPress={() => setCurrentPage(prev => prev + 1)}>
          <Text style={styles.paginationText}>Следующая</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Racers;
