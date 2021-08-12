import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { Icon, View } from 'native-base';
import TextI18n from './TextI18n';

const CardH2t = ({ background, title, date, location, onPress, loading }) => (

    <TouchableOpacity style={{
        flex: 1,
        height: 500,
        padding: 10,
    }} onPress={onPress} disabled={loading} >
        <View style={{
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
            elevation: 17,
            borderRadius: 10,
        }}>
            <ImageBackground
                source={{ uri: background }}
                imageStyle={{ resizeMode: 'cover', borderRadius: 15 }}
                style={{
                    width: '100%',
                    height: '100%',

                }}>
                <View style={{
                    flex: 1, padding: 15,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                }}>
                    <Text style={{ color: 'white', fontSize: 17, textAlign: 'right' }}>{date} | {location}</Text>
                    <Text style={{ color: 'white', fontSize: 28, textAlign: 'right', fontFamily: 'Montserrat_Bold' }}>
                        {title}
                    </Text>



                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity >
);

CardH2t.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
};

CardH2t.defaultProps = {
    source: require('../../../images/Events/event.png'),
};

export default CardH2t;
