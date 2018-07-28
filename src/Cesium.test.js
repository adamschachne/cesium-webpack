import { Viewer, Billboard, Cartesian3, Color } from 'cesium';

it('Cesium imports correctly', () => {
  const cart3 = Cartesian3.fromDegreesArray([12.3252112, -10.5385782]);
  expect(cart3).toMatchObject([{
    x: 6126711.249064009,
    y: 1338663.3796799656,
    z: -1158865.942843365
  }]);
});
