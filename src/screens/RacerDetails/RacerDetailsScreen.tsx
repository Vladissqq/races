import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import LabelText from '../../components/LabelText/LabelText';
import {Driver} from '../../models/driver';
import styles from './styles';
import RacerDetailsScreenProps from './types';
import useAppSelector from '../../hooks/redux';
import useNavigation from '../../hooks/useNavigation';
import Button from '../../components/Button/Button';

const RacerDetails = ({route}: RacerDetailsScreenProps) => {
  const {racers} = useAppSelector(state => state.racersReducer);
  const [racer, setRacer] = useState<Driver>();
  const navigation = useNavigation();

  const driverId = route.params.driverId;

  useEffect(() => {
    setRacer(racers.find(item => item.driverId === driverId));
  }, [driverId, racers]);

  const handlePress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Button handlePress={handlePress} text="Back" />
      {racer &&
        Object.entries(racer).map(([key, value], index) => (
          <LabelText
            key={racer.driverId + index}
            label={`${key}: `}
            text={value}
          />
        ))}
    </View>
  );
};

export default RacerDetails;
