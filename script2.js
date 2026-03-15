'use strict';

/* ── SCHEDULE DATA (Bahawalpur APEXFIT) ── */
const scheduleData = {
  Monday: [
    { time:'06:00', cls:'Yoga', coach:'Hamza Khalid', dur:'60 min', seats:10, total:15, type:'yoga' },
    { time:'07:00', cls:'HIIT', coach:'Usman Tariq', dur:'45 min', seats:5, total:20, type:'hiit' },
    { time:'19:00', cls:'Strength Training', coach:'Ali Raza', dur:'60 min', seats:8, total:16, type:'strength' },
  ],
  Tuesday: [
    { time:'06:00', cls:'Cardio', coach:'Hamza Khalid', dur:'45 min', seats:12, total:20, type:'cardio' },
    { time:'07:00', cls:'Functional Training', coach:'Bilal Ahmed', dur:'50 min', seats:7, total:15, type:'strength' },
    { time:'19:00', cls:'Weight Training', coach:'Ali Raza', dur:'60 min', seats:4, total:12, type:'strength' },
  ],
  Wednesday: [
    { time:'06:00', cls:'Yoga', coach:'Hamza Khalid', dur:'60 min', seats:11, total:15, type:'yoga' },
    { time:'07:00', cls:'HIIT', coach:'Usman Tariq', dur:'45 min', seats:6, total:20, type:'hiit' },
    { time:'19:00', cls:'Strength Training', coach:'Bilal Ahmed', dur:'60 min', seats:9, total:16, type:'strength' },
  ],
  Thursday: [
    { time:'06:00', cls:'Cardio Blast', coach:'Hamza Khalid', dur:'45 min', seats:8, total:20, type:'cardio' },
    { time:'07:00', cls:'Core Workout', coach:'Usman Tariq', dur:'40 min', seats:3, total:15, type:'hiit' },
    { time:'19:00', cls:'Weight Training', coach:'Ali Raza', dur:'60 min', seats:10, total:16, type:'strength' },
  ],
  Friday: [
    { time:'06:00', cls:'Mobility Training', coach:'Hamza Khalid', dur:'60 min', seats:9, total:15, type:'yoga' },
    { time:'07:00', cls:'HIIT', coach:'Usman Tariq', dur:'45 min', seats:4, total:20, type:'hiit' },
    { time:'19:00', cls:'Strength Training', coach:'Bilal Ahmed', dur:'60 min', seats:7, total:16, type:'strength' },
  ],
  Saturday: [
    { time:'07:00', cls:'Full Body Workout', coach:'Bilal Ahmed', dur:'60 min', seats:6, total:20, type:'strength' },
    { time:'19:00', cls:'Cross Training', coach:'Usman Tariq', dur:'50 min', seats:10, total:18, type:'hiit' },
  ],
  Sunday: [
    { time:'—', cls:'Rest Day', coach:'—', dur:'—', seats:0, total:0, type:'rest' },
  ],
};

const dotClass = { hiit:'dot-hiit', yoga:'dot-yoga', strength:'dot-strength', cardio:'dot-cardio', rest:'dot-rest' };

function renderSchedule(day) {
  const data = scheduleData[day] || scheduleData.Monday;
  document.getElementById('scheduleBody').innerHTML = data.map(c => {
    if (c.type === 'rest') {
      return `<tr><td colspan="6" style="text-align:center; padding:3rem; color:var(--muted); font-size:.95rem;">🛌 Rest Day — Recovery is part of your training. See you Monday!</td></tr>`;
    }
    const pct = Math.round((c.seats / c.total) * 100);
    const low = pct < 30;
    return `<tr>
      <td style="font-family:var(--font-display);font-size:1.1rem;letter-spacing:.04em;">${c.time}</td>
      <td><span class="class-dot ${dotClass[c.type] || ''}" aria-hidden="true"></span>${c.cls}</td>
      <td style="color:var(--muted)">${c.coach}</td>
      <td style="color:var(--muted)">${c.dur}</td>
      <td><div class="seats-bar"><div class="seats-track"><div class="seats-fill ${low ? 'low' : ''}" style="width:${pct}%"></div></div><span>${c.seats} left</span></div></td>
      <td><button class="book-slot" onclick="bookClass('${c.cls}','${c.time}')">Book</button></td>
    </tr>`;
  }).join('');
}

function switchTab(btn) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  renderSchedule(btn.textContent.trim());
}

renderSchedule('Monday');

function bookClass(name, time) {
  openWhatsApp(`Hi, I want to book "${name}" class at ${time} at APEXFIT gym. Please confirm my spot.`);
}
