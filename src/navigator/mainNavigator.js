import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190690Navigator from '../features/UserProfile190690/navigator';
import Tutorial190689Navigator from '../features/Tutorial190689/navigator';
import NotificationList190661Navigator from '../features/NotificationList190661/navigator';
import Settings190660Navigator from '../features/Settings190660/navigator';
import Settings190652Navigator from '../features/Settings190652/navigator';
import UserProfile190650Navigator from '../features/UserProfile190650/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190690: { screen: UserProfile190690Navigator },
Tutorial190689: { screen: Tutorial190689Navigator },
NotificationList190661: { screen: NotificationList190661Navigator },
Settings190660: { screen: Settings190660Navigator },
Settings190652: { screen: Settings190652Navigator },
UserProfile190650: { screen: UserProfile190650Navigator },

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
