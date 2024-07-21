//write a function to age and return the year you were born using psuedocode.
//solution: define the function thus:
function birth_year(age) {
//hence, summon or invoke the current_year and input age respectively and, compute
//the birth year as follows:
let current_year = new Date().getFullYear();
  let birth_year = current_year - age;
  //therfore initialize birth_year,
  console.log(birth_year);
};
//given age is 30yrs, hence:
birth_year(30);
//conclusively, 1994 is therefore the birthyear.