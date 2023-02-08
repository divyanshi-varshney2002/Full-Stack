const express = require("express");
const app = express();
const path = require("path");
const methodOverride=require("method-override");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));



//override with post having method=delete
app.use(methodOverride('_method'));

const comments = [

    {
        id: 0,
        user:"john",
        text:"this is john's comment"
    },
    {
        id: 1,
        user:"harry",
        text:"this is harry's comment"
    },
    {
        id: 2,
        user:"ron",
        text:"this is ron's comment"
    },
    
]

// List all the comments

app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

// Display the form to create new comment

app.get('/comments/new', (req, res) => {
    res.render('new');
});

// Create new comment

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    var comment=comments.find((comments)=>comment.id==id)
    if(comment==undefined) res.send("Not found !!");
    else res.render('show',{comment});
})
// we are not taking id as an input from the user, just the username and comment-text

app.get('/comments/:commentid/edit',(req,res)=>{
    const {commentid} =req.params;
    const comment=comments.find((comment)=>comment.id===parseInt(commentid));
    res.render('edit',{comment});
})

app.patch('/comments/:commentid',(req,res)=>{
    const {commentid} = req.params;
    const comment=comments.find((comment)=>comment.id===parseInt(commentid));
    comment.user=req.body.user;
    comment.text=req.body.text;
    res.redirect('/comments');
})

app.delete('/comments/:commentid',(req,res)=>{
    const {commentid}=req.params;
    comments.filter((comment)=>comment.id!=parseInt(commentid));
    res.redirect('/comments',{comment});
})

app.post('/comments', (req, res) => {
    const { user, text } = req.body;
    comments.push({ id: comments.length, user, text });

    res.redirect('/comments');
});


app.listen(3000,()=>{
    console.log('server started at port 3000');
  });
