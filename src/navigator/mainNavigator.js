import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1617149Navigator from '../features/BlankScreen1617149/navigator';
import BlankScreen1517136Navigator from '../features/BlankScreen1517136/navigator';
import BlankScreen1417122Navigator from '../features/BlankScreen1417122/navigator';
import BlankScreen1317086Navigator from '../features/BlankScreen1317086/navigator';
import BlankScreen1217072Navigator from '../features/BlankScreen1217072/navigator';
import BlankScreen1117059Navigator from '../features/BlankScreen1117059/navigator';
import BlankScreen1017046Navigator from '../features/BlankScreen1017046/navigator';
import BlankScreen917033Navigator from '../features/BlankScreen917033/navigator';
import BlankScreen817020Navigator from '../features/BlankScreen817020/navigator';
import BlankScreen716994Navigator from '../features/BlankScreen716994/navigator';
import BlankScreen616969Navigator from '../features/BlankScreen616969/navigator';
import BlankScreen516919Navigator from '../features/BlankScreen516919/navigator';
import BlankScreen416906Navigator from '../features/BlankScreen416906/navigator';
import BlankScreen316893Navigator from '../features/BlankScreen316893/navigator';
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
BlankScreen1617149: { screen: BlankScreen1617149Navigator },
BlankScreen1517136: { screen: BlankScreen1517136Navigator },
BlankScreen1417122: { screen: BlankScreen1417122Navigator },
BlankScreen1317086: { screen: BlankScreen1317086Navigator },
BlankScreen1217072: { screen: BlankScreen1217072Navigator },
BlankScreen1117059: { screen: BlankScreen1117059Navigator },
BlankScreen1017046: { screen: BlankScreen1017046Navigator },
BlankScreen917033: { screen: BlankScreen917033Navigator },
BlankScreen817020: { screen: BlankScreen817020Navigator },
BlankScreen716994: { screen: BlankScreen716994Navigator },
BlankScreen616969: { screen: BlankScreen616969Navigator },
BlankScreen516919: { screen: BlankScreen516919Navigator },
BlankScreen416906: { screen: BlankScreen416906Navigator },
BlankScreen316893: { screen: BlankScreen316893Navigator },
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
