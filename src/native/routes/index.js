import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { StackViewStyleInterpolator } from 'react-navigation-stack';

import DefaultProps from '../constants/navigation';


import CreateComponent from '../components/CreateComponent';
import CreateContainer from '../../containers/CreateEvent';


import ExchangeContainer from '../../containers/Exchange';
import ExchangeComponent from '../components/ExchangeComponent';

import ExploreContainer from '../../containers/Explore';
import ExploreComponent from '../components/ExploreComponent';

import QRContainer from "../../containers/QR";
import QRComponent from '../components/QRComponent';



const Index = (
    <Stack
        key="root"
        transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })}
    >
        <Tabs
            hideNavBar
            showLabel={false}
            key="tabbar"
            tabBarPosition={'bottom'}
            type={'reset'}
            transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forFadeToBottomAndroid })}
            {...DefaultProps.tabProps}
        >
            <Stack
                hideNavBar
                key="Explore"
                icon={({ focused }) => <Icon type="FontAwesome" name="globe"
                    style={{ color: focused ? '#FC1055' : '#CACDD4', fontSize: 25 }} />}
                {...DefaultProps.navbarProps}
            >
                <Scene key="Explore" component={ExploreContainer} Layout={ExploreComponent} />
            </Stack>

            <Stack
                hideNavBar
                key="createEvent"
                icon={({ focused }) => <Icon type="Ionicons" name="calendar"
                    style={{ color: focused ? '#FC1055' : '#CACDD4', fontSize: 25 }} />}
                transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })}
                {...DefaultProps.navbarProps}
            >
                <Scene
                    key="createEvent"
                    component={CreateContainer}
                    Layout={CreateComponent}
                />
            </Stack>

            <Stack
                hideNavBar
                key="exchange"
                icon={({ focused }) => <Icon type="FontAwesome" name="exchange"
                    style={{ color: focused ? '#FC1055' : '#CACDD4', fontSize: 22 }} />}
                transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })}
                {...DefaultProps.navbarProps}
            >
                <Scene
                    key="exchange"
                    component={ExchangeContainer}
                    Layout={ExchangeComponent}
                />


            </Stack>
            <Stack
                hideNavBar
                key="qrcode"
                icon={({ focused }) => <Icon type="FontAwesome" name="qrcode"
                    style={{ color: focused ? '#FC1055' : '#CACDD4', fontSize: 22 }} />}
                transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })}
                {...DefaultProps.navbarProps}
            >
                <Scene
                    key="qrcode"
                    component={QRContainer}
                    Layout={QRComponent}
                />


            </Stack>


        </Tabs>
    </Stack>
);

export default Index;
