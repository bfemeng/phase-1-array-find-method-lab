
 superbowlWin = (record) => {
  const result = record.find((record) => record.result === "W"); 
  return !!result ? result.year : undefined;
  //if(result){
 //  return result.year
 // } else {
  //  return undefined 
 // }
}

//record.find(superbowlWin);

//Array.find(record).year