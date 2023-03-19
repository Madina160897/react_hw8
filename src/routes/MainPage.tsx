import React from 'react'
import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <>
            <header className='df jc-sa fd-c'>
                <Link to='/people'>
                    <div className='box-header'>
                        <b> People </b>
                    </div>
                </Link> <br />
                <Link to='/planets'>
                    <div className='box-header'>
                        <b> Planets </b>
                    </div>
                </Link> <br />
                <Link to='/starships'>
                    <div className='box-header'>
                        <b> Starships </b>
                    </div>
                </Link>
            </header>
        </>
    )
}

export default MainPage
