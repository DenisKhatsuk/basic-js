module.exports = function repeater(str, options) {
    let resultStr = '';
    str = String(str);
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let separator = options.separator ? options.separator : '+';
    let addition = (options.addition !== undefined) ? String(options.addition) : '';
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    for (let i = 0; i < repeatTimes; i++) {
        resultStr += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
        	if (j !== additionRepeatTimes - 1 ) {
          	resultStr += addition+additionSeparator;
          } else {
          	resultStr += addition;
          }
        }
        if (i !== repeatTimes - 1 ) resultStr += separator;
    }
    return resultStr;
};
  