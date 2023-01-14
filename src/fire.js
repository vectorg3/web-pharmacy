import firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyCqqh65W35MZseDxHH7y3Y9B_XFETl11uo',
    authDomain: 'web-pharmacy-1dec8.firebaseapp.com',
    databaseURL: 'https://web-pharmacy-1dec8-default-rtdb.firebaseio.com',
    projectId: 'web-pharmacy-1dec8',
    storageBucket: 'web-pharmacy-1dec8.appspot.com',
    messagingSenderId: '456955040006',
    appId: '1:456955040006:web:1126ee8b22e56c4e418e87',
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
