function minDate(dates) {
   //write you code here
    return minDateFinder(dates,0);
 }
 function minDateFinder(dates,i) {
   let minDay1 = new Date(dates[0]);
   let day2 = new Date(dates[i+1])
    //base condition
    if (i>dates.length) {
     // console.log("ramraj",i);
       return minDay1;
    }
    if (minDay1>day2) {
       minDay1= new Date(dates[i+1]);
       return minDateFinder(dates,i+1);
    }
    else{
      //console.log("saini",i);
       return minDateFinder(dates,i+1);
    }
    return minDay1;
 }
 
 // Do not change the date;
 
 var dates = [
   "2023/03/01",
   "2023/03/02",
   "2023/03/03",
   "2023/03/04",
   "2023/03/05",
   "2023/03/06",
   "2023/03/07",
   "2023/03/08",
   "2023/03/09",
   "2023/03/10",
   "2023/03/11",
   "2023/03/12",
   "2023/03/13",
   "2023/03/14",
   "2023/03/15",
   "2023/03/16",
   "2023/03/17",
   "2023/03/18",
   "2023/03/19",
   "2023/03/20",
   "2023/03/21",
   "2023/03/22",
   "2023/03/23",
   "2023/03/24",
   "2023/03/25",
   "2023/03/26",
   "2023/03/27",
   "2023/03/28",
   "2023/03/29",
   "2023/03/30",
 ]; 
 
 alert(minDate(dates));
 