import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

const request = () => fetch('https://google.com', {method: 'GET'});

const Example = () => {
  const {isRefetching, refetch} = useQuery('example', request);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={isRefetching} />
        }>
        <View style={styles.block}>
          <View style={styles.content} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  block: {
    height: 2000,
  },
  content: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  },
});
