import { useContext } from 'react'
import HomeScreen from './HomeScreen'
import SplashScreen from './SplashScreen'
import AuthContext from '../auth'
import LoginScreen from './LoginScreen'

export default function HomeWrapper() {
    const { auth } = useContext(AuthContext);
    console.log("HomeWrapper auth.loggedIn: " + auth.loggedIn);

    if (auth.loggedIn)
        return <HomeScreen />
    else
        //return <SplashScreen />
        return <LoginScreen />
}