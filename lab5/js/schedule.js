async function loadSchedule() {
  try {
    const res = await fetch('http://localhost:3000/schedule');
    if (!res.ok) throw new Error('Ошибка сервера');
    const data = await res.json();
    const tbody = document.querySelector('#scheduleTable tbody');
    tbody.innerHTML = '';
    data.forEach(item => {
      const row = `<tr>
        <td>${item.day}</td>
        <td>${item.time}</td>
        <td>${item.topic}</td>
      </tr>`;
      tbody.insertAdjacentHTML('beforeend', row);
    });
  } catch (err) {
    console.error(err);
  }
}

loadSchedule();
setInterval(loadSchedule, 5 * 60 * 1000);
