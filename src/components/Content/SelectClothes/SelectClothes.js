import {Title} from "../Title/Title";
import {Field, Form, Formik, useFormik} from "formik";
import styles from './selectClothes.css'
import {advancedSchema, basicSchema} from "./schemas";
import {CustomInput} from "../CustomInput";
import {CustomSelect} from "../CustomSelect";
import {CustomCheckbox} from "../CustomCheckbox";
export function SelectClothes() {

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)

        await new Promise((resolve) =>
            setTimeout(resolve, 1000))
        actions.resetForm();
    }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik( {
        initialValues: {
            email: '',
            age:'',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema,
        onSubmit
    })

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
                {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
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
                {errors.age && touched.age && <p className={styles.error}>{errors.age}</p>}
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
                {errors.password && touched.password && <p className={styles.error}>{errors.password}</p>}

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
                {errors.confirmPassword && touched.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                <br/>
                <button type="submit" disabled={isSubmitting} className={styles.btn}>submit</button>
            </form>
    <br/>
        <Formik initialValues={{username: '', jobType:'', acceptedTos: false}}
                validationSchema={advancedSchema}
        onSubmit={onSubmit}>
            {({isSubmitting}) => (
                <Form>
                    <CustomInput label='Username' name='username' type='text' placeholder='enter username' />
                    <br/>
                    <CustomSelect label='job type'
                    name='jobType'
                    placeholder='please select job'
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect>
                    <br/>
                    <CustomCheckbox type='checkbox' name='acceptedTos' />
                    <br/>
                    <button type='submit' disabled={isSubmitting} className={styles.btn}>submit</button>
                </Form>
            )}
        </Formik>
    </>
}