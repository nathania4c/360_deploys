<?php
    function login_message($is_logged_in = false){
        global $user;
        if ($is_logged_in == true){
            echo "<p>Welcome ".$user."</p>";
        } else{
            echo "<p>Logged out</p>";
        }
    }
?>