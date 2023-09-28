import RestaurantCard from "./ReastaurantCard";
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

export default Body;