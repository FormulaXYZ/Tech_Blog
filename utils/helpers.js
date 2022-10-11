module.exports = {
  format_date: date => {


    return `${new Date().getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  },
};
