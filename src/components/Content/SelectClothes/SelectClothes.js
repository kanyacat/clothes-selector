import {Title} from "../Title/Title";
import {Formik, useFormik} from "formik";
import styles from './selectClothes.css'
import {basicSchema} from "./schemas";
export function SelectClothes() {

    const onSubmit = () => {
        console.log('submitted')
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik( {
        initialValues: {
            email: '',
            age:'',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema,
        onSubmit
    })

    console.log(errors)

    return <>
        <Title value={'подбор одежды'}/>

            <form onSubmit={handleSubmit} className={styles.form} action="">
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    id='email'
                    placeholder='enter your email'
                    className={errors.email && touched.email ? styles.inputError : ''}
                />
                <br/>
                <label htmlFor="age">Age</label>
                <input
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    id='age'
                    placeholder='enter your age'
                    className={errors.age && touched.age ? styles.inputError : ''}

                />
                <br/>
                <label htmlFor="password">Password</label>
                <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    id='password'
                    placeholder='enter your pass'
                    className={errors.password && touched.password ? styles.inputError : ''}

                />
                <br/>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    id='confirmPassword'
                    placeholder='confirm your pass'
                    className={errors.confirmPassword && touched.confirmPassword ? styles.inputError : ''}

                />
                <br/>
                <button type="submit">submit</button>


            </form>
    </>

}