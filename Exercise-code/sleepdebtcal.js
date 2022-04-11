//can sort like thie const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
const getSleepHours = day => {
    switch(day){
      case "monday":
        return 6;
        break;
      case "tuesday":
        return 6;
        break;
      case "wednesday":
        return 7;
        break;
      case "thursday":
        return 8;
        break;
      case "friday":
        return 5;
        break;
      case "saturday":
        return 9;
        break;
      case "sunday":
        return 9;
        break;                                    
    }    
  };
  
  const getActualSleepHours = () => {
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log("user got the perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours) {
      console.log("user got more sleep than needed.")
    } else {
      console.log("You got " + (idealSleepHours - actualSleepHours) + "hour(s) less sleep than you needed this week. Get some rest.");
    };
  };
  
  calculateSleepDebt()