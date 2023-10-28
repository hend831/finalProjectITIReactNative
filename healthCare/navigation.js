import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScrean from './screans/HomeScrean';
import HospitalScrean from './screans/HospitalScrean';
import MainScrean from './screans/MainScrean';
import SpecialtiesScrean from './screans/ٍٍSpecialtiesScrean';
import DoctorsScrean from './screans/DoctorsScrean';
import LoginScrean from './screans/LoginScrean';
import RegisterScrean from './screans/RegisterScrean';
const Stack = createNativeStackNavigator();
export default function Navigation(){
    return(
     <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeScrean} />
        {/* <Stack.Screen name="Home" component={LoginScrean} /> */}
        {/* <Stack.Screen name="Home" component={RegisterScrean} /> */}
        <Stack.Screen name="About " component={HospitalScrean} />
        <Stack.Screen name="Main " component={MainScrean} />
        <Stack.Screen name="specialties " component={SpecialtiesScrean} />
        <Stack.Screen name="doctors" component={DoctorsScrean}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}