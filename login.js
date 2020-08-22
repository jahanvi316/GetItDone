var username = "";
var database = firebase.database();
var ref = firebase.database().ref("users");

function signup() {
    location.href = "signup.html";
}

function passwordToggle() {
    var pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}

function signIn() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    // ref.on("value", function (snapshot) {
    //     output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
    // });

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function (snapshot) {
        // console.log(snapshot.val());
        // console.log(snapshot.child(usernameInput).val());
        let user = snapshot.child(usernameInput).val();
        let pass = user.password;
        if (passwordInput === pass) {
            console.log("login successful");
            username = usernameInput;
            window.localStorage.setItem('currentUser', usernameInput);
            location.href = "home.html";
        }
        else {
            console.log("login failed");
            var x = document.getElementById("loginFailed");
            x.style.display = "inline";
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    // var userLink = ref.child(usernameInput);
    // var user = userLink.get("password");
    // var passLink = userLink;
    // var pass = passLink.value;

    // console.log("userLink : " + userLink + " user: " + user + " passwordLink: " + passLink + " password: ");

}



function addTaskButton() {
    var x = document.getElementById("addTask");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

function createTask(taskName, taskDescription, taskDate) {
    console.log("createTask called");
    var taskName = document.getElementById("taskName");
    var taskDescription = document.getElementById("taskDescription");
    var taskDate = document.getElementById("taskDate");
    var currentUser = window.localStorage.getItem('currentUser');
    //console.log(currentUser);
    var userRef = ref.child(currentUser);
    //userRef.update({task: "");
    // userRef.on("value", function(snapshot) {
    //     console.log(snapshot.val());
    //  }, function (error) {
    //     console.log("Error: " + error.code);
    //  });
    var task = userRef.child("task");
    console.log("task name: " + taskName);
    var currTask = task.child(taskName);
    currTask.set({
        //name: taskName,
        description: taskDescription,
        date: taskDate
    });
    
    //var list = userRef.child("Tasks");
    //var task = list.child(taskName);
    //console.log("user reference: " + userRef);
    

    //console.log("task: " +task);
   // createList();
}

function createList(){
    var list = document.getElementById("listDiv");
    var checkbox = document.createElement("task");
    checkbox.type = "checkbox";
    checkbox.name = document.getElementById("taskName");
    checkbox.value = document.getElementById("taskName");
    checkbox.id = document.getElementById("taskName");
}

function logout(){
    username = "";
    location.href="login.html";
}

function cancel(){
    location.href="home.html";
}