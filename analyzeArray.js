export function analyzeArray(arr){
    let average=arr.reduce((a,b)=>a+b,0)/arr.length;
    let min=Math.min(...arr);
    let max=Math.max(...arr);
    let length=arr.length;

    return {average,max,min,length};
}