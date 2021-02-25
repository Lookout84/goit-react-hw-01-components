import React from "react";
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={style.statistic}>
        {title && <h2 className={style.title}>Upoad stats</h2>}

        <ul className={style.statList}>
          {stats.map((el) => {
            const { id, label, percentage } = el;
            return (
              <li className={style.item} key={id}>
                <span className={style.label}>{label}</span>
                <span className={style.percentag}>{percentage}</span>
              </li>
            );
          })}
          {/* <li className={style.item}>
            <span className={style.label}>.dcx</span>
            <span className={style.percentag}>4%</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>.m3</span>
            <span className={style.percentag}>14%</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>.pf</span>
            <span className={style.percentag}>41%</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>.m4</span>
            <span className={style.percentag}>12%</span>
          </li> */}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: "string",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentag: PropTypes.number.isRequired,
    })
  ),
};
