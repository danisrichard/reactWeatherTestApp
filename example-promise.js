function getTempCallBack (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

var a = 5;
var b = 3;

function getResult(a,b){
  console.log(a+b);
}

getResult(a,b);

getTempCallBack('Philadelphia', function (err, temp) {
  if(err) {
    console.log('error', err);
  }else {
    console.log('succes', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
      resolve(79);
      reject('City not found');
  });
}

getTempPromise('Philadelphia').then(function (temp){
  console.log('promisse succ',temp);
}, function (err){
  console.log('prmoisse err', err);
})
