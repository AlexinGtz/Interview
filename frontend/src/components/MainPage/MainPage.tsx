import React, { useState } from 'react'
import axios from 'axios';
import './MainPage.css'
import { SearchBar } from '../SearchBar/SearchBar';
import testData from '../../mocks/API-Response.json';

// change if you want to make the call to API
const isMock = true;

export const MainPage = () => {

    const [id, setId] = useState('');
    
    const idHandler = (value: string) => {
        setId(value);
    }

    const searchInAPI = async () => {
        const data = null; // Figure out which data to send if it is not mock
        const receivedItem = isMock ? testData : await axios.post('http://localhost:3001/dev/getPokemons', data);
        // Process received Items someway to send them to the Card Component
    }

    return (
        <div className='mainDiv'>
            <div className='searchBarDiv'>
                <SearchBar 
                    searchInAPI={searchInAPI}
                    idValue={id}
                    idHandler={idHandler}
                    />
            </div>
            {/*INSERT CARD COMPONENT HERE*/}
        </div>
    )
}
