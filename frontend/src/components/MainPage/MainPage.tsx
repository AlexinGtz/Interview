import React from 'react'
import axios from 'axios';
import './MainPage.css'
import { SearchBar } from '../SearchBar/SearchBar';
import testData from '../../mocks/API-Response.json';

// change if you want to make the call to API
const isMock = false;

export const MainPage = () => {
    

    const searchInAPI = async () => {
        const data = null; // Figure out which data to send
        const receivedItem = isMock ? testData : await axios.post('http://localhost:3001/dev/getPokemons', data);
        // Process received Items
    } 

    return (
        <div className='mainDiv'>
            <div className='searchBarDiv'>
                {/* Send Missing dynamic props */}
                <SearchBar searchInAPI={searchInAPI} />
            </div>
            {/*INSERT CARD COMPONENT HERE*/}
        </div>
    )
}
