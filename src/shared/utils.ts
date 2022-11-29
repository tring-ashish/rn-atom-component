export const isObjectNonEmpty = (data: any): boolean => {
  return data && Object.keys(data).length > 0 ? true : false;
};

export const isNotEmpty = (value: any): boolean => {
  return typeof value === 'string' && value.trim().length > 0;
};

export const isNonEmptyArray = (data: any): boolean => {
  return data && Array.isArray(data) && data.length > 0;
};
