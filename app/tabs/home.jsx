import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyStage";

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data = {[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="px-4 text-3xl text-primary">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6 bg-primary">
            <View className="px-4 justify-between items-start flex-row mb-6 ">
              <View>
                <Text className="font-pmedium text-sm text-gray-100 ">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Isaias
                </Text>
              </View>
            </View>
            <View className="px-4">
              <SearchInput />
            </View>

            <View className="px-4 bg-white w-full flex-1 pt-5 pb-8">
              <Text className="text-prima ry text-lg font-pregular mb-3">
                Rutinas Diarias
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No found any" subtitle="Search other things" />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
