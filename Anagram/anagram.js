//This is the solution for the Anagram Problem

const isAnagram = (str1, str2) => {
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
    return (sorted1 === sorted2);

}
console.log(isAnagram('bleat', 'table'));
console.log(isAnagram('eat', 'tar'));
