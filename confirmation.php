<!DOCTYPE html>
<html>

<head>
    <title>Get It Done!</title>
    <h1>Confirmation</h1>
    <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-storage.js"></script>
    <script src="index.js"></script>
    <script src="login.js"></script>


    <!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script>
</head>

<body>
    <?php 
        function confirm($name, $description, $date){
            echo "The task name is $name";
            echo "<br>";
            echo "The task description is $description";
            echo "<br>";
            if($date == null){
                echo "There is no due date";
            }
            else{
                echo "The due date is $date";
            } 
        }

        $taskName = $_POST["taskName"];
        $taskDescription = $_POST["taskDescription"];
        $taskDate =  $_POST["taskDate"];

        confirm($taskName, $taskDescription, $taskDate);
        echo "<br>";
        $onclickmethod= "createTask($taskName, $taskDescription, $taskDate)";
        echo "<input type='button' value='Submit' onclick='$onclickmethod'>";
        echo "<input type='button' value='Cancel' onclick='cancel()'>";
        
    ?>

    <br/>
    

</body>
</html>

