//Anonymous Function
//(a) printing odd numbers in an array
var arr=[11,12,13,14,15,16,17];
var res=[];
var odd=function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 != 0){
      res.push(arr[i]);
      }
    }
    return res;
  }
  console.log(odd(arr));
//(b) Convert all the strings to title caps in a string array
var str = "this is my new string which need to be converted"
var titlecase = function(str){
  str = str.toLowerCase().split(" ");
  for(var i=0; i<str.length; i++){
    str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    var result = str.join(" ");
  }return result;
};
console.log(titlecase(str));
//(c) Sum of all numbers in an array
var arr = [11,12,13,14,15,16];
var sum = 0;
var result = function(arr){
  for(var i =0; i<arr.length;i++){
    sum=sum+arr[i];
    }
  return sum;
  }
  console.log(result(arr));
//(e) Return all the palindromes in an array
var arr = [123, 343, 456, 787];
var res = [];
var final = [];
var palindrom = function(arr){
for(var i =0; i<arr.length; i++){
  var reverse = Number(String(arr[i]).split("").reverse().join(""));
res.push(reverse);
}
for(var a=0; a<arr.length; a++){
  for(var b=0; b<res.length; b++){
    if(arr[a]===res[b]){
      final.push(res[b]);
    }
  }
}return final;
};
console.log(palindrom(arr));
//(f) Return median of two sorted arrays of the same size.
var arr1 = [11,13,15,17,19];
var arr2 = [12,14,16,18,20];
var arr3 =[…arr1,…arr2];
var arr = arr3.sort();
var array_median = function(arr){
var middle = arr.length/2;
var median = (arr[middle]+arr[middle-1])/2;
return median;
};
console.log(array_median(arr));
//(g) Remove duplicates from an array
var arr=["a","b","c","a","b","c",1,2,3,4,1,2,3,4];
var duplicate=function(arr){
  var remove=[...new Set(arr)];
  return remove;
};
console.log(duplicate(arr));
//(h) rotating array by k times
var arr=[11,12,13,14,15,16,17,18,19,20];
var n=6;
var rotate=function(arr,n){
  for(var i=0;i<n;i++){
    arr.unshift(arr.pop());
  }return arr;
};
console.log(rotate(arr,n))
//Arrow Function
//arrow function
//(a) printing odd numbers in an array
var arr=[11,12,13,14,15,16,17];
var res=[];
var odd=(arr)=> {
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 != 0){
      res.push(arr[i]);
      }
    }
    return res;
  };
  console.log(odd(arr));
//(b) Convert all the strings to title caps in a string array
var str = "this is my new string which need to be converted"
var titlecase = (str) =>{
  str = str.toLowerCase().split(" ");
  for(var i=0; i<str.length; i++){
    str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    var result = str.join(" ");
  }return result;
};
console.log(titlecase(str));
//(c) Sum of all numbers in an array
var arr = [11,12,13,14,15,16];
var sum = 0;
var result = (arr)=>{
  for(var i =0; i<arr.length;i++){
    sum=sum+arr[i];
    }
  return sum;
  }
  console.log(result(arr));
//(e) Return all the palindromes in an array
var arr = [123, 343, 456, 787];
var res = [];
var final = [];
var palindrom = (arr)=>{
for(var i =0; i<arr.length; i++){
  var reverse = Number(String(arr[i]).split("").reverse().join(""));
res.push(reverse);
}
for(var a=0; a<arr.length; a++){
  for(var b=0; b<res.length; b++){
    if(arr[a]===res[b]){
      final.push(res[b]);
    }
  }
}return final;
};
console.log(palindrom(arr));
//(f) Return median of two sorted arrays of the same size.
var arr1 = [11,13,15,17,19];
var arr2 = [12,14,16,18,20];
var arr3 =[...arr1,...arr2];
var arr = arr3.sort();
var array_median = (arr)=>{
var middle = arr.length/2;
var median = (arr[middle]+arr[middle-1])/2;
return median;
};
console.log(array_median(arr));
//(g) Remove duplicates from an array
var arr=["a","b","c","a","b","c",1,2,3,4,1,2,3,4];
var duplicate= (arr)=>{
  var remove=[...new Set(arr)];
  return remove;
};
console.log(duplicate(arr));
//(h) rotating array by k times
var arr=[11,12,13,14,15,16,17,18,19,20];
var n=6;
var rotate= (arr,n)=>{
  for(var i=0;i<n;i++){
    arr.unshift(arr.pop());
  }return arr;
};
console.log(rotate(arr,n))
//IIFE 
IIFE function
//(a) printing odd numbers in an array
(function(array){
  var res = [];
    for(var i = 0 ; i< array.length ; i++){
      if(array[i]%2!=0){
        res.push(array[i]);
      }
    }console.log(res);
  })([11,12,13,14,15,16,17])
//(b) Convert all the strings to title caps in a string array
(function(str){
  var str = str.toLowerCase().split(" ");
  for(var i = 0; i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    var result = str.join(" "); 
  }console.log(result);
  })("this is my new string which need to be converted");
//(c) Sum of all numbers in an array
(function(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum = sum+arr[i]
    }console.log(sum);
  })([11,12,13,14,15,16]);
//(e) Return all the palindromes in an array
(function(arr){
    var res = [];
  var final = [];
  for(var i =0; i<arr.length; i++){
  var reverse = Number(String(arr[i]).split("").reverse().join(""));
  res.push(reverse);
  }
  for(var a=0; a<arr.length; a++){
  for(var b=0; b<res.length; b++){
    if(arr[a]===res[b]){
      final.push(res[b]);
    }
  }
}
    console.log(final);
})([123, 343, 456, 787]);
//(f) Return median of two sorted arrays of the same size.
(function(arr1,arr2){
  var arr3 = [...arr1,...arr2];
  var arr=arr3.sort();
  var middle = arr.length/2;
  var median = (arr[middle]+arr[middle-1])/2;
  console.log(median);
})([11,13,15,17,19],[12,14,16,18,20]);
//(g) Remove duplicates from an array
(function(arr){
  var remove = [...new Set(arr)];
  console.log(remove);
})(["a","b","c","a","b","c",1,2,3,4,1,2,3,4]);
//(h) rotating array by k times
(function(arr,n){
  for(var i =0; i<n;i++){
    arr.unshift(arr.pop());
    }console.log(arr);
})([11,12,13,14,15,16,17,18,19,20],5);
