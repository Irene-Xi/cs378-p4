import React from 'react';
import { useGlobalContext } from '../context/global';
import Popular from './Popular';
import Upcoming from './Upcoming';
import Airing from './Airing';
import './Homepage.css'; 

function Homepage() {
    const {
        handleSubmit, 
        search, 
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = React.useState('popular');

    const switchComponent = () => {
        switch(rendered) {
            case 'popular': return <Popular rendered={rendered} />;
            case 'airing': return <Airing rendered={rendered} />;
            case 'upcoming': return <Upcoming rendered={rendered} />;
            default: return <Popular rendered={rendered} />;
        }
    };

    return (
        <div className='Homepage'>
            <header>
                <div className="search-container">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                        <button type="submit">Search</button>
                    </form>
                    <div className="button-container"> {}
                        <button className="filter-btn" onClick={() => setRendered('popular')}>Popular</button>
                        <button className="filter-btn" onClick={() => {setRendered('airing'); getAiringAnime();}}>Airing</button>
                        <button className="filter-btn" onClick={() => {setRendered('upcoming'); getUpcomingAnime();}}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </div>
    );
}

export default Homepage;
