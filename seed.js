const mongoose = require('mongoose');
const Problem = require('./models/problems');

mongoose.connect('mongodb://localhost:27017/doubtaway')
    .then(()=> console.log("DB seeded"));

const prblm = [
    {
        topic:"Array",
        level:"Easy",
        lang:"Python",
        statement:"Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        example : "Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]"
        
        
    },
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
        topic:"Array",
        level:"hard",
        lang:"Java",
        statement:"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.An input string is valid if:Open brackets must be closed by the same type of brackets.Open brackets must be closed in the correct order.",
        example : "Input: s = '()' Output: true"
        
        
    }

]

async function seedDB(){
    await Problem.deleteMany({});
    await Problem.insertMany(prblm);
    console.log('Product Seeded');

}

seedDB();
