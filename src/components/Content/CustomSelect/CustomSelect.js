import {useField} from "formik";
import styles from "../SelectClothes/selectClothes.css";

export const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return <>
        <label>{label}</label>
        <select {...field} {...props}
               className={meta.touched && meta.error ? styles.inputError : ''} />
        {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
    </>
}