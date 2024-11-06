import { Text, View, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-col h-full bg-red-500">
      <View className="h-full justify-center items-center bg-blue-500">
        <Text className="text-black text-3xl font-bold">Start</Text>
      </View>
    </SafeAreaView>
  );
}
