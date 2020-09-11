import React, { Component, createContext } from 'react';
import CoinGecko from "coingecko-api";

const coinGeckoContext = createContext();
const coinGeckoClient = new CoinGecko();

class CoinGeckoProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            data: []
        }
    }

    async componentDidMount() {
        const data = await this.loadMarketData();
        this.setState({ loading: false, data })
    }
    
    loadMarketData = async () => {
        const params = {
            order: CoinGecko.ORDER.MARKET_CAP_DESC
        }
        const result = await coinGeckoClient.coins.markets({params});
        return result.data;
    }

    render() {
        return (
            <coinGeckoContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </coinGeckoContext.Provider>
        )
    }
}

export { coinGeckoContext, CoinGeckoProvider };
