import { memo, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import styles from './index.module.less';

mapboxgl.accessToken =
  'pk.eyJ1IjoibHh5c3IiLCJhIjoiY2tybGdlenlsNW0xMjJwcGQ5NXd2MHZlNiJ9.4ox1726lHwqB_49MkfFrJg';
export default memo(() => {
  useEffect(() => {
    new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/lxysr/cky9ybgzk1i7d14p9rzonr4dg', // style URL
      center: [117.5738, 30.6982], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }, []);

  return <div id="map" className={styles.container} />;
});
