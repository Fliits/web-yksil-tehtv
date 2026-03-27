"use strict";
const filterRows = (rows, selectedCompany) => {
  const companyRestaurants = rows.filter(
    (row) => row.company === selectedCompany,
  );
  return companyRestaurants;
};
export default filterRows;
