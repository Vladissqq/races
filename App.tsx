import {Provider} from 'react-redux';
import setupStore from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
