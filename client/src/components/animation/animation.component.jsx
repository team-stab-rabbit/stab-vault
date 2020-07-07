// UncontrolledLottie.jsx
import React from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import animations from './animation.data';

const Animation = ({ animationName, play = true, link = null }) => {
  const history = useHistory();

  const animation = animations[animationName];

  if (animation === undefined) {
    console.error(`Error: ${animationName} is not a valid animation name`);
    return null;
  }

  const options = {
    loop: false,
    autoplay: play,
    animationData: animation.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Will transition to link when animation is complete
  if (play && link) {
    setTimeout(() => {
      history.push(link);
    }, animation.time);
  }

  return <Lottie options={options} isClickToPauseDisabled isStopped={!play} />;
};

export default Animation;
