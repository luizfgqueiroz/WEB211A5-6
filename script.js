/** Add any JavaScript you need to this file. */
displayOrderNum();
displayOrderNum2();
function displayOrderNum() {
  var x = document.getElementById('orderNum');
  if (x.style.display === 'none') x.style.display = 'block';
  else x.style.display = 'none';
}
function displayOrderNum2() {
  var x = document.getElementById('orderNum');
  x.style.display = 'none';
}