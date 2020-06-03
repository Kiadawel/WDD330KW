//localStorage helpers
function writeToLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
function readFromLS(key) {
    console.log('readFromLS initialized');
    return JSON.parse(window.localStorage.getItem(key));
}

class commentModel {
    //methods and properties shared by all kinds of comments
    constructor(type) {
        this.type = type;
        this.comments = readFromLS(this.type) || [];
    }

    filterCommentsByName(name) {
        //method to filter and pull comments that apply to a single selected item
        const filteredArray = getAllComments().filter(item => item.name == name);
        return filteredArray;
    }
    getComments(category = null){
        console.log('model getComments initialized');
        console.log(this.comments);
        //method to get whichever comment list is requested
        if (category === null){
            console.log(`category null, ${this.comments}`)
            return this.comments;
        } else {
            console.log(`category ${category}, filtering ${this.comments}`)
            return this.comments.filter(item => item.name == category);
        }
    }
    addComment(postName, userInput){
        console.log(`addComment initialized`);
        //method to create a new comment to be added to the array
        //create a new comment object
        const newComment = {
            name: postName,
            date: new Date(),
            comment: userInput
        }
        //add this object to the array of comments
        this.comments.push(newComment);
        //set the LocalStorage array to include this new object
        writeToLS(this.type, this.comments);
    }
}

//create a standard UI for the comment form
const commentForm = `
    <h3>Comments</h3>
    <div class="comment_form">
        <h4>Add a Comment</h4>
        <textarea id="user_comment" placeholder="Enter your comments here"></textarea>
        <br />
        <button id="comment_submit">Add Comment</button>
    </div>
    <ul class="comment_list" id="commentList"></ul>`;

function renderCommentList(parent, commentArray){
    console.log('renderCommentList initialized');
    //reset the parent element
    parent.innerHTML = '';
    //add an item for each comment
    commentArray.forEach(commObject => {
        let item = document.createElement('li');
        item.innerHTML = `
            ${commObject.name},${commObject.date}: 
            ${commObject.content}`; 
        parent.appendChild(item);
    });
}

export default class Comments {
    constructor(type, commentElementID) {
        this.type = type;
        this.commentElementID = commentElementID;
        this.model = new commentModel(this.type);
    }
    addSubmitListener(commentName) {
        console.log(`addSubmitListener initialized with ${commentName}`)
        let userComment = document.getElementById('user_comment').value;
        //when submit comment button is pressed...
        document.getElementById('comment_submit').ontouchend = () => {
            //grab the standard comment model with these parameters
            this.model.addComment(commentName, userComment);
            //then reset the field to empty
            userComment = '';
            //and show the comment list
            this.showCommentList(commentName);
        }
    }
    showCommentList(category = null) {
        console.log('showCommentList initialized');
        const parent = document.getElementById('comments_div');
        //if there are no comments yet, add the comment form
        if(parent.innerHTML === '') {
            parent.innerHTML = commentForm;
        }
        if(category !== null) {
            //if a category/filter is selected, show the new comment input
            document.querySelector('.comment_form').style.display = 'block';
            this.addSubmitListener(category);
        } else {
            //if on the main page (displaying all comments) do not include new comment form
            document.querySelector('.comment_form').style.display = 'none';
        }
        //get the comment array from the model
        let commentArr = this.model.getComments(category);
        /*if (commentArr === null) {
            commentArr = ['No comments have been added yet'];
        }*/
        console.log(commentArr);
        renderCommentList(parent.lastChild,commentArr);
    }
}