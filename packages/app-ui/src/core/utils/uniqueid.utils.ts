let lastId = 0;

export const simpleID = (prefix = "id") => {
  lastId++;
  return `${prefix}${lastId}`;
};

export default simpleID;
