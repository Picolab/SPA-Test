const protocol = 'http';
const host =  'localhost';
const port = '3000';
const eci = 'Your ECI';

export const queryUrl = protocol + '://' + host + ':' + port + '/sky/cloud/' + eci + '/hello_world/hello?obj=Pico';