import './windowIncoming.css';
import functionIncoming from './incoming';

const body = document.querySelector('body');// console.log(body);
const titleDz = body.querySelector('h4');// console.log(titleDz);

const windowIncoming = document.createElement('div');
windowIncoming.id = 'windowIncoming';
titleDz.insertAdjacentElement('afterend', windowIncoming); // вставляем окно Incoming после titleDz
const windowInc = document.querySelector('#windowIncoming');// console.log(windowInc);

const titleWindowIncoming = document.createElement('div');
titleWindowIncoming.textContent = 'Incoming';
titleWindowIncoming.id = 'titleWindowIncoming';
windowInc.append(titleWindowIncoming);

const incomings = document.createElement('div');
incomings.id = 'incomings';
windowInc.append(incomings); // вставка в окно Incoming непрочитанных входящих

functionIncoming();
// const data = functionIncoming();
// console.log(data);

// const divMessages = document.querySelector('#incomings'); // console.log(divMessages);

// const message = document.createElement('div');
// message.classList.add('incoming');
// message.textContent = 'А здесь нужно что-то умное про сервер придумать!';

// divMessages.prepend(message);
