import incomingData from './incomingData';

export default function incoming() {
  fetch('http://localhost:7070/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Ошибка загрузки данных: ${response.status}`);
    })
    .then((data) => {
      // Обработка полученных данных пользователя
      incomingData(data);
    })
    .catch((error) => {
      console.log('Ошибка:', error);
    });
}
