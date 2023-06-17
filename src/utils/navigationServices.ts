import {StackActions} from '@react-navigation/native';
import {navigationRef} from '../../App';
let _navigator: any;
function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

export const navigate = (name: string, params: Object) => {
  if (navigationRef.isReady()) {
    navigationRef.current.navigate(name, params);
  }
};
function replace(routeName: string, params?: any) {
  navigationRef.dispatch(StackActions.replace(routeName, params));
}

function goBack(target?: string) {
  target
    ? _navigator.goBack(target ? target : undefined)
    : navigationRef.current?.goBack();
}

async function stackFirst(routeName: string, params: any = {}) {
  await navigate(routeName, params);
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  stackFirst,
  replace,
};
