import {sum,subtract,multiply,divide} from './calculator.js';

test('adds 1 +2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})

test('subtract 3-1 to equal 2',()=>{
    expect(subtract(3,1)).toBe(2);
})

test('multiply 2*3 to equal 6',()=>{
    expect(multiply(2,3)).toBe(6);
})

test('divide 6/2 to equal 3',()=>{
    expect(divide(6,2)).toBe(3);
})