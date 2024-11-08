# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The best and average case for this algorthim is O(nlogn) because it takes logn to split the array and then it takes a constant time to partition giving nlogn. The worst case is n^2 though becuase if its already sorted than it is not split in half and will have to look at each element and then partition each giving n in both leading to worst case being O(n^2). By using the big O notation we can deduce that big theta will be the same with best and average being nlog n and the worst case being n^2.

I had chat gpt help with solving an infinite loop happening on lines 13-15
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
