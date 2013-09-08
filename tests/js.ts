testJS([
  'class Foo {',
  '  int x = 0;',
  '}',
  '',
  'class Bar : Foo {',
  '  int y = 0;',
  '}',
  '',
  'Foo foo() {',
  '  Foo x;',
  '  Foo y;',
  '  Bar z;',
  '  x = y;',
  '  x = new Foo();',
  '  z = new Bar();',
  '  return x;',
  '}',
], [
  'function __extends(d, b) {',
  '  function c() {',
  '  }',
  '  c.prototype = b.prototype;',
  '  d.prototype = new c();',
  '  d.prototype.constructor = d;',
  '}',
  'function Foo() {',
  '  this.x = 0;',
  '}',
  'function Foo$copy($this) {',
  '  this.x = $this.x;',
  '}',
  'Foo$copy.prototype = Foo.prototype;',
  'function Bar() {',
  '  Foo.call(this);',
  '  this.y = 0;',
  '}',
  '__extends(Bar, Foo);',
  'function Bar$copy($this) {',
  '  Foo$copy.call(this, $this);',
  '  this.y = $this.y;',
  '}',
  'Bar$copy.prototype = Bar.prototype;',
  'function foo() {',
  '  var x = new Foo();',
  '  var y = new Foo();',
  '  var z = new Bar();',
  '  Foo$copy.call(x, y);',
  '  Foo.call(x);',
  '  Bar.call(z);',
  '  return new Foo$copy(x);',
  '}',
]);

testJS([
  'class Foo {',
  '  Bar bar;',
  '}',
  '',
  'class Bar {',
  '}',
  '',
  'void foo(Bar bar) {',
  '}',
  '',
  'Bar bar;',
  'owned Bar ownedBar;',
  '',
  'ref Bar getBar() {',
  '  return bar;',
  '}',
  '',
  'owned Bar createBar() {',
  '  return new Bar();',
  '}',
  '',
  'Bar main() {',
  '  foo(bar);',
  '  foo(ownedBar);',
  '  foo(getBar());',
  '  foo(new Bar());',
  '  foo(createBar());',
  '  new Foo(bar);',
  '  new Foo(ownedBar);',
  '  new Foo(getBar());',
  '  new Foo(new Bar());',
  '  new Foo(createBar());',
  '  bar = bar;',
  '  bar = ownedBar;',
  '  bar = getBar();',
  '  bar = new Bar();',
  '  bar = createBar();',
  '  return bar;',
  '  return ownedBar;',
  '  return getBar();',
  '  return new Bar();',
  '  return createBar();',
  '}',
], [
  'function Foo(bar) {',
  '  this.bar = bar;',
  '}',
  'function Foo$copy($this) {',
  '  this.bar = $this.bar;',
  '}',
  'Foo$copy.prototype = Foo.prototype;',
  'function Bar() {',
  '}',
  'function Bar$copy($this) {',
  '}',
  'Bar$copy.prototype = Bar.prototype;',
  'var bar = new Bar();',
  'var ownedBar = null;',
  'function foo(bar) {',
  '}',
  'function getBar() {',
  '  return bar;',
  '}',
  'function createBar() {',
  '  return new Bar();',
  '}',
  'function main() {',
  '  foo(new Bar$copy(bar));',
  '  foo(new Bar$copy(ownedBar));',
  '  foo(new Bar$copy(getBar()));',
  '  foo(new Bar$copy(new Bar()));',
  '  foo(new Bar$copy(createBar()));',
  '  new Foo(new Bar$copy(bar));',
  '  new Foo(new Bar$copy(ownedBar));',
  '  new Foo(new Bar$copy(getBar()));',
  '  new Foo(new Bar$copy(new Bar()));',
  '  new Foo(new Bar$copy(createBar()));',
  '  Bar$copy.call(bar, bar);',
  '  Bar$copy.call(bar, ownedBar);',
  '  Bar$copy.call(bar, getBar());',
  '  Bar.call(bar);',
  '  Bar$copy.call(bar, createBar());',
  '  return new Bar$copy(bar);',
  '  return new Bar$copy(ownedBar);',
  '  return new Bar$copy(getBar());',
  '  return new Bar$copy(new Bar());',
  '  return new Bar$copy(createBar());',
  '}',
]);
