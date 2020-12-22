const area = function(obj){
    let array = obj
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        var modsels = {
            area_name: obj.id,
        };
        for (var key in obj) {
            var newKey = modsels[key];
            if (newKey) {
                obj[newKey] = obj[key];
                delete obj[key];
            }
            delete obj.id;
            delete obj.area_code;
        }
    }
    var oop = { ...array };
    var obj = {};
    for (var i in oop) {
        var obj = Object.assign(oop[i], obj);
    }
    return obj
}
export default area