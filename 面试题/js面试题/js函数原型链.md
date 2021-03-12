<!-- 1.js原型链 -->
网上有一道美团外卖的面试题是这样的：  Function.prototype.a = 'a';
Object.prototype.b = 'b';
function Person(){};
var p = new Person();
console.log('p.a: '+ p.a); // p.a: undefined
console.log('p.b: '+ p.b); // p.b: b  问为什么？

有不少同学第一眼看上去就觉得很疑惑，p不是应该继承了Function原型里面的属性吗，为什么p.a返回值是undefined呢？
其实，只要仔细想一想就很容易明白了，Person函数才是Function对象的一个实例，所以通过Person.a可以访问到Function
原型里面的属性，但是new Person()返回来的是一个对象，它是Object的一个实例,是没有继承Function的，所以无法访问
Function原型里面的属性。但是,由于在js里面所有对象都是Object的实例，所以，Person函数可以访问到Object原型里面的
属性，Person.b => 'b'

<!-- 2.Date.now() 返回的是一个毫秒数 -->


<!-- 3.ES5  数组的map方法会将空位视为undefined
orEach(), filter(), reduce(), every() 和some()都会跳过空位。
map()会跳过空位，但会保留这个值
join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
ES6 中都会将空位当做undefined -->



<!-- 不支持冒泡：妈（mouseenter）妈(mouseleave)不(blur)放(focus)心你(load,unload,resize) -->




