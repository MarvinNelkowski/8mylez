function checkPalindrome(word) {
    var reverseWord = '';
    //i darf nicht ins minus gehen (vorher: i = 0), sondern am index von dem letzten Buchstaben anfangen
    for (var i = word.length-1; i >= 0; i--) {
    reverseWord += word[i];
    }
    //true und false waren vertauscht
    if (reverseWord === word) {
    return true;
    } else {
    return false;
    }

    }
    var word = "level";
    var isPalindrome = checkPalindrome(word);
    console.log("Ist das Wort ein Palindrom? " + isPalindrome);