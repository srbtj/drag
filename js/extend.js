function extend(obj1,obj2){
    for(var attr in obj2){
        obj1[attr] = obj2[attr];
    };
};