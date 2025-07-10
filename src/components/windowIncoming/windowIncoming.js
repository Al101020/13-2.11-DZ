import './windowIncoming.css';
import functionIncoming from './incoming';

const body = document.querySelector('body');
console.log(body);

const titleDz = body.querySelector('h4');
console.log(titleDz);

const windowIncoming = document.createElement('div');
windowIncoming.id = 'windowIncoming';

titleDz.insertAdjacentElement('afterend', windowIncoming); // вставляем окно Incoming после titleDz

const windowInc = document.querySelector('#windowIncoming');
console.log(windowInc);

const titleWindowIncoming = document.createElement('div');
titleWindowIncoming.textContent = 'Incoming';
titleWindowIncoming.id = 'titleWindowIncoming';
windowInc.append(titleWindowIncoming);

const incoming_ = document.createElement('div');
incoming_.id = 'incoming';
windowInc.append(incoming_);

functionIncoming();
