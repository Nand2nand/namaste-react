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

const RestaurantCard = () => {
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className='res-logo'
            alt='res-logo'
            src="https://content3.jdmagicbox.com/comp/bangalore/b2/080pxx80.xx80.200929223605.l8b2/catalogue/meghana-foods-rajajinagar-1st-block-bangalore-biryani-delivery-restaurants-03vi3yr0hq.jpg"
            />
            <h3>Meghana Foods</h3>
            <h4>Biriyani, North Indian,Asian</h4>
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
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

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
