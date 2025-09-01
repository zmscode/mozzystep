import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const App = () => {
	SplashScreen.hideAsync();

	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<SheetProvider context="global">
					<View style={styles.container}>
						<Text>
							Open up App.tsx to start working on your app!
						</Text>

						<StatusBar style="auto" />
					</View>
				</SheetProvider>
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
