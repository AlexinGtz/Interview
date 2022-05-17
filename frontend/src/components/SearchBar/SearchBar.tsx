import React from 'react'
import { SearchBarProps } from './SearchBar.types';

export const SearchBar = (props: SearchBarProps) => {
  return (
    <React.Fragment>
        <div className='blankDiv'/>
            <div className='inputsDiv'>
                <div>
                    <label className='mainLabel'>ID or Name</label>
                    <input className='mainInput' type='text' placeholder='ID/Name' value={props.idValue} onChange={(event) => {
                        props.idHandler ? props.idHandler(event.target.value) : console.log('No Limit handler Function provided');
                    }} />
                </div>
            </div>
            <div className='buttonDiv'>
                <button className='mainButton' type='submit' onClick={() => {
                    props.searchInAPI();
                }}>Search </button>
            </div>
            <div className='blankDiv'/>
    </React.Fragment>
  )
}
