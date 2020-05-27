import { createGlobalStyle } from 'styled-components';

import ElaineSansMedium from './ElaineSansMedium.woff2';
import ElaineSansRegular from './ElaineSansRegular.woff2';
import ElaineSansBold from './ElaineSansSemiBold.woff2';
import ElaineSansExtraBold from './ElaineSansExtraBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'ElaineSansMedium';
        src: local('ElaineSansMedium'),
        url(${ElaineSansMedium}) format('woff2');
    }

    @font-face {
        font-family: 'ElaineSansRegular';
        src: local('ElaineSansRegular'),
        url(${ElaineSansRegular}) format('woff2');
    }

    @font-face {
        font-family: 'ElaineSansBold';
        src: local('ElaineSansBold'),
        url(${ElaineSansBold}) format('woff2');
    }

    @font-face {
        font-family: 'ElaineSansExtraBold';
        src: local('ElaineSansExtraBold'),
        url(${ElaineSansExtraBold}) format('woff2');
    }

    margin: 0;
`;