import firebase from 'firebase';
import { devConfig } from '../../Config/config';

var fire = firebase.initializeApp(devConfig);
export default fire;
