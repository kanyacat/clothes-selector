import {Title} from "../Title/Title";
import {Form, Formik} from "formik";
import styles from './selectClothes.css'
import {selectSchema} from "../../schemas";
import {CustomInput} from "../CustomInput";
import {CustomSelect} from "../CustomSelect";
import {SelectCards} from "./SelectCards";
import {SelectCard} from "./SelectCards/SelectCard";
export function SelectClothes() {

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
    }


    return <>
        <Title value={'подбор одежды'}/>

        <Formik initialValues={{style:'', color: '', weather: ''}}
                validationSchema={selectSchema}
                onSubmit={onSubmit}>
            {({isSubmitting}) => (
                <Form className={styles.container}>
                    <div className={styles.content}>

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

                        <button type='submit' disabled={isSubmitting} className={styles.btn}>Подобрать</button>
                    </div>
                </Form>
            )}
        </Formik>
        <h2 className={styles.selectTitle}>Возможно вам подойдут: </h2>
        <SelectCards>
            <SelectCard name={'Крутой наряд'} style={'Деловая встреча'} note={'Наряд года'} />
            <SelectCard name={'Обычный наряд'} style={'Прогулка'} note={'Наряд дня'} />
            <SelectCard name={'Без названия'} style={'Прогулка'} />
            <SelectCard name={'Кошачий наряд'} style={'Свидание'} note={'Для похода в котокафе'}/>
            <SelectCard name={'Рубашка'} style={'Собеседование'} note={'Просто моя любимая рубашка'} />
            <SelectCard name={'Без названия'} style={'Деловая встреча'} />

        </SelectCards>

    </>
}