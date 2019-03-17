
/**
 * 比较器
 * @param propertyName 按属性比较
 * @author: xiaole
 * @createDateTime: 2019-03-17 20:45:20 
 */
function createComparisonFunc(propertyName){

    return function( object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else {
            return 0;
        }
    }
}

var data = [{name:'张三',age:28},{name:'李四',age:29}];
data.sort(createComparisonFunc('age'));