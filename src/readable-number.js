/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 1.0.0
*
*/

// ReadNumber Function to make number readable
var readNumber = function (val) {

  // Prevent falling in undefined value
	if(val === '' || val === undefined || val === NaN ) return 0;

  // if there's a truthy number..
  if(val){

    // If the number is string..
    if(typeof val == 'string') {
      val = val.replace(/^0/ig,''); // Remove first "0"
      val = val.replace(/\D/ig,''); // Remove Non digit Char
      val = val.replace(/\W/ig,''); // Remove Non Word Char
    }

    // Make a Regex
    var re = /\d{1,3}/g; // grouping each 3 digit
    var target = val.toString();
    var matchy;

    // make an array for matchy string
    var arr = [];
    while((matchy = re.exec(target)) !== null){
      arr.push(matchy[0].length);
    }

    // Convert String to Array
    var string = target.split('');

    // Add a comma every three digit from back
    arr.splice(arr.length-1); // remove buggy first comma
    for (var i = 0; i < arr.length; i++) {
			var time = arr[i];
      var position = i*(time+1);
      string.splice(string.length-position-time,0,',');
		}

    // join Array
    return string.join('');
  }

  // Prevent falling in undefined value
  return val;
};

var unReadNumber = function (val) {

  // Prevent falling in undefined value
	if(val === '' || val === undefined || val === NaN ) return 0;

  // make sure the val is string
  if(typeof val == 'string') {
    // remove non Word Character
    val = val.replace(/\W/ig,'');
  }
  // Make sure it return a real integer
  return parseFloat(val);
};

export default {
  read: readNumber,
  write: unReadNumber
};
