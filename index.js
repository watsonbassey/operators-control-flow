
/**
Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.	

The subjects for each class group are as follows:

Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics*/

let studentBolatito = 'artsSubjects';
let artsSubjects = 'Government, Economics, Literature, History'
let generalSubjects = 'English, Mathematics,'


if (studentBolatito = artsSubjects) {
    console.log(generalSubjects + ' ' + artsSubjects);
}  else {
    console.log(generalSubjects);
}

let year = 2018;
 
// Leap years are divisible by 400 or by 4 but not 100
if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
    console.log(year + " is a leap year.");
} else{
    console.log(year + " is not a leap year.");
}
