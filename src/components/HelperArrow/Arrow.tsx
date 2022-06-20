import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Path, PathProps} from 'react-native-svg';
import useDesign from '../../hooks/useDesign';

const Arrow = Animated.createAnimatedComponent(Path);

const SIZE = {height: 50.0, width: 70.0};
const VIEW_BOX = '0 0 24 24';
const PATH = `
M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z
`;

const AnimatedArrow: FC<
  Partial<Animated.AnimateProps<PathProps>> | undefined
> = ({animatedProps = {}}) => {
  const {color} = useDesign();
  return (
    <Svg
      style={{transform: [{rotate: '90deg'}]}}
      width={SIZE.width}
      height={SIZE.height}
      viewBox={VIEW_BOX}>
      <Arrow
        animatedProps={animatedProps}
        d={PATH}
        fillRule="evenodd"
        fill={color}
      />
    </Svg>
  );
};

export default AnimatedArrow;
