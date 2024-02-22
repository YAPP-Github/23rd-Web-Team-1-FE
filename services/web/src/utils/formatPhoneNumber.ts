const formatPhoneNumber = (phoneNumber: string | number) => {
  const cleaned = `${phoneNumber}`.replace(/\D/g, '');
  const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

  return formatted;
};

export default formatPhoneNumber;
