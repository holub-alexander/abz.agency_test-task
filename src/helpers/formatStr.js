const formatStr = (str = '', strLength = 1) => {
  return str.length > strLength ? `${str.slice(0, strLength)}...` : str;
};

export default formatStr;
