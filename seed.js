const mongoose = require('mongoose');
const Problem = require('./models/problems');

mongoose.connect('mongodb://localhost:27017/doubtaway')
    .then(()=> console.log("DB seeded"));

const prblm = [
    {
        topic:"Array",
        level:"Easy",
        lang:"Python",
        statement:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
        example : "[1,2,3,5]"
        
        
    },
    {
        topic:"Linked-List",
        level:"Hard",
        lang:"C++",
        statement:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
        example : "[1,2,3,5]"
        
        
    },
    {
        topic:"Array",
        level:"Medium",
        lang:"C++",
        statement:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
        example : "[1,2,3,5]"
        
        
    },
    {
        topic:"Array",
        level:"hard",
        lang:"Java",
        statement:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
        example : "[1,2,3,5]"
        
        
    }

]

async function seedDB(){
    await Problem.deleteMany({});
    await Problem.insertMany(prblm);
    console.log('Product Seeded');

}

seedDB();
