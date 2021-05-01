import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements';
import Screen from '../components/basicComponents/Screen';
import ButtonDatePicker from '../components/customComponents/ButtonDatePicker';
import CustomDatePicker from '../components/customComponents/CustomDatePicker';
import colors from '../config/colors';

export default function MainFormScreen() {

    //STATES
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');

    //FUNCTIONS
    const showDatepicker = () => {
        setShow(true);
        setMode('date'); 
    };

    const onChange = (event) => {
        const newDate = new Date(event.nativeEvent.timestamp);
        const day =
          newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        const month =
          newDate.getMonth() < 9
            ? `0${parseInt(newDate.getMonth(), 10) + 1}`
            : parseInt(newDate.getMonth(), 10) + 1;
        const year = newDate.getFullYear();
        setShow(Platform.OS === 'ios');
        setUserBirthday(`${day}/${month}/${year}`);
        setDate(newDate);
    };

    return (
        <Screen>
            <View style={{ flex: 1, backgroundColor:"blue" }} >
                <Header
                    centerComponent={{ text: 'FORMULARIO', style: { color: '#fff', fontWeight: 'bold' } }}
                    backgroundColor={"blue"}
                    style={{shadowColor: 'transparent',}}
                />

                <View style={{flexDirection:"column"}}>

                    <View style={styles.container} >
                        <TextInput placeholder="Nombre" style={[styles.shadowBox, styles.containerInput]} />
                        <TextInput placeholder="Email" style={[styles.shadowBox, styles.containerInput]} />

                        <View style={{marginTop: 10}}>
                            <View>
                                <ButtonDatePicker 
                                    onPress={() => showDatepicker()}
                                    title="Fecha de Nacimiento"
                                />
                            </View>

                            <CustomDatePicker
                                visible={show}
                                value={date}
                                mode={mode}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                textColor="grey"
                                locale="es-ES"
                                style={{
                                borderRadius: 10,
                                }}
                                onChange={(option) => {
                                if (option.type !== 'dismissed') {
                                    onChange(option);
                                    setShow(false);
                                } else setShow(false);
                                }}
                                onClose={() => setShow(false)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        backgroundColor:"white",
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    shadowBox: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "red",
    },
    containerInput: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 40,
        borderRadius: 5,
        width: "100%",
        backgroundColor: colors.white,
        marginBottom: 15,
        marginTop:20
    },
})
