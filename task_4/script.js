"use strict";

(function (x, z) {
  let count = 0 + x - 1;
  let result = setInterval(function () {
    console.log(x);
    x++;
    count++;

    if (count === z) {
      clearInterval(result);
    }
  }, 1000, x, z);
}(5, 15));

