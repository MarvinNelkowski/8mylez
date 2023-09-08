<?php
function reverseString($str) {
$reversed = '';
//$i muss die Länge vom $str übergeben werden und die for-Schleife muss runterzählen
for ($i = strlen($str); $i >= 0; $i--) {
$reversed .= $str[$i];
}
return $reversed;
}
$string = "Hallo, Welt!";
$result = reverseString($string);
echo "Umgekehrter String: " . $result;
?>