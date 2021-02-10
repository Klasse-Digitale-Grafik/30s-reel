<html>
<?php

/*
* if you want to host your website on an external service,
* copy this file into your folder, rename it to ìndex.php`.
*
* Place your URL into the $url variable
*/

$url = 'https://your-website.com';

header("Location: $url");
exit;
