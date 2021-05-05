//MAIN
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Header } from 'react-native-elements';

//CUSTOM
import Button from '../components/basicComponents/Button';
import Screen from '../components/basicComponents/Screen';
import ButtonDatePicker from '../components/customComponents/ButtonDatePicker';
import CustomDatePicker from '../components/customComponents/CustomDatePicker';
import ImagePickerInput from '../components/customComponents/ImagePickerInput';
import ErrorMessage from '../components/basicComponents/ErrorMessage';

//CONFIG
import colors from '../config/colors';

//VALIDATION
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function MainFormScreen() {
    //VALIDATION SCHEMA
    const validationSchema = Yup.object().shape({
        names: Yup.string().required().label("Nombre"),
        lastName: Yup.string().required().label("Apellidos")
    })

    //STATES
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [imageUri, setimageUri] = useState();

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

                <Formik
                    initialValues={{ names: '', lastName: '', birthDate: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <View style={{flexDirection:"column"}}>

                                <View style={styles.container} >
                                    <TextInput 
                                        placeholder="Nombre(s)" 
                                        style={[styles.shadowBox, styles.containerInput]}
                                        onBlur={() => setFieldTouched("names")}
                                        onChangeText={handleChange("names")}
                                    />
                                    <ErrorMessage error={errors.names} visible={touched.names} />

                                    <TextInput 
                                        placeholder="Apellidos" 
                                        style={[styles.shadowBox, styles.containerInput]}
                                        onBlur={() => setFieldTouched("lastName")}
                                        onChangeText={handleChange("lastName")}
                                    />
                                    <ErrorMessage error={errors.lastName} visible={touched.lastName} />

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

                                    <View style={{marginTop: 10, alignItems: 'center'}}>
                                        <ImagePickerInput
                                            imageUri={imageUri}
                                            onChangeImage={(uri) => {
                                            handleChange('image')(uri);
                                            setimageUri(uri);
                                            }}
                                        />
                                    </View>
                                    
                                    <View style={{marginTop: 10}}>
                                        <Button
                                            title="Guardar"
                                            onPress={handleSubmit}
                                        />
                                    </View>
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
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
