function put(x,y,n) {
    let el = x.find(val => val.id == n)
    let i = x.findIndex(val => val.id == n)
    x.splice(i, 1)
    el.id = (y.length)+1
    y.push(el)
}

function putAllList(x, y, n) {
    n = x.length;
    y.forEach(val => {
      n++;
      val.id = n;
    })
    x = [...y, ...x]
    y = [] 
}
export {put,putAllList}