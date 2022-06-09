const mongoose = require('mongoose');
const Problem = require('./models/problems');

const dburl = process.env.url || 'mongodb://localhost:27017/doubtaway';

mongoose.connect(dburl)
    .then(()=> console.log("DB seeded"));

const prblm = [
    
    {
        topic:"Linked-List",
        level:"Hard",
        lang:"C++",
        statement:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
        example : "Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]"
        
        
    },
    {
        topic:"Array",
        level:"Medium",
        lang:"C++",
        statement:"Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.",
        example : "Input: dividend = 10, divisor = 3 Output: 3."
        
        
    },
    {
        topic:"Graph",
        level:"Hard",
        lang:"Java",
        statement:"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.An input string is valid if:Open brackets must be closed by the same type of brackets.Open brackets must be closed in the correct order.",
        example : "Input: s = '()' Output: true"
        
        
    },
//     new prblems added 
     {
        topic:"Array",
        level:"Medium",
        lang:"C++",
        statement:"Given an array of non-negative integers nums, you are initially positioned at the first index of the array Each element in the array represents your maximum jump length at that position Your goal is to reach the last index in the minimum number of jumps You can assume that you can always reach the last index.",
        example : "Input: nums = [2,3,1,1,4] Output: 2"
        
        
    },
    {
        topic:"Array",
        level:"Medium",
        lang:"C++",
        statement:"You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).Return intervals after the insertion. ",
        example : "Input: intervals = [[1,3],[6,9]], newInterval = [2,5] Output:  [[1,5],[6,9]]"
        
        
    },
    {
        topic:"Array",
        level:"Hard",
        lang:"C++",
        statement:"Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).",
        example : "Input: 123   Output:321 "
        
        
    },
    {
        topic:"Array",
        level:"easy",
        lang:"Java",
        statement:" You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n",
        example : "Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  Output: [1,2,2,3,5,6] "
        
        
    },
    {
        topic:"Strings",
        level:"easy",
        lang:"C++",
        statement:"Given a string S, check if it is palindrome or not.",
        example : "Input:'abba'  Output:  1 "
        
        
    },
    
    {
        topic:"Array",
        level:"Hard",
        lang:"Java",
        statement:"Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:'?' Matches any single character. '*' Matches any sequence of characters (including the empty sequence). The matching should cover the entire input string (not partial).",
        example : "Input: s = 'aa', p = 'a' Output: false"
        
        
    },


    {
        topic:"Strings",
        level:"Medium",
        lang:"C++",
        statement:"Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. Note: You must not use any built-in BigInteger library or convert the inputs to integer directly. ",
        example : "Input: num1 = '2', num2 = '3' Output:  '6' "
        
        
    },
    {
        topic:"Strings",
        level:"Hard ",
        lang:"Python",
        statement:"Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value. Note that operands in the returned expressions should not contain leading zeros.",
        example : "Input: num = '123', target = 6 Output: ['1*2*3','1+2+3']  "
        
        
    },
    {
        topic:"Recursion",
        level:"hard",
        lang:"C++",
        statement:" For a given non-negative integer N, find the next smallest Happy Number. A number is called happy if it leads to 1 after a sequence of steps wherein each step number is replaced by the sum of squares of its digit that is if we start with Happy Number and keep replacing it with digits square sum, we reach 1.",
        example : "Input:N = 8 Output: 10 "
        
        
    },
   
    {
        topic:"Strings",
        level:"medium",
        lang:"C++",
        statement:"Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.Note that the same word in the dictionary may be reused multiple times in the segmentation.",
        example : "Input: s = 'leetcode', wordDict = ['leet','code']  Output:   true"
        
        
    },
    {
        topic:"Strings",
        level:"hard",
        lang:"C++",
        statement:"You are given a string s. You can convert s to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.",
        example : "Input: s ='aacecaaa' Output:   'aaacecaaa'"
        
        
    },
    {
        topic:"Recursion",
        level:"hard",
        lang:"C++",
        statement:"You are given a string s. You can convert s to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.",
        example : "Input: s ='aacecaaa' Output:   'aaacecaaa'"
        
        
    },
  
    {
        topic:"Recursion",
        level:"easy",
        lang:"C++",
        statement:"A poor old man works in a palace for a living. One day the old man's wife met with an accident. She needed an immediate operation but the old man's savings were not enough for the operation. He went running to the king to beg for money. The king told that he will not only pay the full amount for the operation but also double his salary. But for that the old man had to pass a test. The king showed him a pile of glass plates kept one above another, each one being smaller than the one beneath. The plates were kept in box 1. He had to transfer the plates to box 3 using box 2. However, there were some constraints. The old man could only take one plate at a time and he could only place a smaller plate on top of a larger plate. He could take a plate only from the top. Help the old man do so. There are N plates and he has to tell the nth move in the format (i, j) where a plate is being moved from ith box to jth box.",
        example : "Input:N = 2, n = 2 Output: 1 3 "
        
        
    },
  
    {
        topic:"Recursion",
        level:"Medium",
        lang:"C++",
        statement:"Given an integer N, print all the N digit numbers in increasing order, such that their digits are in strictly increasing order(from left to right). ",
        example : "Input:N = 1 Output: 0 1 2 3 4 5 6 7 8 9 "
        
        
    },
    {
        topic:"Hashing",
        level:"Medium",
        lang:"C++",
        statement:"Given an array of strings, return all groups of strings that are anagrams. The groups must be created in order of their appearance in the original array. Look at the sample case for clarification. Note: The finial output will be in lexicographic order. ",
        example : "Input: N = 5  words[] = {act,god,cat,dog,tac} Output: act cat tac  god dog "
        
        
    },
    {
        topic:"Recursion",
        level:"Medium",
        lang:"C++",
        statement:"The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.",
        example : "Input: N = 2 Output:move disk 1 from rod 1 to rod 2 ,move disk 2 from rod 1 to rod 3, move disk 1 from rod 2 to rod 3, 3  "
        
        
    },
    {
        topic:"Hashing",
        level:"Hard ",
        lang:"C++",
        statement:" Every friends fan know that joey loves food and monica loves to cook. So, on a occassion of thanksgiving monica made n types of food containing exactly 6 ingredients each. Monica is an excellent cook so she can cook food by adding any ingredient at any order. All ingredients contains protein on the scale of 1 to 10^6. Now, Chandler invented the fun game where everyone needs to find the successive protein rate in all n food of the ingredient on the top(6th ingredient is on top). Ross being the most curious wants to finish this game before dinner, so he wants your help to complete the task.",
        example : "Input:  nums = {{1,2,3,4,5,6}, {8,9,10,11,12,13}} Output: 1 "
        
        
    },
    {
        topic:"Stacks",
        level:"Hard",
        lang:"C++",
        statement:"There are N buildings in Linear Land. They appear in a linear line one after the other and their heights are given in the array arr[]. Geek wants to select three buildings in Linear Land and remodel them as recreational spots. The third of the selected building must be taller than the first and shorter than the second.Can geek build the three-building recreational zone?  ",
        example : "Input: N = 6  arr[] = {4, 7, 11, 5, 13, 2}  Output: true  "
        
        
    },
    {
        topic:"Hashing",
        level:"Medium",
        lang:"C++",
        statement:" You are given an array arr[] of size n. Find the total count of sub-arrays having their sum equal to 0.",
        example : "Input:  n = 6 arr[] = {0,0,5,5,0,0} Output:6  "
        
        
    },
    {
        topic:"Stacks",
        level:"Easy",
        lang:"C++",
        statement:" Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.",
        example : "Input: {([])} Output: true "
        
        
    },
    {
        topic:"Hashing",
        level:"Easy",
        lang:"C++",
        statement:" Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.",
        example : "Input: N = 8  A[] = {15,-2,2,-8,1,7,10,23} Output:  5"
        
        
    },
    {
        topic:"Hashing",
        level:"Medium",
        lang:"C++",
        statement:" Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.",
        example : "Input:N = 7  a[] = {2,6,1,9,4,5,3} Output: 6 "
        
        
    },

    {
        topic:"Stacks",
        level:"Medium",
        lang:"Java",
        statement:"Find the largest rectangular area possible in a given histogram where the largest rectangle can be made of a number of contiguous bars. For simplicity, assume that all bars have the same width and the width is 1 unit, there will be N bars height of each bar will be given by the array arr. ",
        example : "Input: N = 7 arr[] = {6,2,5,4,5,1,6} Output: 12  "
        
        
    },
  
    {
        topic:"Stacks",
        level:"Easy",
        lang:"C++",
        statement:" Given an expression string x. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.",
        example : "Input: {([])} Output: true "
        
        
    },
    {
        topic:"Stacks",
        level:"Medium",
        lang:"C++",
        statement:"Given an array arr[ ] of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element.If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1. ",
        example : "Input: N = 4, arr[] = [1 3 2 4] Output: 3 4 4 -1  "
        
        
    },
    {
        topic:"Stacks",
        level:"Hard",
        lang:"Java",
        statement:" Geek wants to send an encrypted message in the form of string S to his friend Keeg along with instructions on how to decipher the message. To decipher the message, his friend needs to iterate over the message string from left to right, if he finds a '*', he must remove it and add all the letters read so far to the string. He must keep on doing this till he gets rid of all the '*'.Can you help Geek encrypt his message string S? Note: If the string can be encrypted in multiple ways, find the smallest encrypted string.  ",
        example : "Input: S = 'ababcababcd' Output:  ab*c*d "
        
        
    },
    {
        topic:"Queue",
        level:"Medium",
        lang:"C++",
        statement:"  Suppose there is a circle. There are N petrol pumps on that circle. You will be given two sets of data.1. The amount of petrol that every petrol pump has.2. Distance from that petrol pump to the next petrol pump. Find a starting point where the truck can start to get through the complete circle without exhausting its petrol in between.Note :  Assume for 1 litre petrol, the truck can go 1 unit of distance.",
        example : "Input: N = 4 Petrol = 4 6 7 4 Distance = 6 5 3 5 Output:1 "
        
        
    },
    {
        topic:"Trees",
        level:"Easy",
        lang:"C++",
        statement:" Given a binary tree and an integer S, check whether there is root to leaf path with its sum as S. ",
        example : "Input: 1 2 3   Output: 0"
        
        
    },
    {
        topic:"Queue",
        level:"Easy",
        lang:"C++",
        statement:" There are given N ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to sum of their lengths. The task is to connect the ropes with minimum cost. ",
        example : "Input: n = 4 arr[] = {4, 3, 2, 6} Output:29 "
        
        
    },
    {
        topic:"Queue",
        level:"Medium",
        lang:"C++",
        statement:" Given an input stream of A of n characters consisting only of lower case alphabets. The task is to find the first non repeating character, each time a character is inserted to the stream. If there is no such character then append '#' to the answer. ",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },
    {
        topic:"Graph",
        level:"Hard",
        lang:"C++",
        statement:"Given an adjacency matrix representation of an unweighted undirected graph named graph, which has N vertices. You have to find out if there is an eulerian path present in the graph or not.Note: The graph consists of a single component ",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },
    {
        topic:"Queue",
        level:"Hard",
        lang:"Java",
        statement:" Given an integer K and a queue of integers, we need to reverse the order of the first K elements of the queue, leaving the other elements in the same relative order.Only following standard operations are allowed on queue.  enqueue(x) : Add an item x to rear of queue  dequeue() : Remove an item from front of queuesize() : Returns number of elements in queue. front() : Finds front item.Note: The above operations represent the general processings. In-built functions of the respective languages can be used to solve the problem. ",
        example : "Input: 5 3 1 2 3 4 5 Output: 3 2 1 4 5"
        
        
    },
    {
        topic:"Queue",
        level:"Medium",
        lang:"C++",
        statement:"Due to the rise of covid-19 cases in India, this year BCCI decided to organize knock-out matches in IPL rather than a league.Today is matchday 2 and it is between the most loved team Chennai Super Kings and the most underrated team - Punjab Kings. Stephen Fleming, the head coach of CSK, analyzing the batting stats of Punjab. He has stats of runs scored by all N players in the previous season and he wants to find the maximum score for each and every contiguous sub-list of size K to strategize for the game.  ",
        example : "Input: N = 9, K = 3 arr[] = 1 2 3 1 4 5 2 3 6 Output: 3 3 4 5 5 5 6 "
        
        
    },
   
    {
        topic:"Trees",
        level:"Medium",
        lang:"C++",
        statement:" Given a Binary Tree. Return true if, for every node X in the tree other than the leaves, its value is equal to the sum of its left subtree's value and its right subtree's value. Else return false. An empty tree is also a Sum Tree as the sum of an empty tree can be considered to be 0. A leaf node is also considered a Sum Tree. ",
        example : "Input:3 1 2 Output: 1 "
        
        
    },
    {
        topic:"Trees",
        level:"Medium",
        lang:"C++",
        statement:" Given inorder and postorder traversals of a Binary Tree in the arrays in[] and post[] respectively. The task is to construct the binary tree from these traversals. ",
        example : "Input: N = 8 in[] = 4 8 2 5 1 6 3 7  post[] =8 4 5 2 6 7 3 1  Output:  1 2 4 8 5 3 6 7"
        
        
        
    },
    {
        topic:"Trees",
        level:"Hard",
        lang:"C++",
        statement:" Given a Singly Linked List which has data members sorted in ascending order. Construct a Balanced Binary Search Tree which has same data members as the given Linked List.  Note: There might be nodes with same value. ",
        example : "Input:  Linked List: 1->2->3->4->5->6->7 Output:  4 2 1 3 6 5 7"
        
        
    },
    {
        topic:"Graph",
        level:"Hard",
        lang:"C++",
        statement:" Given a connected undirected graph. Perform a Depth First Traversal of the graph. Note: Use recursive approach to find the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph.. ",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },
    {
        topic:"Trees",
        level:"Hard",
        lang:"C++",
        statement:" Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be same as Inorder of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL. ",
        example : "Input:1 3 2 Output:  3 1 2 2 1 3 "
        
        
    },

    {
        topic:"Graph",
        level:"Medium",
        lang:"C++",
        statement:"Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph. ",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },

    {
        topic:"Graph",
        level:"Medium",
        lang:"C++",
        statement:"Given a directed graph, find out if a vertex j is reachable from another vertex i for all vertex pairs (i, j) in the given graph. Here reachable mean that there is a path from vertex i to j. The reach-ability matrix is called transitive closure of a graph. The directed graph is represented by adjacency list graph where there are N vertices. ",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },

    {
        topic:"Graph",
        level:"Easy",
        lang:"C++",
        statement:" Given a Directed Graph, find a Mother Vertex in the Graph (if present).  A Mother Vertex is a vertex through which we can reach all the other vertices of the Graph.",
        example : "Input: A = 'aabc' Output: 'a#bb'"
        
        
    },
    {
        topic:"Array",
        level:"Hard",
        lang:"Python",
        statement:"Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        example : "Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]"
        
        
    },
//     end of new problems added
    

]

async function seedDB(){
    await Problem.deleteMany({});
    await Problem.insertMany(prblm);
    console.log('Product Seeded');

}

seedDB();
