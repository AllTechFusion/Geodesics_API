module.exports = function checkNull(data) {
  // console.log("inside utility checkNull", data)
   if (data == null || data == undefined || data == "") return true
   else return false
}


module.exports = function checkDateWithToday(date) {
   //console.log("inside utility checkDateWithToday", date)
   if (new Date(date).getDay() === new Date().getDay() && new Date(date).getFullYear() === new Date().getFullYear() && new Date(date).getMonth() === new Date().getMonth()) return true
   else return false
} 
