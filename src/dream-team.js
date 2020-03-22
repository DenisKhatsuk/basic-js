module.exports = function createDreamTeam(members) {
  let bandMembers= [];
  let bandName = '';
  if (!Array.isArray(members)) return false;
  members.forEach(function(el) {
    if (typeof el == 'string') {
      bandMembers.push(el.trim().slice(0, 1).toUpperCase());
    }
  });
  bandMembers.sort();
  bandMembers.forEach(function(el) {
  	bandName += el; 
  })
	return bandName;
};