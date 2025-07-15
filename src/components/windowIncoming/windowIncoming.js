import './windowIncoming.css';
import functionIncoming from './incoming';

const body = document.querySelector('body');
const titleDz = body.querySelector('h4');

const windowIncoming = document.createElement('div');
windowIncoming.id = 'windowIncoming';
titleDz.insertAdjacentElement('afterend', windowIncoming);
const windowInc = document.querySelector('#windowIncoming');

const titleWindowIncoming = document.createElement('div');
titleWindowIncoming.textContent = 'Incoming';
titleWindowIncoming.id = 'titleWindowIncoming';
windowInc.append(titleWindowIncoming);

const incomings = document.createElement('div');
incomings.id = 'incomings';
windowInc.append(incomings); // вставка Incoming непрочитанных входящих

functionIncoming();
// const idIncomings = document.querySelector('#incomings').children;
// console.log(idIncomings);
// console.log(idIncomings.length);

// if (idIncomings.length === 0) {
//     return;
// } else {
//     idIncomings.length = 0;
// };

setInterval(functionIncoming, 5000);

// setTimeout(functionIncoming, 5000);

// setTimeout(functionIncoming, 10000);

// setTimeout(functionIncoming, 15000);

// // setInterval(incomingAdd, 5000);
