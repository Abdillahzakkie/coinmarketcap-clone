import React, { useContext } from 'react';
import { coinGeckoContext } from "../Context";
import Card from "../Card";
import { ErrorBoundary } from "../ErrorBoundary";
import { Loading } from "../Loading";
import './Styles/index.css'

function Home() {
    const coinGeckoConsumer = useContext(coinGeckoContext);
    const { loading, data } = coinGeckoConsumer;

    if(loading) return <Loading />;

    return (
        <div className='center home'>
            <header className="center">
                <h1>Coinmarketcap clone</h1>
            </header>
            <div className="center container">
                <section className='center card-layout header'>
                    <div className="center coin">
                        <h3>coin</h3>
                    </div>
                    <div className="center price">
                        <h3>price ($)</h3>
                    </div>
                    <div className="center marketCap">
                        <h3>market capacity</h3>
                    </div>
                    <div className="center circulatingSupply">
                        <h3>circulating supply</h3>
                    </div>
                    <div className="center changes24h">
                        <h3>24H changes</h3>
                    </div>
                </section>
                <Card cardItems={data} />
            </div>
        </div>
    )
}

export default ErrorBoundary(Home)
