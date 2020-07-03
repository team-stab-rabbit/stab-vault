// UncontrolledLottie.jsx
import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/drive.json';

import styles from './drive-animation.style.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const DriveAnimation = () => (
  <div className={styles.Animation}>
    <Lottie options={defaultOptions} isClickToPauseDisabled />
  </div>
);

export default DriveAnimation;
