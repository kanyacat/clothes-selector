import styles from './addClothes.css'
import {Card} from "../Card";
import {Form, Formik} from "formik";
import {cardSchema} from "../../schemas";
import {useState} from "react";
import {CustomSelect} from "../CustomComponents/CustomSelect";
import {CustomInput} from "../CustomComponents/CustomInput";
import {Title} from "../CustomComponents/Title/Title";
import {useDispatch} from "react-redux";
import {addItems} from "../../../redux/clothes/slice";

export function AddClothes() {
    const dispatch = useDispatch()

    const [image, setImage] = useState('https://svgshare.com/i/ucc.svg');

    const onSubmit = async (values, actions) => {
        dispatch(addItems(values))

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        
        actions.resetForm();
        setImage('https://svgshare.com/i/ucc.svg')
    }

    return (<>
            <Title value={'добавление вещи в гардероб'}/>
            <ul>
                <Card>
                    <Formik initialValues={{img: '', name: '', style:'',
                        color: '', weather: ''
                        }}
                            validationSchema={cardSchema}
                            onSubmit={onSubmit}>
                        {({isSubmitting, setFieldValue, errors, touched}) => (
                            <Form className={styles.container}>
                                <div className={styles.imgContainer}>
                                    {image && <img className={styles.img} src={image} alt="preview image" />}
                                    <input className={styles.imgInput} id="img" name="img" type="file" accept='image/*'
                                           onChange={(event) => {
                                               if (event.target.files && event.target.files[0]) {
                                                   setImage(URL.createObjectURL(event.target.files[0]))
                                                   setFieldValue("img", event.currentTarget.files[0].name)
                                               }
                                           }
                                           }
                                    />
                                    {errors.img && touched.img && <p className={styles.error}>{errors.img}</p>}
                                </div>
                                <div className={styles.content}>

                                <CustomInput label='НАЗВАНИЕ' name='name' type='text' placeholder='Введите название вещи' />

                                <CustomSelect name='style'>
                                    <option value="">СТИЛЬ</option>
                                    <option value='Собеседовние'>Собеседование</option>
                                    <option value='Деловая встреча'>Деловая встреча</option>
                                    <option value='Прогулка'>Прогулка</option>
                                    <option value='Свидание'>Свидание</option>
                                </CustomSelect>

                                <CustomSelect name='color'>
                                    <option value="">ЦВЕТОВАЯ ГАММА</option>
                                    <option value='Тёмная одежда'>Тёмная одежда</option>
                                    <option value='Светлая одежда'>Светлая одежда</option>
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