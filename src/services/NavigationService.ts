import { NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';

let navigationRef: NavigationContainerRef<RootStackParamList> | null = null;

function setTopLevelNavigator(ref: NavigationContainerRef<RootStackParamList> | null) {
  navigationRef = ref;
}

function navigate(route: keyof RootStackParamList, params?: RootStackParamList[keyof RootStackParamList]) {
  navigationRef?.navigate(route, params as any);
}

function reset(route: keyof RootStackParamList) {
  navigationRef?.reset({
    index: 0,
    routes: [{ name: route }],
  });
}
  
export default {
  setTopLevelNavigator,
  navigate,
  reset
};
