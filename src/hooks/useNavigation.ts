import {
  useNavigation as useNavigationBase,
  NavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigatorTypes} from '../navigation/NavigatorTypes';

const useNavigation = () => {
  return useNavigationBase<NavigationProp<NativeStackNavigatorTypes>>();
};

export default useNavigation;
