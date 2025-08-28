const express = require('express')
const {createTodo,updateTodo} = require('./types');
const { todo } = require('./db');
const { success } = require('zod');
const app = express();
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://workwithsarthi:Shagun%402115@sarthi21.tk4rh45.mongodb.net/todosnew")



app.use(express.json())

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    console.log(todos);
    
    
})
app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
            success: false
        })
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.title,
        completed: false
    })
    res.json({
        msg: "todo created",
        success: true
    })


})
app.put('/completed',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }

    await todo.updateMany({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "todo updated successfully",
        success: true
    })

})

app.listen(3000,()=> {
    console.log("server running");
    
})