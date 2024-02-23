const formatPhoneNumber = (phoneNumber: string | number) => {
  const cleaned = `${phoneNumber}`.replace(/\D/g, '');

  const formatted = cleaned.replace(/(\d{3})(\d{1,4})?(\d{0,4})?/, function (_, p1, p2, p3) {
    const first = p1 || '';
    const second = p2 ? `-${p2}` : '';
    const third = p3 ? `-${p3}` : '';

    return first + second + third;
  });

  return formatted;
};

export default formatPhoneNumber;
