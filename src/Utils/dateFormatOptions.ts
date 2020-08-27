const dateFormatOptions = new Intl.DateTimeFormat('pt-br', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const dateFormatWeekday = new Intl.DateTimeFormat('pt-br', {
  weekday: 'short',
});

export { dateFormatOptions, dateFormatWeekday };
