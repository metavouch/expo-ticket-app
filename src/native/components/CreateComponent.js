import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, RefreshControl, Image, View, Dimensions } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './UI/Spacer';
import { StatusBar } from 'expo-status-bar';
import commonColor from '../../constants/colors';
import TextI18n from './UI/TextI18n';
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import DatePicker from 'react-native-date-picker'


const deviceWidth = Dimensions.get('window').width;


const CreateComponent = ({ loading, events, reFetch }) => {

    const createEvent = () => {
        var event = { title: eventTitle, description: eventDescription, location: eventLocation, date: eventDate }
        alert(JSON.stringify(event));
    }
    const [eventTitle, setEventTitle] = React.useState('');
    const [eventDescription, setEventDescription] = React.useState('');
    const [eventLocation, setEventLocation] = React.useState('');
    const [eventDate, setEventDate] = React.useState(Date.now());
    return (
        <Container style={{ backgroundColor: commonColor.backgroundColor }}>
            <Content padder refreshControl={(
                <RefreshControl
                    refreshing={loading}
                    onRefresh={reFetch}
                    title="Pull to refresh"
                    tintColor="#fff"
                    titleColor="#fff"
                    colors={['#000', '#fff', '#000']}
                />
            )}>
                <StatusBar style="light" />
                <TextI18n style={{ color: '#ffffff', fontSize: 30, margin: 50, marginBottom: 10, marginLeft: 10 }}>
                    createEvent.title
                </TextI18n>
                <Spacer size={20} />

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEventTitle}
                        value={eventTitle}
                        placeholder="Title"
                    />
                    <TextInput
                        style={styles.input}
                        multiline // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable
                        maxLength={40}
                        placeholder="Description"
                        onChangeText={setEventDescription}
                        value={eventDescription}
                    />
                    <TextInput
                        style={styles.textarea}
                        onChangeText={setEventLocation}
                        value={eventLocation}
                        placeholder="Description"
                    />
                    {/*
                <DatePicker
                    date={eventDate}
                    onDateChange={setEventDate}
                />*/}
                    <Button
                        onPress={createEvent}
                        title="Create"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </SafeAreaView>



            </Content>
        </Container>
    );
};
const styles = StyleSheet.create({
    input: {
        color: 'white',
        borderColor: 'purple',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textarea: {
        color: 'white',
        borderColor: 'purple',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

CreateComponent.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    reFetch: PropTypes.func,
};

CreateComponent.defaultProps = {
    error: null,
    reFetch: null,
};

export default CreateComponent;
