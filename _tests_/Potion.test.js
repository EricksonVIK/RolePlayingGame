// calls in potion.js functions
const Potion = require('../lib/Potion.js');

// new creates a new Potion object. Stored as objects bc there is both a name and value
test ('creates a health potion object', ()=> {
    const potion = new Potion('health');

    expect (potion.name).toBe('health');
    expect (potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });