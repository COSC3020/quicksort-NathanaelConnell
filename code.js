function quicksort(array) {

    if (array.length < 2) return array;

    // A stack to hold the start and end indexes of the subarrays
    const stack = [];
    stack.push({ start: 0, end: array.length - 1 });

    while (stack.length > 0) {
        const { start, end } = stack.pop();

        // finds the pivot index and partitions
        const pivotIndex = partition(array, start, end);

        // If there are elements on the left side of the pivot, add the left subarray to the stack
        if (pivotIndex - 1 > start) {
            stack.push({ start: start, end: pivotIndex - 1 });
        }
        
        // If there are elements on the right side of the pivot, add the right subarray to the stack
        if (pivotIndex + 1 < end) {
            stack.push({ start: pivotIndex + 1, end: end });
        }
    }

    return array;
}

function partition(array, start, end) {
    const pivot = array[end]; // Choose the last element as the pivot
    let i = start - 1; // Index of the smaller element

    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++; // Increment the index of the smaller element
            // Swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Swap the pivot element with the element at index i + 1
    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    return i + 1; // Return the partition index
}