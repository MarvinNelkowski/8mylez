<?php
function calculateAverage($numbers) {
$sum = 0;
$count = 0;
foreach ($numbers as $number) {
$sum += $number;
//count speichert die Menge der Zahlen, nicht den Inhalt
$count++;
echo($count);
echo(',');
}
//sum muss durch count geteilt werden, nicht multipliziert
$average = $sum / $count;
return $average;
}
$numbers = [2, 4, 6, 8, 10];
$result = calculateAverage($numbers);
echo "Average: " . $result;
?>