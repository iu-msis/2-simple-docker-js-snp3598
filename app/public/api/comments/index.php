<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Comments';
$vars = [];

if (isset($_GET['id'])) {
  $sql = 'SELECT * FROM Comments WHERE id = ?';
  $vars = [ $_GET['id'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

$json = json_encode($comments, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
