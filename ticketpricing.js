// Function to determine ticket price based on age using if-else
function getTicketPriceIfElse(age) {
    if (age <= 12) {
      return "$10";
    } else if (age >= 13 && age <= 17) {
      return "$15";
    } else if (age >= 18) {
      return "$20";
    } else {
      return "Invalid age";
    }
  }
  
  // Function to determine ticket price based on age using switch
  function getTicketPriceSwitch(age) {
    switch (true) {
      case age <= 12:
        return "$10";
      case age >= 13 && age <= 17:
        return "$15";
      case age >= 18:
        return "$20";
      default:
        return "Invalid age";
    }

    }