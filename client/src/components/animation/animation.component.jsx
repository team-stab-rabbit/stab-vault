// UncontrolledLottie.jsx
import React from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import loggedInAllPathsAnimation from '../../assets/logged-in-all.json';
import loggedInForgeAnimation from '../../assets/logged-in-forge.json';
import notLoggedInAllPathsAnimation from '../../assets/not-logged-drive.json';
import pathEditorIntroAnimation from '../../assets/path-editor-intro.json';

const animations = {
  loggedInAllPaths: {
    animationData: loggedInAllPathsAnimation,
    time: 2020,
  },
  loggedInForge: {
    animationData: loggedInForgeAnimation,
    time: 2630,
  },
  notLoggedInAllPaths: {
    animationData: notLoggedInAllPathsAnimation,
    time: 10000,
  },
  pathEditorIntro: {
    animationData: pathEditorIntroAnimation,
    time: 10000,
  },
};

const Animation = ({ animationName, play = true, link = null }) => {
  const history = useHistory();

  const animation = animations[animationName];

  console.log(play);

  if (animation === undefined) {
    console.error(`Error: ${animationName} is not a valid animation name`);
    return null;
  }

  const defaultOptions = {
    loop: false,
    autoplay: play,
    animationData: animation.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (play && link) {
    setTimeout(() => {
      history.push(link);
    }, animation.time);
  }

  return <Lottie options={defaultOptions} isClickToPauseDisabled />;
};

export default Animation;
