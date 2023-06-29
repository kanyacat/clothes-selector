import {Title} from "../Title/Title";
import styles from './addClothes.css'
import {Select} from "./Select/Select";
import {CardImg} from "./CardImg";
import {CardNote} from "../Card/CardElements/CardInfo/CardNote";
import {Card} from "../Card";
import {Form, Formik, useFormik} from "formik";
import {advancedSchema, cardSchema} from "../SelectClothes/schemas";
import {CustomInput} from "../CustomInput";
import {CustomSelect} from "../CustomSelect";
import {CustomCheckbox} from "../CustomCheckbox";

export function AddClothes() {

    const onSubmit = async (values, actions) => {
        console.log(values)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
    }

    return (<>
            <Title value={'добавление вещи в гардероб'}/>
            <ul>
                <Card>
                    <Formik initialValues={{file: '', name: '', style:'',
                        color: '', weather: '', note: ''
                        }}
                            validationSchema={cardSchema}
                            onSubmit={onSubmit}>
                        {({isSubmitting, setFieldValue}) => (
                            <Form>
                                <CardImg/>
                                <input id="file" name="file" type="file" onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0])}} />

                                <CustomInput label='НАЗВАНИЕ' name='name' type='text' placeholder='Введите название вещи' />

                                <br/>
                                <CustomSelect label='СТИЛЬ'
                                              name='style'
                                >
                                    <option value="">СТИЛЬ</option>
                                    <option value='sobesedovanye'>Собеседование</option>
                                    <option value='delovay_Vstrecha'>Деловая встреча</option>
                                    <option value='progulka'>Прогулка</option>
                                    <option value='svidanie'>Свидание</option>
                                </CustomSelect>
                                <br/>

                                <CustomSelect label='ЦВЕТОВАЯ ГАММА'
                                              name='color'
                                >
                                    <option value="">ЦВЕТОВАЯ ГАММА</option>
                                    <option value='dark'>Тёмная одежда</option>
                                    <option value='light'>Светлая одежды</option>
                                </CustomSelect>
                                
                                <CustomInput label='ПОГОДА' name='weather' type='number' placeholder='Введите погоду' />


                                <CustomInput label='ПРИМЕЧАНИЕ' name='note' type='text' placeholder='Введите примечание' />
                                <br/>
                                <button type='submit' disabled={isSubmitting} className={styles.btn}>submit</button>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </ul>
        </>)
    }