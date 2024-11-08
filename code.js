function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while( stack.length > 0) {
        let right = stack.pop();
        let left = stack.pop();
        if (right - left <= 0) {
            continue;
        }
        let pivotElement = array[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (array[j] < pivotElement) {
                i++;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        i++;
        let temp = array[i];
        array[i] = array[right];
        array[right] = temp;

        stack.push(left);
        stack.push(i - 1);
        stack.push(i + 1);
        stack.push(right);
    }

    return array;
}

