var oneHeight = 250, // размер одного элемента
  numImage = 5; // количество элементов
function LetsGo() {
  var x = [];
  for (var i in {
    fruitBlockImg_1,
    fruitBlockImg_2,
    fruitBlockImg_3,
    fruitBlockImg_4,
    fruitBlockImg_5
  }) {
    x.push({
      a: document.getElementById(i), // this - это HTML контрол с классом XXX
      speed: 30 + Math.floor(Math.random() * 20), // скорость
      scr: Math.floor(Math.random() * oneHeight * numImage) // начальное положение
    });
  }
  var interval = setInterval(function() {
    var i = x.length,
      complete = true;
    while (i--) {
      var a = x[i];
      a.scr += a.speed;
      if (a.speed > 0) {
        a.speed -= 0.2;
        complete = false;
      }
      if (a.scr > oneHeight * numImage) a.scr -= oneHeight * numImage;
      a.a.scrollTop = Math.floor(a.scr);
    }
    if (complete) clearInterval(interval);
  }, 20);
}
