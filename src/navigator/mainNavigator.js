import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4817659Navigator from '../features/BlankScreen4817659/navigator';
import BlankScreen4717639Navigator from '../features/BlankScreen4717639/navigator';
import BlankScreen4617627Navigator from '../features/BlankScreen4617627/navigator';
import BlankScreen4517608Navigator from '../features/BlankScreen4517608/navigator';
import BlankScreen4417596Navigator from '../features/BlankScreen4417596/navigator';
import BlankScreen4317584Navigator from '../features/BlankScreen4317584/navigator';
import BlankScreen4217546Navigator from '../features/BlankScreen4217546/navigator';
import BlankScreen4117534Navigator from '../features/BlankScreen4117534/navigator';
import BlankScreen4017522Navigator from '../features/BlankScreen4017522/navigator';
import BlankScreen3917515Navigator from '../features/BlankScreen3917515/navigator';
import BlankScreen3817507Navigator from '../features/BlankScreen3817507/navigator';
import BlankScreen3717495Navigator from '../features/BlankScreen3717495/navigator';
import BlankScreen3617483Navigator from '../features/BlankScreen3617483/navigator';
import BlankScreen3517471Navigator from '../features/BlankScreen3517471/navigator';
import BlankScreen3417452Navigator from '../features/BlankScreen3417452/navigator';
import BlankScreen3317433Navigator from '../features/BlankScreen3317433/navigator';
import BlankScreen3217419Navigator from '../features/BlankScreen3217419/navigator';
import BlankScreen3117407Navigator from '../features/BlankScreen3117407/navigator';
import BlankScreen3017395Navigator from '../features/BlankScreen3017395/navigator';
import BlankScreen2917383Navigator from '../features/BlankScreen2917383/navigator';
import BlankScreen2817358Navigator from '../features/BlankScreen2817358/navigator';
import BlankScreen2717321Navigator from '../features/BlankScreen2717321/navigator';
import BlankScreen2617309Navigator from '../features/BlankScreen2617309/navigator';
import BlankScreen2517295Navigator from '../features/BlankScreen2517295/navigator';
import BlankScreen2417283Navigator from '../features/BlankScreen2417283/navigator';
import BlankScreen2317272Navigator from '../features/BlankScreen2317272/navigator';
import BlankScreen2217260Navigator from '../features/BlankScreen2217260/navigator';
import BlankScreen2117248Navigator from '../features/BlankScreen2117248/navigator';
import BlankScreen2017235Navigator from '../features/BlankScreen2017235/navigator';
import BlankScreen1917193Navigator from '../features/BlankScreen1917193/navigator';
import BlankScreen1817180Navigator from '../features/BlankScreen1817180/navigator';
import BlankScreen1717161Navigator from '../features/BlankScreen1717161/navigator';
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
BlankScreen4817659: { screen: BlankScreen4817659Navigator },
BlankScreen4717639: { screen: BlankScreen4717639Navigator },
BlankScreen4617627: { screen: BlankScreen4617627Navigator },
BlankScreen4517608: { screen: BlankScreen4517608Navigator },
BlankScreen4417596: { screen: BlankScreen4417596Navigator },
BlankScreen4317584: { screen: BlankScreen4317584Navigator },
BlankScreen4217546: { screen: BlankScreen4217546Navigator },
BlankScreen4117534: { screen: BlankScreen4117534Navigator },
BlankScreen4017522: { screen: BlankScreen4017522Navigator },
BlankScreen3917515: { screen: BlankScreen3917515Navigator },
BlankScreen3817507: { screen: BlankScreen3817507Navigator },
BlankScreen3717495: { screen: BlankScreen3717495Navigator },
BlankScreen3617483: { screen: BlankScreen3617483Navigator },
BlankScreen3517471: { screen: BlankScreen3517471Navigator },
BlankScreen3417452: { screen: BlankScreen3417452Navigator },
BlankScreen3317433: { screen: BlankScreen3317433Navigator },
BlankScreen3217419: { screen: BlankScreen3217419Navigator },
BlankScreen3117407: { screen: BlankScreen3117407Navigator },
BlankScreen3017395: { screen: BlankScreen3017395Navigator },
BlankScreen2917383: { screen: BlankScreen2917383Navigator },
BlankScreen2817358: { screen: BlankScreen2817358Navigator },
BlankScreen2717321: { screen: BlankScreen2717321Navigator },
BlankScreen2617309: { screen: BlankScreen2617309Navigator },
BlankScreen2517295: { screen: BlankScreen2517295Navigator },
BlankScreen2417283: { screen: BlankScreen2417283Navigator },
BlankScreen2317272: { screen: BlankScreen2317272Navigator },
BlankScreen2217260: { screen: BlankScreen2217260Navigator },
BlankScreen2117248: { screen: BlankScreen2117248Navigator },
BlankScreen2017235: { screen: BlankScreen2017235Navigator },
BlankScreen1917193: { screen: BlankScreen1917193Navigator },
BlankScreen1817180: { screen: BlankScreen1817180Navigator },
BlankScreen1717161: { screen: BlankScreen1717161Navigator },
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
