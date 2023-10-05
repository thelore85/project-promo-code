/////////////////////////////////////////
// ------ my app - SERVER CONNECTION
////////////////////////////////////////

export let serverUrl;
const serverPort = 9000;  // use the same port of the server
const serverPath = '/project-promo-code' // place here your project path
const serverAdress = 'https://server-piqus.vercel.app';
const serverLive = `${serverAdress}${serverPath}`;
const serverLocal = `http://localhost:${serverPort}${serverPath}`


// server url builder
const  appEnv = process.env.NODE_ENV || 'development';

const serverUrlbuilder = () => {
  if(appEnv === 'development' ){
    serverUrl = serverLocal
  }else{
    serverUrl = serverLive
  }
};
serverUrlbuilder();
