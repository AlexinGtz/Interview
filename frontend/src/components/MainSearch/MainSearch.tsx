import React, { useState } from 'react'
import axios from 'axios';
import './MainSearch.css'
import { Header } from '../Header/Header';


export const MainSearch = () => {
    const [limit, setLimit] = useState('');
    const [offset, setOffset] = useState('');

    const limitHandler = (limitNumber: string) => {
        setLimit(limitNumber);
    }

    const offsetHandler = (off: string) => {
        setOffset(off);
    }

    const searchInAPI = async () => {
        const data = null; // Complete
        const items = (await axios.post('http://localhost:3001/dev/getPokemons', data)).data;
        console.log(items);
    } 

    return (
        <div className='mainDiv'>
            <Header limitHandler={limitHandler} 
                offsetHandler={offsetHandler} 
                limit={limit} offset={offset}
                searchInAPI={searchInAPI} />
            {/* ADD COMPONENT(s) */}
        </div>
    )
}
