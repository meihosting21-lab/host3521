document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();

  const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const setTextForAll = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };

  setTextForAll('[data-current-year]', String(now.getFullYear()));
  setTextForAll('[data-current-month-year]', monthYearFormatter.format(now));
});
