import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import Racers from '../screens/Racers/RacersScreen';
import RacerDetails from '../screens/RacerDetails/RacerDetailsScreen';
import Races from '../screens/Races/RacesScreen';
import {NativeStackNavigatorTypes} from './NavigatorTypes';

const RootStack = createNativeStackNavigator<NativeStackNavigatorTypes>();

export const Navigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.RACERS}>
      <RootStack.Screen name={Routes.RACERS} component={Racers} />
      <RootStack.Screen name={Routes.RACER} component={RacerDetails} />
      <RootStack.Screen name={Routes.RACES} component={Races} />
    </RootStack.Navigator>
  );
};
