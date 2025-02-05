import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, { ReactElement } from 'react';
import { styles } from './styles';
import UserListItem from './Item/UserListItem';
import useUserListSetup from '../../hooks/useUserListSetup';

const UserList = (): ReactElement => {
  const { isLoading, page, error, handleRefresh, handleLoadMore, items, total, isFetching } =
    useUserListSetup();

  if (isLoading && !page) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load users</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text style={styles.header}>All users ({total})</Text>
      <FlatList
        contentContainerStyle={styles.container}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserListItem
            name={`${item.firstName} ${item.lastName}`}
            image={item.image}
            bloodGroup={item.bloodGroup}
            eyeColor={item.eyeColor}
            company={item.company.name}
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl refreshing={isFetching && !page} onRefresh={handleRefresh} />
        }
        ListFooterComponent={() =>
          isFetching && !!page ? <ActivityIndicator style={styles.footer} /> : null
        }
      />
    </SafeAreaView>
  );
};

export default UserList;
