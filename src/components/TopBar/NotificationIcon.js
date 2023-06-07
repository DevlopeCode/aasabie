import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';

const NotificationIcon = () => {
  return (
    <Svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="17" cy="17" r="17" fill="#DFDFDF" />
      <Path
        d="M17 27.0002C15.8954 27.0002 15 26.1048 15 25.0002H19C19 26.1048 18.1046 27.0002 17 27.0002ZM25 24.0002H9V22.0002L11 21.0002V15.5002C10.9473 14.0893 11.2659 12.6894 11.924 11.4402C12.579 10.2817 13.6987 9.45911 15 9.18023V7.00023H18.646C17.3464 8.45266 17.1295 10.5766 18.1087 12.2618C19.0879 13.9469 21.0406 14.8102 22.946 14.4002C22.981 14.7572 22.998 15.1272 22.998 15.5002V21.0002L24.998 22.0002V24.0002H25ZM22 13.0002C20.4097 12.9978 19.0977 11.7548 19.0093 10.167C18.9209 8.57912 20.0869 7.19821 21.6671 7.01928C23.2473 6.84035 24.6926 7.92557 24.9615 9.49296C25.2304 11.0603 24.2295 12.5652 22.68 12.9232C22.457 12.9745 22.2288 13.0003 22 13.0002Z"
        fill="#656565"
      />
    </Svg>
  );
};

export default NotificationIcon;
