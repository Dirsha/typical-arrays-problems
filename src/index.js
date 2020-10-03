exports.min = function min(array) {
    if (arguments.length && array.length) {
        var minElement = array[0];
        array.forEach((element) => {
            if (element <= minElement) {
                minElement = element;
            }
        });
        return minElement;
    } else return 0;
};

exports.max = function max(array) {
    if (arguments.length && array.length) {
        var maxElement = array[0];
        array.forEach((element) => {
            if (element >= maxElement) {
                maxElement = element;
            }
        });
        return maxElement;
    } else return 0;
};

exports.avg = function avg(array) {
    if (arguments.length && array.length) {
        var sum = 0;
        var res;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
            res = sum / array.length;
        }
        return res;
    } else return 0;
};
