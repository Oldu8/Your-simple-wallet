import React, { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { connect } from "react-redux";
import { downloadCoins, removeCoins } from "../../redux/actions";
import s from "./ListOfCoins.module.scss";
import classNames from "classnames";
import getCoins from "../getCoins";

const ListOfCoins = ({ topCoins, downloadCoins, removeCoins }) => {
  const handleClick = async () => {
    const result = await getCoins();
    downloadCoins(result);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <section className={s.wrap}>
      <div className={s.header}>List of coins:</div>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={classNames(s.heading, s.rank)}>Rank</th>
            <th className={s.heading}>Name</th>
            <th className={s.heading}>Price</th>
            <th className={s.heading}>Market Cap</th>
          </tr>
        </thead>
        {topCoins.map((coin) => (
          <ItemList item={coin} key={coin.symbol} />
        ))}
        <ItemList />
      </table>
    </section>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    topCoins: state.coins.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return { downloadCoins: (data) => dispatch(downloadCoins(data)) };
  return {
    downloadCoins: (data) => {
      dispatch({ type: "DOWNLOAD_COINS", payload: data });
    },
    removeCoins: () => {
      dispatch(removeCoins());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);
