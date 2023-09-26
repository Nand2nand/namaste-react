import React from 'react';
import  ReactDOM from 'react-dom/client';

/*
*Header
*   -logo
    -nav Items
*Body
    -search
    -RestaurantContainer
    -RestaurantCard
        - name of res, star rating,cuisine, delivery time
*footer
    -copyright
    -links
    -address
    -contact
*/


const Header = () => {
    return (
        <div className='header'>
             <div className='logo-container'>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s"
                />
             </div>
             <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = ({resName,cuisine}) => {
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className='res-logo'
            alt='res-logo'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAJLJSaIRdCsHpsKrPM-bnLUgcnSdTFRn2w&usqp=CAU"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName="Meghana Foods" cuisine="Biriyani, North Indian,Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, FastFood"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
