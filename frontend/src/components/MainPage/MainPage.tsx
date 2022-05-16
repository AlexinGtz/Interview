import React, { useState } from 'react'
import axios from 'axios';
import './MainPage.css'
import { SearchBar } from '../SearchBar/SearchBar';


export const MainPage = () => {

    const searchInAPI = async () => {
        const data = null; // Complete Data to Send
        const items = (await axios.post('http://localhost:3001/dev/getPokemons', data)).data;
        console.log(items);
    } 

    return (
        <div className='mainDiv'>
            <SearchBar searchInAPI={searchInAPI} />
            {/* ADD COMPONENT(s) */}
        </div>
    )
}
