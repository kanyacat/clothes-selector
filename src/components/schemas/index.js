import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required('required'),
    age: yup.number().positive().integer().required("required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "please create a stronger password" })
        .required("required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "passwords must match")
        .required("required"),
})

export const cardSchema = yup.object().shape({
    file: yup
        .string()
        .required("Обязательно"),
    name: yup
        .string()
        .min(3, "Название должно быть не меньше 3 символов")
        .required("Обязательно"),
    style: yup
        .string()
        .oneOf(["sobesedovanye", "delovay_Vstrecha", "progulka", "svidanie"],
            "Выберите один из вариантов")
        .required("Обязательно"),
    color: yup
        .string()
        .oneOf(["dark", "light"], "Выберите один из вариантов")
        .required("Обязательно"),
    weather: yup
        .number()
        .integer()
        .required("Обязательно"),
});

export const selectSchema = yup.object().shape({
    style: yup
        .string()
        .oneOf(["sobesedovanye", "delovay_Vstrecha", "progulka", "svidanie"],
            "Выберите один из вариантов")
        .required("Обязательно"),
    color: yup
        .string()
        .oneOf(["dark", "light"], "Выберите один из вариантов")
        .required("Обязательно"),
    weather: yup
        .number()
        .integer()
        .required("Обязательно"),
});

export const loginSchema = yup.object().shape({
    login: yup
        .string()
        .required("Обязательно"),
    password: yup
        .string()
        .required("Обязательно"),
});