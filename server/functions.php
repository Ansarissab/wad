<?php
require "db_connection.php";
/**
 * Created by PhpStorm.
 * User: l1f16bscs0071
 * Date: 1/2/2019
 * Time: 5:21 PM
 */

function getCat(){
    global $con;
    $getCatQuery = "select * from categry";
    $result = mysqli_query($con,$getCatQuery);
    while($row = mysqli_fetch_assoc($result)){
        $title = $row['cat_title'];
        $id = $row['cat_id'];
        echo "<li><a class='nav-link'  href='#'>$title</a></li>";
    }
}

function getBrand(){
    global $con;
    $getBrandQuery = "select * from brand";
    $result = mysqli_query($con,$getBrandQuery);
    while($row = mysqli_fetch_assoc($result)){
        $title = $row['brand_title'];
        $id = $row['brand_id'];
        echo "<li><a class='nav-link'  href='#'>$title</a></li>";
    }
}