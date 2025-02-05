import React from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import UserList from './components/UserList/UserList';

export default function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}
