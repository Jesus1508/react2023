import { Navigate, Route, Routes } from 'react-router-dom'

import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className='container'>
                <Routes>
                    <Route path='marvel' element={ <MarvelPage/> } />
                    <Route path='dc' element={ <DCPage/> } />

                    <Route path='search' element={ <SearchPage/> } />
                    <Route path='hero/:id' element={ <HeroPage/> } />

                    <Route path='/' element={ <Navigate to="/Marvel" /> } />
                </Routes>
            </div>
        </>
    )
}
