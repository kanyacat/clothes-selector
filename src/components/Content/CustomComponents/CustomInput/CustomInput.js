import {useField} from "formik";
import styles from "./customInput.css";

export const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return <>
        {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
    <div className={styles.content}>
        <label className={styles.title}>{label}</label>
        <input {...field} {...props}
               className={meta.touched && meta.error ? styles.inputError : ''} /></div>
    </>
}