/** Add any JavaScript you need to this file. */
showOrderNum();
hideOrderNum();
function showOrderNum() {
    var i = document.getElementById('orderNum');
    if (i.style.display === 'none'){
        i.style.display = 'block';
    }else{
        i.style.display = 'none';
    }
}
function hideOrderNum() {
    var i = document.getElementById('orderNum');
    i.style.display = 'none';
}