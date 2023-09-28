const RestaurantCard = ({resName,cuisine}) => {
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className='res-logo'
            alt='res-logo'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wvtjgktp63tkodu2s9k6"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;