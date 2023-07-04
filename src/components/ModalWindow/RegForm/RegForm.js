import {Form, Formik} from "formik";
import {regSchema} from "../../schemas";
import styles from "../../Content/AddClothes/addClothes.css";
import {CustomInput} from "../../Content/CustomComponents/CustomInput";

export function RegForm() {
    const onSubmit = async (values, actions) => {
        console.log(values)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
    }

    return <>
    <Formik initialValues={{ login: '', password:'', confirmPassword: ''}}
            validationSchema={regSchema}
            onSubmit={onSubmit}>
        {({isSubmitting}) => (
            <Form className={styles.container}>
                <div className={styles.content}>
                    <CustomInput label='Логин' name='login' type='text' placeholder='Логин' />
                    <CustomInput label='Пароль' name='password' type='password' placeholder='Пароль' />
                    <CustomInput label='Подтверждение пароля' name='confirmPassword' type='password' placeholder='Повторите пароль' />
                    <br/>
                    <button type='submit' disabled={isSubmitting} className={styles.btn}>Регистрация</button>
                </div>
            </Form>
        )}
    </Formik>
    </>
}