function calculateAverage(numbers) {
    var sum = 0;
    //'<=' ist falsch aufgrund der Struktur einer Liste, denn <= geht bis zur 5 Stelle, aber Index fängt bei 0 an, d.h. eigentliche Länge = 0 bis 4
    for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
    }
    var average = sum / numbers.length;
    return average;
    }
    var numbers = [1, 2, 3, 4, 5];
    var average = calculateAverage(numbers);
    console.log("Der Durchschnitt beträgt: " + average);
    