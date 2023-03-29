function MyBtn() {
let sName=  document.getElementById('fName').value;
document.getElementById('Btn').style.display='none';
document.getElementById('SubTopic').style.color='red';
document.getElementById('SubTopic').innerHTML=sName;
  alert('your name '+sName+' is a good name!')
}
