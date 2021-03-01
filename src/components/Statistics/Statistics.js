import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats, colors }) => {
  return (
    <>
      <section className={style.statistic}>
        {title && <h2 className={style.title}>Upoad stats</h2>}

        <ul className={style.statList}>
          {stats.map(el => {
            const { id, label, percentage } = el;
            return (
              <li
                className={style.item}
                key={id}
                style={{ backgroundColor: colors }}
              >
                <span className={style.label}>{label}</span>
                <span className={style.percentag}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: 'string',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
