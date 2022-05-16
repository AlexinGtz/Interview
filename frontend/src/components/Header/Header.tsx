import React from 'react'
import { HeaderProps } from './Header.types';

export const Header = (props: HeaderProps) => {
  return (
    <React.Fragment>
        <div className='blankDiv'/>
            <div className='inputsDiv'>
                <div>
                    <label className='mainLabel'>Limit</label>
                    <input className='mainInput' type='text' placeholder='Limit' value={props.limit} onChange={(event) => {
                        props.limitHandler(event.target.value);
                    }} />
                </div>
                <div>
                    <label className='mainLabel'>Offset</label>
                    <input className='mainInput' type='text' placeholder='Offset' value={props.offset} onChange={(event) => {
                        props.offsetHandler(event.target.value);
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
