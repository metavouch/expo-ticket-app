import React from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './UI/Spacer';;
import CardH2t from './UI/CardH2t';
import { StatusBar } from 'expo-status-bar';
import commonColor from '../../constants/colors';
import TextI18n from './UI/TextI18n';
import EventsConfig from '../../assets/events.json';

const Explore = ({ member }) => {
    return (
        <Container style={{ backgroundColor: commonColor.backgroundColor }}>

            <Content padder>
                <StatusBar style="light" />
                <TextI18n style={{ color: '#ffffff', fontSize: 30, margin: 50, marginBottom: 10, marginLeft: 10 }}>
                    explore.title
                </TextI18n>

                {
                    EventsConfig.map((event, eventIndex) => {
                        return (
                            <View key={eventIndex}>
                                <CardH2t
                                    background={event.background}
                                    onPress={() => Actions.jump('event-create')}
                                    title={event.title}
                                    date={event.date}
                                    location={event.location}
                                />
                            </View>
                        )
                    })

                }
                <Spacer size={20} />



            </Content>
        </Container >
    );
};

export default Explore;
