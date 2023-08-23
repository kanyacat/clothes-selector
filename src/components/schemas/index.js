import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const cardSchema = yup.object().shape({
    img: yup
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

export const regSchema = yup.object().shape({
    login: yup
        .string()
        .required("Обязательно"),
    password: yup
        .string()
        .matches(passwordRules, { message: "Пожалуйста, придумайте более сильный пароль" })
        .min(5)
        .required("Обязательно"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Обязательно"),
});