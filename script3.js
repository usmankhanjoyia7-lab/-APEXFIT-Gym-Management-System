'use strict';

/* ── BMI CALCULATOR ── */
function calcBMI() {
  const h = parseFloat(document.getElementById('bmiHeight').value);
  const w = parseFloat(document.getElementById('bmiWeight').value);
  if (!h || !w || h < 100 || w < 30) { alert('Please enter valid height and weight.'); return; }
  const bmi = (w / Math.pow(h / 100, 2)).toFixed(1);
  let category, color;
  if (bmi < 18.5)      { category = 'Underweight — focus on lean muscle building'; color = '#7eb8ff'; }
  else if (bmi < 25)   { category = 'Healthy weight — maintain and build fitness'; color = 'var(--accent)'; }
  else if (bmi < 30)   { category = 'Overweight — fat loss program recommended'; color = '#ffb347'; }
  else                 { category = 'Obese — consult a trainer for a safe plan'; color = 'var(--accent2)'; }
  document.getElementById('bmiVal').textContent = bmi;
  document.getElementById('bmiVal').style.color = color;
  document.getElementById('bmiNote').textContent = category;
  document.getElementById('bmiResult').style.display = 'block';
}

/* ── CALORIE CALCULATOR ── */
function calcCalories() {
  const age = parseFloat(document.getElementById('calAge').value);
  const w   = parseFloat(document.getElementById('calWeight').value);
  const h   = parseFloat(document.getElementById('calHeight').value);
  const act = parseFloat(document.getElementById('calActivity').value);
  const sex = document.getElementById('calSex').value;
  if (!age || !w || !h) { alert('Please fill in all fields.'); return; }
  const bmr = sex === 'male'
    ? 10 * w + 6.25 * h - 5 * age + 5
    : 10 * w + 6.25 * h - 5 * age - 161;
  const tdee = Math.round(bmr * act);
  document.getElementById('calVal').textContent = tdee.toLocaleString() + ' kcal';
  document.getElementById('calNote').textContent =
    `Fat loss: ~${(tdee - 500).toLocaleString()} kcal/day · Muscle gain: ~${(tdee + 300).toLocaleString()} kcal/day`;
  document.getElementById('calResult').style.display = 'block';
}

/* ── FAQ TOGGLE ── */
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    item.classList.add('open');
    el.setAttribute('aria-expanded', 'true');
  }
}
