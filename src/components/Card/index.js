import React from 'react';
import { ErrorBoundary } from "../ErrorBoundary";

export function Card({ cardItems }) {
    console.log(cardItems)
    const cardList = cardItems.map((item) => {
        const changes24h = item.market_cap_change_percentage_24h;
        return (
            <section className='center card-layout' key={item.id}>
                <div className="center coin">
                    <span>{item.market_cap_rank}.</span>
                    <div className="image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <p>{item.symbol}</p>
                </div>
                <div className="center price">
                    <p>{`$${item.current_price}`}</p>
                </div>
                <div className="center marketCap">
                    <p>{`$${item.market_cap}`}</p>
                </div>
                <div className="center circulatingSupply">
                        <p>{`$${item.total_volume}`}</p>
                    </div>
                <div className="center changes24h">
                    <p className={changes24h > 0 ? 'green' : 'red'}>
                        {changes24h > 0 ? `+${changes24h}` : changes24h}
                    </p>
                </div>
            </section>
        )
    })
    return cardList;
}

export default ErrorBoundary(Card)
