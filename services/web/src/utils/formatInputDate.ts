const formatInputDate = (date: number | string) => {
  const cleaned = String(date).replace(/[^\d]/g, '');

  let formatted = cleaned.replace(/(\d{4})(\d{2})?(\d{0,2})?/, function (_, p1, p2, p3) {
    const year = p1 || '';
    const month = p2 ? `. ${p2}` : '';
    const day = p3 ? `. ${p3}` : '';

    return year + month + day;
  });

  formatted = formatted.slice(0, 12);

  return formatted;
};

export default formatInputDate;
