import { Text } from 'react-native';
import React, { ReactElement } from 'react';
import { styles } from './styles';

type UserListItemParameterProps = {
  label: string;
  value: string;
};

const UserListItemParameter = ({ label, value }: UserListItemParameterProps): ReactElement => {
  return (
    <Text>
      <Text style={styles.label}>{label}</Text> {value}
    </Text>
  );
};

export default UserListItemParameter;
