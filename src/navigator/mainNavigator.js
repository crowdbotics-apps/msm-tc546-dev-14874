import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015110Navigator from '../features/BlankScreen015110/navigator';
import BlankScreen114836Navigator from '../features/BlankScreen114836/navigator';
import BlankScreen014826Navigator from '../features/BlankScreen014826/navigator';
import BlankScreen114344Navigator from '../features/BlankScreen114344/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015110: { screen: BlankScreen015110Navigator },
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
