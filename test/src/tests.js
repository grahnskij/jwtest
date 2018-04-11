// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('test suite for jwdemo', () => {

  describe('toggleSquare function', () => {
    it('toggleSquare changes square variable and resets position', () => {
      vm.x = 1;
      vm.y = 1;
      vm.square = true;
      vm.toggleSquare()
      expect(vm.square).toBe(false);
      expect(vm.x).toBe(0)
      expect(vm.y).toBe(0)
    })
  })

  describe('toggleEnglish function', () => {
    it('toggleEnglish changes english variable and sets placeholder text', () => {
      vm.english = true;
      expect(vm.placeholder).toBe("Please input commands")
      vm.toggleEnglish()
      expect(vm.english).toBe(false);
      expect(vm.placeholder).toBe("Skriv kommandon här")
    })
  })

  describe('incrSize function', () => {
    it('incrSize increments size variable', () => {
      vm.size = 10;
      vm.incrSize();
      expect(vm.size).toEqual(11)
    })

    it('incrSize doesnt go beyond 100', () => {
      vm.size = 100;
      vm.incrSize();
      expect(vm.size).toEqual(100)
    })
  })

  describe('decrSize function', () => {
    it('decrSize decrements size variable', () => {
      vm.size = 10;
      vm.decrSize();
      expect(vm.size).toEqual(9)
    })

    it('decrSize doesnt go below 1', () => {
      vm.size = 1;
      vm.decrSize();
      expect(vm.size).toEqual(1)
    })
  })

  describe('resetPos function', () => {
    it('resetPos resets compassIndex, x and y in square settings', () => {
      vm.square = true;
      vm.compassIndex = 3;
      vm.x = 3;
      vm.y = 3;
      vm.resetPos();
      expect(vm.compassIndex).toEqual(0);
      expect(vm.x).toEqual(1);
      expect(vm.y).toEqual(1);
    })

    it('resetPos resets compassIndex, x and y in circle settings', () => {
      vm.square = false;
      vm.compassIndex = 3;
      vm.x = 3;
      vm.y = 3;
      vm.resetPos();
      expect(vm.compassIndex).toEqual(0);
      expect(vm.x).toEqual(0);
      expect(vm.y).toEqual(0);
    })
  })

  describe('changeDirection function', () => {
    it('changeDirection can turn left', () => {
      var obj = {compassIndex: 3};
      var dir = "L";
      var result = vm.changeDirection(dir, obj);
      expect(result.compassIndex).toEqual(2);
    })

    it('changeDirection can reset compassIndex lo-hi', () => {
      var obj = {compassIndex: 0};
      var dir = "L";
      var result = vm.changeDirection(dir, obj);
      expect(result.compassIndex).toEqual(3);
    })

    it('changeDirection can turn right', () => {
      var obj = {compassIndex: 2};
      var dir = "R";
      var result = vm.changeDirection(dir, obj);
      expect(result.compassIndex).toEqual(3);
    })

    it('changeDirection can reset compassIndex hi-lo', () => {
      var obj = {compassIndex: 3};
      var dir = "R";
      var result = vm.changeDirection(dir, obj);
      expect(result.compassIndex).toEqual(0);
    })
  })

  describe('move function', () => {
    it('move can increase y', () => {
      var obj = {compassIndex: 0, x: 0, y: 1};
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.y).toBe(2);
      expect(result.x).toBe(0);
    })

    it('move doesnt increase y beyond size', () => {
      var obj = {compassIndex: 0, x: 0, y: 10};
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.y).toBe(10);
      expect(result.x).toBe(0);
    })

    it('move can increase x', () => {
      var obj = {compassIndex: 1, x: 1, y: 0};
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.x).toBe(2);
      expect(result.y).toBe(0);
    })

    it('move doesnt increase x beyond size', () => {
      var obj = {compassIndex: 1, x: 10, y: 0};
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.x).toBe(10);
      expect(result.y).toBe(0);
    })

    it('move can decrease y in square', () => {
      var obj = {compassIndex: 2, x: 0, y: 2};
      vm.size = 10;
      vm.square = true;
      var result = vm.move(obj);
      expect(result.y).toBe(1);
      expect(result.x).toBe(0);
    })

    it('move can decrease y in circle', () => {
      var obj = {compassIndex: 2, x: 0, y: 2};
      vm.size = 10;
      vm.square = false;
      var result = vm.move(obj);
      expect(result.y).toBe(1);
      expect(result.x).toBe(0);
    })

    it('move doesnt decrease y beyond size in square', () => {
      var obj = {compassIndex: 2, x: 0, y: 1};
      vm.size = 10;
      vm.square = true;
      var result = vm.move(obj);
      expect(result.y).toBe(1);
      expect(result.x).toBe(0);
    })

    it('move doesnt decrease y beyond size in circle', () => {
      var obj = {compassIndex: 2, x: 0, y: -10};
      vm.square = false;
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.y).toBe(-10);
      expect(result.x).toBe(0);
    })

    it('move can decrease x in square', () => {
      var obj = {compassIndex: 3, x: 2, y: 0};
      vm.size = 10;
      vm.square = true;
      var result = vm.move(obj);
      expect(result.x).toBe(1);
      expect(result.y).toBe(0);
    })

    it('move can decrease x in circle', () => {
      var obj = {compassIndex: 3, x: 2, y: 0};
      vm.size = 10;
      vm.square = false;
      var result = vm.move(obj);
      expect(result.x).toBe(1);
      expect(result.y).toBe(0);
    })

    it('move doesnt decrease x beyond size in square', () => {
      var obj = {compassIndex: 3, x: 1, y: 0};
      vm.size = 10;
      vm.square = true;
      var result = vm.move(obj);
      expect(result.x).toBe(1);
      expect(result.y).toBe(0);
    })

    it('move doesnt decrease x beyond size in circle', () => {
      var obj = {compassIndex: 3, x: -10, y: 0};
      vm.square = false;
      vm.size = 10;
      var result = vm.move(obj);
      expect(result.x).toBe(-10);
      expect(result.y).toBe(0);
    })
  })

  describe('processInput function', () => {
    it('processInput declines wrong english move command', () => {
      vm.english = true;
      vm.inputString = "G";
      vm.x = 0;
      vm.y = 0;
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.x).toBe(0);
      expect(vm.y).toBe(0);
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput accepts correct english move command', () => {
      vm.english = true;
      vm.inputString = "F";
      vm.x = 0;
      vm.y = 0;
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.x).toBe(0);
      expect(vm.y).toBe(1);
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput declines wrong swedish move command', () => {
      vm.english = false;
      vm.inputString = "F";
      vm.x = 0;
      vm.y = 0;
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.x).toBe(0);
      expect(vm.y).toBe(0);
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput accepts correct swedish move command', () => {
      vm.english = false;
      vm.inputString = "G";
      vm.x = 0;
      vm.y = 0;
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.x).toBe(0);
      expect(vm.y).toBe(1);
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput accepts correct english turn command', () => {
      vm.english = true;
      vm.inputString = "L";
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.compassIndex).toBe(3);
      vm.inputString = "R";
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput declines incorrect english turn command', () => {
      vm.english = true;
      vm.inputString = "V";
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
      vm.inputString = "H";
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput accepts correct swedish turn command', () => {
      vm.english = false;
      vm.inputString = "V";
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.compassIndex).toBe(3);
      vm.inputString = "H";
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
    })

    it('processInput declines incorrect swedish turn command', () => {
      vm.english = false;
      vm.inputString = "L";
      vm.compassIndex = 0;
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
      vm.inputString = "R";
      vm.processInput();
      expect(vm.compassIndex).toBe(0);
    })
  })

  describe('compass variable', () => {
    it('confirm compass array is in order', () => {
      expect(vm.compass[0]).toBe("N");
      expect(vm.compass[1]).toBe("E");
      expect(vm.compass[2]).toBe("S");
      expect(vm.compass[3]).toBe("W");
    })
  })
})
