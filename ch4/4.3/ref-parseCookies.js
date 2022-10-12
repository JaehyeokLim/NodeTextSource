cookie = "mycookie=first; yourcookie'='second";
a = cookie.split(';');
console.log('cookie.split : ', a);
b = a.map(v => v.split('='));
console.log('v.split : ', b);
c = b.reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
  }, {});
console.log('b.reduce : ', c);  