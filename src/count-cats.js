module.exports = function countCats(backyard) {
  let cat = '^^';
  let catsOnBackyard = 0;
  backyard.forEach(function(el) {
    el.forEach(function(creature){
      if (creature == cat) catsOnBackyard++;
    })
  });
  return catsOnBackyard;
};
