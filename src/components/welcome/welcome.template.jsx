import React from 'react';
import Loader from 'halogen/ringloader';
import styles from './welcome.styles.scss';

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Loader size={'40'} color={this.props.color} />
      </div>
      <div className={styles.message}>{this.getMessage()}</div>
    </div>
  );
}
