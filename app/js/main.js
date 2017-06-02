import $ from 'jquery';
import mathAPI from './math/operations.js';

$(document).ready(function() {
  $(".myButton").click(function () {
  	var message = "5 + 3 = " 
  	              + mathAPI.add(5,3) 
  	              + ", 5 * 3 = "
  	              + mathAPI.multiply(5,3) 
  	              + ", Even in [1,2,3,4,5] are "
  	              + mathAPI.evenNums([1,2,3,4,5])
    
    alert(message);
  });
});