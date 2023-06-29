import {useField} from "formik";
import styles from "../SelectClothes/selectClothes.css";

export const CustomCheckbox = ({...props}) => {
    const [field, meta] = useField(props);

    return <>
        <div className={styles.checkbox}>
            <input {...field} {...props}
                   className={meta.touched && meta.error ? styles.inputError : ''} />
            <span>i accept the terms of service</span>
            {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}

        </div>
    </>
}