import React from 'react'
import { SearchBarProps } from './SearchBar.types';

export const SearchBar = (props: SearchBarProps) => {
  return (
    <React.Fragment>
        <div className='blankDiv'/>
            <div className='inputsDiv'>
                <div>
                    <label className='mainLabel'>Limit</label>
                    <input className='mainInput' type='text' placeholder='Limit' value={props.limitValue} onChange={(event) => {
                        props.limitHandler ? props.limitHandler(event.target.value) : console.log('No Limit handler Function provided');
                    }} />
                </div>
                <div>
                    <label className='mainLabel'>Offset</label>
                    <input className='mainInput' type='text' placeholder='Offset' value={props.offsetValue} onChange={(event) => {
                        props.offsetHandler ? props.offsetHandler(event.target.value) : console.log('No offset handler Function provided');
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
