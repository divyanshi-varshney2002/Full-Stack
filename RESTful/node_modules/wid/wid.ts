/// <reference path="node.d.ts" />
/// <reference path="lodash.d.ts" />

var _ = require('lodash');

var aWords:string[] = <string[]>require("./Words/AWords.json");
var bWords:string[] = <string[]>require("./Words/BWords.json");
var cWords:string[] = <string[]>require("./Words/CWords.json");
var dWords:string[] = <string[]>require("./Words/DWords.json");
var eWords:string[] = <string[]>require("./Words/EWords.json");
var fWords:string[] = <string[]>require("./Words/FWords.json");
var gWords:string[] = <string[]>require("./Words/GWords.json");
var hWords:string[] = <string[]>require("./Words/HWords.json");
var iWords:string[] = <string[]>require("./Words/IWords.json");
var jWords:string[] = <string[]>require("./Words/JWords.json");
var kWords:string[] = <string[]>require("./Words/KWords.json");
var lWords:string[] = <string[]>require("./Words/LWords.json");
var mWords:string[] = <string[]>require("./Words/MWords.json");
var nWords:string[] = <string[]>require("./Words/NWords.json");
var oWords:string[] = <string[]>require("./Words/OWords.json");
var pWords:string[] = <string[]>require("./Words/PWords.json");
var qWords:string[] = <string[]>require("./Words/QWords.json");
var rWords:string[] = <string[]>require("./Words/RWords.json");
var sWords:string[] = <string[]>require("./Words/SWords.json");
var tWords:string[] = <string[]>require("./Words/TWords.json");
var uWords:string[] = <string[]>require("./Words/UWords.json");
var vWords:string[] = <string[]>require("./Words/VWords.json");
var wWords:string[] = <string[]>require("./Words/WWords.json");
var xWords:string[] = <string[]>require("./Words/XWords.json");
var yWords:string[] = <string[]>require("./Words/YWords.json");
var zWords:string[] = <string[]>require("./Words/ZWords.json");


//Used for randomness later
var letters:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

interface IAllWords {
    word:string;
    len:number;
}


//create list of words, add in the length
var allWordsWithLength:IAllWords[] = _.map<string[],IAllWords[]>(_.flatten([
        aWords,bWords,cWords,dWords,
        eWords,fWords,gWords,hWords,
        iWords,jWords,kWords,lWords,
        mWords,nWords,oWords,pWords,
        qWords,rWords,sWords,tWords,
        uWords,vWords,wWords,xWords,
        yWords,zWords
    ]),
    (word)=> {
        return <IAllWords>{
            word: word,
            len: word.length
        };
    });

var longestWordWithLength:IAllWords = _.max(allWordsWithLength, (item) => {
    return item.len;
});

var shortestWordWithLength:IAllWords = _.min(allWordsWithLength, (item) => {
    return item.len;
});

interface ILetterLength
{
    words: string[];
    numberOfLetters:number;
}

var letterLengthList:ILetterLength[] = _.map<number[],ILetterLength[]>(_.range(shortestWordWithLength.len, longestWordWithLength.len + 1), (wordLength) => {
    var list:IAllWords[] = _.filter<IAllWords>(allWordsWithLength, (wordWithLength) => {
        return wordWithLength.len === wordLength;
    });
    return <ILetterLength>{
        words: _.pluck(list, 'word'),
        numberOfLetters: wordLength
    };
});

var seed:number = 1;
function random():number {
    var x:number = Math.sin(seed++) * 10000;
    return ((x- Math.floor(x)) + Math.random())/2 ;
}

var working:boolean = false;

export function NewWID(widLength:number):string {
    while(working){}
    working = true;
    var widWords:string[] = [];
    if (widLength >= shortestWordWithLength.len) {
        var lengths:number[] = getRandomLengthRange(widLength);
        _.each<number>(lengths, (length) => {
            var list:ILetterLength = _.find<ILetterLength>(letterLengthList, (letterLength) => {
                return letterLength.numberOfLetters === length;
            });

            var letterLengthListIndex:number = letterLengthList.indexOf(list);
            var index:number = Math.floor(random() * (list.words.length - 1));
            widWords.push(list.words[index]);

            //Attempt to fix the low duplication numbers
            //There is a bug in the next 4 lines
            var randomIndex:number = Math.floor(random() * (list.words[index].length - 1));
            var wordAsArray:string[] = list.words[index].split('');
            wordAsArray[randomIndex] = letters[Math.floor(random() * (letters.length - 1))];
            var newWord:string = wordAsArray.join('');

            letterLengthList[letterLengthListIndex].words[index] = newWord;
        });
    }
    var wid:string = "";
    _.each<string>(widWords, (word) => {
        if (wid.length === 0) {
            wid += word;
        }
        else {
            wid += word.substring(0, 1).toUpperCase() + word.substring(1);
        }
    });
    if (wid.length < widLength) {
        for (var i = 0; i < widLength - wid.length; i++) {
            wid += letters[Math.floor(random() * (letters.length - 1))];
        }
    }

    working = false;
    return wid;
}

function getRandomLengthRange(length:number):number[] {
    var lengths:number[] = [];
    lengths.push(getRandomLength(length));
    var currentLength = sumLengths(lengths);
    while (currentLength < length) {
        var spacesShort = length - currentLength;
        if (spacesShort < shortestWordWithLength.len) {
            currentLength = length;
        }
        else {
            lengths.push(getRandomLength(spacesShort));
            currentLength = sumLengths(lengths);
        }
    }
    return lengths;
}

function getRandomLength(length:number):number {
    var rnd:number = shortestWordWithLength.len + Math.floor(
        random() * (longestWordWithLength.len - shortestWordWithLength.len));
    if (rnd > length) {
        rnd = length;
    }
    return rnd;
}

function sumLengths(lengths:number[]):number {
    return _.reduce<number,number>(lengths, (memo:number, num:number)=>{ return memo + num; }, 0);
}
