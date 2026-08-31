import {reverseString} from './script.js';


test('reverse a string',()=>{
    expect(reverseString('hello')).toBe('olleh');
})

test('reverse a name',()=>{
    expect(reverseString('sandesh')).toBe('hsednas');
})