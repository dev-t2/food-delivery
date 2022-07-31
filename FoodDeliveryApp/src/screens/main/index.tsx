import React, { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { MainParamList } from './types';
import Orders from './Orders';
import Delivery from './delivery';
import Settings from './Settings';

const { Navigator, Screen } = createBottomTabNavigator<MainParamList>();

function Main() {
  const ordersOptions = useMemo<BottomTabNavigationOptions>(() => {
    return { title: '오더 목록' };
  }, []);

  const settingsOptions = useMemo<BottomTabNavigationOptions>(() => {
    return { title: '내 정보' };
  }, []);

  return (
    <Navigator initialRouteName="Orders">
      <Screen name="Orders" component={Orders} options={ordersOptions} />
      <Screen name="Delivery" component={Delivery} />
      <Screen name="Settings" component={Settings} options={settingsOptions} />
    </Navigator>
  );
}

export default memo(Main);
