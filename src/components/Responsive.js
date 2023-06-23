

import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

 export const wp = w => (width / 100) * w;

 export const hp = h => (height / 100) * h;