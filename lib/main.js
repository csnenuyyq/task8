function getMessage(){
    return ['||:::',
    ':::||',
 	'::|:|',
 	'::||:',
 	':|::|',
 	':|:|:',
 	':||::',
 	'|:::|',
 	'|::|:',
 	'|:|::'
 	];
}
function changeText(string){
    var count = 0;
    var arr = Array.from(string);
    var textMes = getMessage();
    var text = '|';
    for(var i in arr){
        text += textMes[Number(arr[i])];
        count += Number(arr[i]);
    }
    var behind = 10 - (count%10);
    text += textMes[behind];
    text += '|';
    return text;
}
function changeNumber(string){
    var arr = string;
    var textArr = [];
    for(var i= 1;i<=arr.length-1;i+=5){
        var temp = arr.substr(i,5);
        textArr.push(temp);
    }
//
//    return textArr[0];
    var num = '';
    var textMes = getMessage();
    for(var i in textArr){
        for(var j in textMes){
            if(textArr[i]==textMes[j]){
                num += j;
            }
        }
    }
    
    return num.substr(0,num.length-1);
}
//function main(){
//    function getMessage(){
//    return ['||:::',
//    ':::||',
// 2	'::|:|',
// 3	'::||:',
// 4	':|::|',
// 5	':|:|:',
// 6	':||::',
// 7	'|:::|',
// 8	'|::|:',
// 9	'|:|::'
// 0	];
//}
//function changeText(string){
//    var count = 0;
//    var arr = Array.from(string);
//    var textMes = getMessage();
//    var text = '|';
//    for(var i in arr){
//        text += textMes[Number(arr[i])];
//        count += Number(arr[i]);
//    }
//    var behind = 10 - (count%10);
//    text += textMes[Number(arr[behind])]
//    text += '|';
//    return text;
//}
//function changeNumber(string){
//    var arr = Array.from(string);
//    arr.pop();
//    arr.slice(1);
//    var num = '';
//    var code= '';
//    var textMes = getMessage();
//    for(var i in arr){
//        if(code.length!=5){
//            code += arr[i];
//        }else{
//            for(var j in textMes){
//                if(code==textMes[j]){
//                    num += j;
//                }
//            }
//        }
//    }
//    return num;
//}
//    
//}

module.exports = {changeText:changeText,changeNumber:changeNumber};
