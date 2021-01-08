import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen216878Navigator from '../features/BlankScreen216878/navigator';
import BlankScreen116863Navigator from '../features/BlankScreen116863/navigator';
import BlankScreen016846Navigator from '../features/BlankScreen016846/navigator';
import BlankScreen115821Navigator from '../features/BlankScreen115821/navigator';
import BlankScreen015185Navigator from '../features/BlankScreen015185/navigator';
import BlankScreen114836Navigator from '../features/BlankScreen114836/navigator';
import BlankScreen014826Navigator from '../features/BlankScreen014826/navigator';
import BlankScreen114344Navigator from '../features/BlankScreen114344/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen216878: { screen: BlankScreen216878Navigator },
BlankScreen116863: { screen: BlankScreen116863Navigator },
BlankScreen016846: { screen: BlankScreen016846Navigator },
BlankScreen115821: { screen: BlankScreen115821Navigator },
BlankScreen015185: { screen: BlankScreen015185Navigator },
BlankScreen114836: { screen: BlankScreen114836Navigator },
BlankScreen014826: { screen: BlankScreen014826Navigator },
BlankScreen114344: { screen: BlankScreen114344Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
