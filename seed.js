const mongoose = require('mongoose');
const Problem = require('./models/problems');

mongoose.connect('mongodb://localhost:27017/doubtaway')
    .then(()=> console.log("DB seeded"));

const prblm = [
    {
        topic:"Array",
        level:"Easy",
        lang:"Python",
        desc:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself."
        
    },
    {
        topic:"Linked-List",
        level:"Hard",
        lang:"C++",
        desc:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself."
        
    },
    {
        topic:"Array",
        level:"Medium",
        lang:"C++",
        desc:"Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k."
        
    },
    {
        topic:"Array",
        level:"hard",
        lang:"Java",
        desc:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order."
        
    },

]

async function seedDB(){
    await Problem.deleteMany({});
    await Problem.insertMany(prblm);
    console.log('Product Seeded');

}

seedDB();
