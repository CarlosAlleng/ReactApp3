<?php
// File: backend/get_tasks.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin

// Read tasks from the tasks.json file
$tasksFile = 'tasks.json';
if (!file_exists($tasksFile)) {
    file_put_contents($tasksFile, json_encode([])); // Create an empty file if it doesn't exist
}

$tasks = file_get_contents($tasksFile);
echo $tasks; // Return tasks as JSON
?>
