function mostFrequentWord(paragraph, banned) {
    const normalParagraph = paragraph.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, ' ');
    //console.log(normalParagraph)

    const words = normalParagraph.split(/\s+/);
    // console.log(words.length)

    const obj = {};
    
    for (const word of words) {
        if (!banned.includes(word) && word.length > 0) {
            obj[word] = (obj[word] || 0) + 1;
        }
    }
   
    var mostFrequentWord="";
    var maxCount=0;

    for(const key in obj){
        if(obj[key] > maxCount){
            maxCount = obj[key];
            mostFrequentWord = key
        }
    }
    return mostFrequentWord
}

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
console.log(mostFrequentWord(paragraph, banned));