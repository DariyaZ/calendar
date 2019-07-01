'use strict';

function createCalendar(id, year, month) {
  let container = document.getElementById(id);

  let table = document.createElement('table');
  table.setAttribute('class', 'calendar_table');

  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let date = new Date(year, month - 1, 1); 
  let weekDay = days[date.getDay()];

  let daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
  console.log(daysInMonth);

  let number  = 0;

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let caption = document.createElement('caption');
  caption.setAttribute('class', 'table_caption');
  caption.innerHTML = monthNames[date.getMonth()] + ' ' + year;
  table.appendChild(caption);

  for (let i = 0; i < 6; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        let th = document.createElement('th');
        th.setAttribute('class', 'table_heading');
        tr.appendChild(th);
        th.innerHTML = days[j];
        if (weekDay === days[j]) {
          number = j;
          number = (number === 0) ? 6 : j-1; 
        }
      }
      else tr.appendChild(document.createElement('td'));
    }
  }
  
  container.appendChild(table);
  
  let tableData = table.getElementsByTagName('td');
  let k = 1; 
  for (let i = number; i < daysInMonth + number; i++) {
    tableData[i].innerHTML = k;
    tableData[i].setAttribute('class', 'daysCells');
    k++;
  }
}

createCalendar("cal", 2019, 7);