/*
 *
 *@author:lichuan
 *@date:2019-10-16
 * */

/**
 * 毫秒数转化为Date类型yyyy-mm-dd hh
 * @returns
 */
function  gettime(){
	var date = new Date();
	var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var datetime = y + '-' + m + '-' + d+' '+h+':'+minute
    return datetime;
}
 
function getMonth(date){ 
	  var month = ""; 
	  month = date.getMonth() + 1; //getMonth()得到的月份是0-11 
	  if(month<10){ 
	    month = "0" + month; 
	  } 
	  return month; 
	} 
	//返回01-30的日期 
	function getDay(date){ 
	  var day = ""; 
	  day = date.getDate(); 
	  if(day<10){ 
	    day = "0" + day; 
	  } 
	  return day; 
	}
	//返回小时
	function getHours(date){
	  var hours = "";
	  hours = date.getHours();
	  if(hours<10){ 
	    hours = "0" + hours; 
	  } 
	  return hours; 
	}
	//返回分
	function getMinutes(date){
	  var minute = "";
	  minute = date.getMinutes();
	  if(minute<10){ 
	    minute = "0" + minute; 
	  } 
	  return minute; 
	}
	//返回秒
	function getSeconds(date){
	  var second = "";
	  second = date.getSeconds();
	  if(second<10){ 
	    second = "0" + second; 
	  } 
	  return second; 
	}
 
	/**
	 * 把数据long改为时分秒时间
	 * @param longTypeDate
	 * @returns
	 */
	function datetimeFormat_2(longTypeDate){ 
		if(longTypeDate == undefined || longTypeDate == null){
			return "不详";
		}
		  var datetimeType = ""; 
		  var date = new Date(); 
		  date.setTime(longTypeDate);
		  datetimeType = date.getFullYear()+"-"+getMonth(date)+"-"+getDay(date)/*+" "+getHours(date)+":"+getMinutes(date)+":"+getSeconds(date)*/;//yyyy-MM-dd 00:00:00格式日期
		  return datetimeType;
	}