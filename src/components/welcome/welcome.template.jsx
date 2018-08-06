import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './welcome.styles.scss';

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Loader
          type="Rings"
          color={this.props.color}
          width="100"
          height="100"
        />
      </div>
      <div className={styles.message}>{this.getMessage()}</div>
    </div>
  );
}
