import { Image, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import { styles } from './styles';
import UserListItemParameter from './Parameter/UserListItemParameter';

type UserListItemProps = {
  name: string;
  image: string;
  bloodGroup: string;
  eyeColor: string;
  company: string;
};

const UserListItem = ({
  name,
  image,
  bloodGroup,
  eyeColor,
  company,
}: UserListItemProps): ReactElement => {
  return (
    <View style={styles.item}>
      <Image src={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <UserListItemParameter label={'Blood:'} value={bloodGroup} />
        <UserListItemParameter label={'Eye color:'} value={eyeColor} />
        <UserListItemParameter label={'Company:'} value={company} />
      </View>
    </View>
  );
};

export default UserListItem;
