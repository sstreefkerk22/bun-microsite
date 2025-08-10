import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.customNavbar}>
      <OriginalNavbar {...props} />
    </div>
  );
}
