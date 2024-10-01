import { ListItemBeds, ListItemSleeps, ListItemSquare } from "./components";

export default function SpecialOffersCard(){
    return(
        <div className="special-offers-card">
            <div className="special-offers-card__container-img"> 
                <img 
                    className="special-offers-card__img" 
                    src={new URL("../../img/room9.png", import.meta.url).href}
                    alt="Room image" />
                    <div className="special-offers-card__rating">
                        <img src={new URL("../../img/icon_star1.svg", import.meta.url).href} alt="Icon star" />
                        <p>4.8</p>
                    </div>
                    <button className="special-offers-card__add-to-favorite-conteiner">
                        <img src={new URL("../../img/icon_heart.svg", import.meta.url).href} alt="" />
                    </button>
            </div>
            <p className="special-offers-card__title">Wilderness Club at Big Ceddar</p> 
            <p className="special-offers-card__description-room">2 Bedroom Combined Lodge</p> 
            <time className="special-offers-card__date" >28 October — 1 November</time>
            <p className="special-offers-card__price">$2016<span>/6 night</span></p> 
            <div className="special-offers-card__details-conteiner">
                <ul className="special-offers-card__details-list">
                    <ListItemBeds>4 Beds</ListItemBeds>
                    <ListItemSleeps>8 Sleeps</ListItemSleeps>
                    <ListItemSquare>1,350 Sq Ft</ListItemSquare>
                </ul>
            </div>
        </div>

    )
}