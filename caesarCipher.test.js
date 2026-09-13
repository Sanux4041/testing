import {caesarCipher} from './caesarCipher';

test('caesarCipher function ',()=>{
    expect(caesarCipher('Hello, World!@',3)).toBe('Khoor, Zruog!@');
})

test('caesasrCipher for upperCase letter',()=>{
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})