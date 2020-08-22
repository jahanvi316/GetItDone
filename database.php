<?php
    // connect to mongodb
    $m = new MongoClient();
    echo "Connection to database successfully";

    //select a database
    $db = $m->Webprogramming
    echo "Database Webprogramming selected";

    //select a collection 
    $collection = $db->users;

    //pull everything in the collection
    $cursor = $collection->find();

    //iterate through the results
    foreach ($cursor as $document) {
        echo $document[""] . "\n";
    }

?>
