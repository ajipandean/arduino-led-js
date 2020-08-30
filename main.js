const Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: {adaptor: 'firmata', port: '/dev/ttyACM0'},
  },
  devices: {
    led: {driver: 'led', pin: 13},
  },
  work(my) {
    every((5).seconds(), my.led.toggle);
  },
}).start();
