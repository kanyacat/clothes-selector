import {Title} from "../Title/Title";
import styles from './addClothes.css'
import {CardImg} from "./CardImg";
import {Card} from "../Card";
import {Form, Formik} from "formik";
import {cardSchema} from "../../schemas";
import {CustomInput} from "../CustomInput";
import {CustomSelect} from "../CustomSelect";

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
                        {({isSubmitting, setFieldValue, errors, touched}) => (
                            <Form className={styles.container}>
                                <div className={styles.imgContainer}>
                                <CardImg/>
                                <input id="file" name="file" type="file" onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0])}} />
                                    {errors.file && touched.file && <p className={styles.error}>{errors.file}</p>}
                                </div>
                                <div className={styles.content}>

                                <CustomInput label='НАЗВАНИЕ' name='name' type='text' placeholder='Введите название вещи' />

                                <CustomSelect name='style'>
                                    <option value="">СТИЛЬ</option>
                                    <option value='sobesedovanye'>Собеседование</option>
                                    <option value='delovay_Vstrecha'>Деловая встреча</option>
                                    <option value='progulka'>Прогулка</option>
                                    <option value='svidanie'>Свидание</option>
                                </CustomSelect>

                                <CustomSelect name='color'>
                                    <option value="">ЦВЕТОВАЯ ГАММА</option>
                                    <option value='dark'>Тёмная одежда</option>
                                    <option value='light'>Светлая одежды</option>
                                </CustomSelect>

                                <CustomInput label='ПОГОДА' name='weather' type='number' placeholder='Введите погоду' />

                                <CustomInput label='ПРИМЕЧАНИЕ' name='note' type='text' placeholder='Введите примечание' />

                                <button type='submit' disabled={isSubmitting} className={styles.btn}>submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </ul>
        </>)
    }