import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons'; 
import IconButton from './components/ui/IconButton';
import { GlobalScreens } from './constants/screens';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpensesOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={({navigation}) => (
        {
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500} ,     //background color of header
          headerTintColor: GlobalStyles.colors.white ,                        //text color for header 
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500} ,      //background color for bottom tab bar
          tabBarActiveTintColor: GlobalStyles.colors.accent500,                 //text color for bottom tab bar
          headerRight: ({tintColor}) => (
              <IconButton icon="add" size={20} color={tintColor} onPress={() => {navigation.navigate('ManageExpense')}}></IconButton>
          ),
        }
      )}
    >
      <BottomTabs.Screen name={GlobalScreens.screens.recentExpensesScreen} component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <Ionicons name="hourglass" size={size} color={color}></Ionicons>
        }}
      />
      <BottomTabs.Screen name={GlobalScreens.screens.allExpensesScreen} component={AllExpenses} 
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
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: GlobalStyles.colors.white
        }}>
          <Stack.Screen name={GlobalScreens.screens.expenseOverviewScreen} 
            component={ExpensesOverview} 
            options={{headerShown: false}} 
          />

          <Stack.Screen name={GlobalScreens.screens.manageExpenseScreen} component={ManageExpense} options={{presentation: 'modal'}} />
           
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
