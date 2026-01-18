document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();

  const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const monthYear = monthYearFormatter.format(now);
  const year = String(now.getFullYear());

  const setTextForAll = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };

  setTextForAll('[data-current-year]', year);
  setTextForAll('[data-current-month-year]', monthYear);

  const legacyDate = document.getElementById('date');
  if (legacyDate) legacyDate.textContent = monthYear;

  const legacyYear = document.getElementById('year');
  if (legacyYear) legacyYear.textContent = year;
});
