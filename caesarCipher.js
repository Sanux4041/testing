export function caesarCipher(string,key){
    let result='';
    for(let i=0;i<string.length;i++){
        let char=string[i];
        if(char.match(/[a-z]/i)){
            let code=string.charCodeAt(i);
            if(char.toUpperCase()===char){
                char=String.fromCharCode(((code-65+key)%26)+65);
            }
            else{
                char=String.fromCharCode(((code-97+key)%26)+97);
            }
        }
        result+=char;
    }
    return result;
}