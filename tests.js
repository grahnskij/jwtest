// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('jwdemo', () => {

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    vm.$mount()
    expect(vm.x).toBe(1)
    expect(vm.square).toBe(true)
    vm.toggleSquare();
    expect(vm.square).toBe(false);
  })


})
