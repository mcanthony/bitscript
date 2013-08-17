// ////////////////////////////////////////////////////////////////////////////////
// // Owned
// ////////////////////////////////////////////////////////////////////////////////

// test([
//   'struct Foo {}',
//   'Foo foo = new Foo();',
// ], [
//   'error on line 2 of <stdin>: cannot convert from value of type owned Foo to value of type Foo',
//   '',
//   'Foo foo = new Foo();',
//   '          ~~~~~~~~~',
// ]);

// test([
//   'struct Foo {}',
//   'owned Foo foo = new Foo();',
// ], [
// ]);

// ////////////////////////////////////////////////////////////////////////////////
// // Shared
// ////////////////////////////////////////////////////////////////////////////////

// test([
//   'struct Foo {}',
//   'shared Foo foo = new Foo();',
// ], [
// ]);

// ////////////////////////////////////////////////////////////////////////////////
// // Other
// ////////////////////////////////////////////////////////////////////////////////

// test([
//   'struct Foo {}',
//   'owned shared Foo foo = new Foo();',
// ], [
//   'error on line 2 of <stdin>: cannot use both owned and shared',
//   '',
//   'owned shared Foo foo = new Foo();',
//   '             ~~~',
// ]);