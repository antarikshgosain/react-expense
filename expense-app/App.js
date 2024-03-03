import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons'; 
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpensesOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500} ,     //background color of header
        headerTintColor: GlobalStyles.colors.white ,                        //text color for header 
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500} ,      //background color for bottom tab bar
        tabBarActiveTintColor: GlobalStyles.colors.accent500,                 //text color for bottom tab bar
        headerRight: ({tintColor}) => (
            <IconButton  icon="add" size={20} color={tintColor} onPress={() => {}}></IconButton>
        ),
      }}
    >
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <Ionicons name="hourglass" size={size} color={color}></Ionicons>
        }}
      />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} 
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color}></Ionicons>
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" /> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" 
          component={ExpensesOverview} 
          options={{headerShown: false}} 
          />

          <Stack.Screen name="ManageExpense" component={ManageExpense} />
          
           
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight : {
    marginVertical: 8,
    paddingVertical: 8,
  },
});
