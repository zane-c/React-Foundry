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
      <div className={styles.message}>React Foundry</div>
      <br />
      <a
        className="btn btn-danger"
        href="https://github.com/zane-c/React-Foundry/blob/develop/README.md"
        rel="noopener noreferrer"
        target="_blank">
        View Docs
      </a>
    </div>
  );
}
