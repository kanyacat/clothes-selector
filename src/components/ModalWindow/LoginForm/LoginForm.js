import {Form, Formik} from "formik";
import {loginSchema} from "../../schemas";
import styles from "../../Content/AddClothes/addClothes.css";
import {CustomInput} from "../../Content/CustomInput";

export function LoginForm() {
    const onSubmit = async (values, actions) => {
        console.log(values)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
    }


    return <>
    <Formik initialValues={{ login: '', password:'',}}
            validationSchema={loginSchema}
            onSubmit={onSubmit}>
        {({isSubmitting}) => (
            <Form className={styles.container}>
                <div className={styles.content}>
                    <CustomInput label='Логин' name='login' type='text' placeholder='Логин' />
                    <CustomInput label='Пароль' name='password' type='password' placeholder='Пароль' />
                    <br/>
                    <button type='submit' disabled={isSubmitting} className={styles.btn}>Войти</button>
                </div>
            </Form>
        )}
    </Formik>
    </>
}