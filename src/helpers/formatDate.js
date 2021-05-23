const formatDate = (date) => {
  date = new Date(date);
  return `${date.getDate()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
};

export default formatDate;
