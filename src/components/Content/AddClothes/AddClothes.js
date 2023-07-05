import styles from './addClothes.css'
import {CardImg} from "./CardImg";
import {Card} from "../Card";
import {Form, Formik} from "formik";
import {cardSchema} from "../../schemas";
import {useState} from "react";
import {CustomSelect} from "../CustomComponents/CustomSelect";
import {CustomInput} from "../CustomComponents/CustomInput";
import {Title} from "../CustomComponents/Title/Title";

export function AddClothes() {

    const [image, setImage] = useState('https://svgshare.com/i/ucc.svg');

    const onSubmit = async (values, actions) => {
        console.log(values)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
        setImage('https://svgshare.com/i/ucc.svg')
    }

    return (<>
            <Title value={'добавление вещи в гардероб'}/>
            <ul>
                <Card>
                    <Formik initialValues={{file: '', name: '', style:'',
                        color: '', weather: ''
                        }}
                            validationSchema={cardSchema}
                            onSubmit={onSubmit}>
                        {({isSubmitting, setFieldValue, errors, touched}) => (
                            <Form className={styles.container}>
                                <div className={styles.imgContainer}>
                                    {image && <img className={styles.img} src={image} alt="preview image" />}
                                    <input className={styles.imgInput} id="file" name="file" type="file" accept='image/*'
                                       onChange={(event) => {
                                           if (event.target.files && event.target.files[0]) {
                                               setImage(URL.createObjectURL(event.target.files[0]))
                                               setFieldValue("file", event.currentTarget.files[0])
                                           }
                                       }
                                }
                                />
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
                                    <option value='light'>Светлая одежда</option>
                                </CustomSelect>

                                <CustomInput label='ПОГОДА' name='weather' type='number' placeholder='Введите погоду' />

                                <button type='submit' disabled={isSubmitting} className={styles.btn}>Добавить</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </ul>
        </>)
    }