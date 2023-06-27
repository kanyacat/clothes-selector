import {useEffect} from "react";
import Choices from "choices.js";
import './choices.min.global.css'
import './select.global.css'


export function Select(props) {

    useEffect(() => {
        new Choices(`.style`, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
        });

        new Choices(`.color`, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
        });

        new Choices(`.weather`, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
        });

        new Choices(`.category`, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
        });

    })

    // function addOption (items) {
    //     return items.map((item, index) => {
    //         return <option key={index}>{item}</option>
    //     })
    // }

    return(
        <>
            <select className='style'>
                <option value="">СТИЛЬ</option>
                <option>Деловой</option>
                <option>Домашний</option>
                <option>Уличный</option>
            </select>

            <select className='color'>
                <option value="">ЦВЕТОВАЯ ГАММА</option>
                <option>????</option>
            </select>

            <select className='weather'>
                <option value="">ПОГОДА</option>
                <option>????</option>
            </select>

            <select className='category'>
                <option value="">КАТЕГОРИЯ</option>
                <option>????</option>
            </select>

        </>
    )
}