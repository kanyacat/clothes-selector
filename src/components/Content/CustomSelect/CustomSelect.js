import {useField} from "formik";
import styles from "./customSelect.css";

export const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return <>
        {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
        <div className={styles.content}>
        <select {...field} {...props}
               className={meta.touched && meta.error ? styles.inputError : ''} />
        </div>
    </>
}