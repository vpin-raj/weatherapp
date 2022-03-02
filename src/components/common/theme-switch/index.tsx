import React, { MouseEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { SetThemes } from '../../../store/themes/slices/Themes';

const ThemeSwitch = () => {

  const dispatch = useDispatch();  

  
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        dispatch(SetThemes({name : 'General'}))
    }


  return (

    <div>
        <button onClick={clickHandler}>General</button> 
    </div>
  )
}

export default ThemeSwitch