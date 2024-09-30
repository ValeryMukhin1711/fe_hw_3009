// Дан массив объектов типа Person, который содержит поля name (тип String) и age (тип int). Необходимо отсортировать этот массив по возрасту в порядке убывания, используя алгоритм Merge sort.




let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 },
    { name: "Eve", age: 28 }
];

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].age < right[rightIndex].age) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let sortedPeople = mergeSort(people);
console.log(sortedPeople);