import React from "react";
import { CoinRow } from "./CoinRow";

const title = ["#", "Coin", "Price", "Price change", "24H Volume"];

export function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {title.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
