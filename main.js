// telephone number validator 

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


// SOLUTION


function telephoneCheck(str) {
  // define several regular expression that matches a US phone number
  const regex1 = /^(1\s)?\d{3}-\d{3}-\d{4}$/
  const regex2 = /^(1(\s)?)?\(\d{3}\)(\s)?\d{3}-\d{4}$/
  
  const regex3 = /^(1\s)?\d{3}\s\d{3}\s\d{4}$/  // stuff in the bracket is optional / meaning it can be there or not.
  const regex4 = /^\d{10}$/// string must only begin and end with that pattern. why add this (^ and $).
  
  
  
 
   
   const regexes = [regex1, regex2, regex3, regex4]

  //loop through all regexes 
  for (let regex of regexes){
    //if one of them matches the phone number
    if (regex.test(str)){
      return true;
    }

  }
  

  // if none match return false
  return false
}

console.log(telephoneCheck("1 555 555 5555"));
