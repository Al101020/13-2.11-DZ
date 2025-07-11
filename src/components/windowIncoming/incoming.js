export default function incoming() {
  const divMessages = document.querySelector('#incomings'); // console.log(divMessages);

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
      console.log('Данные: ', data);

      for (let i = 0; i <= data.length; i += 1) {
        console.log(data[i]);
      }
      const message = document.createElement('div');
      message.classList.add('incoming');
      message.textContent = 'А здесь нужно что-то умное про сервер придумать!';

      divMessages.prepend(message);
    })
    .catch((error) => {
      console.log('Ошибка:', error);
    });
}
