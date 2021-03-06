module.exports = function calcLayout(panelsAmount) {
  switch (parseInt(panelsAmount, 10)) {
    case 1:
      return [['100%', '100%', '0%', '0%']];
    case 2:
      return [['50%', '100%', '0%', '0%'], ['50%', '100%', '50%', '0%']];
    case 3:
      return [['50%', '50%', '0%', '0%'], ['50%', '50%', '50%', '0%'], ['100%', '50%', '0%', '50%']];
    case 4:
      return [['50%', '50%', '0%', '0%'], ['50%', '50%', '50%', '0%'], ['50%', '50%', '0%', '50%'], ['50%', '50%', '50%', '50%']];
    default:
      return [['50%', '50%', '0%', '0%'], ['50%', '50%', '50%', '0%'], ['100%', '50%', '0%', '50%']];
  }
};
