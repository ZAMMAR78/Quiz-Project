import inquirer from "inquirer";

const quiz:{
    question_1:string;
    question_2:string;
    question_3:String;
    question_4:string;
    question_5:string;
} =   await inquirer.prompt([
    {
        name:"question_1",
        type:"list",
        message:"Which country went to the space first?",
        choices:["Russia","America","United Kingdom"]
    },
    {
        name:"question_2",
        type:"list",
        message:"Who was the first governer general of Pakistan",
        choices:["Mohammad Ali Jinnah","Ayub Khan","Ghulam Muhammad"]
    },
    {
        name:"question_3",
        type:"list",
        message:"Which country did Alexander the Great belong to?",
        choices:["Albania","Macedonia","Greece"]
    },
    {
        name:"question_4",
        type:"list",
        message:"WHat was the title for Emperor Augustus of Rome?",
        choices:["Restorer of the world","The justifier","Ceaser"]
    },
    {
        name:"question_5",
        type:"list",
        message:"Who founded The Mughal Empire",
        choices:["Akbar","Babar","Ibrahim Lodhi"]
    }
]);

let score: number=0;
switch(quiz.question_1){
    case"Russia":
    console.log("1.Correct!")
    ++score;
    break;
    default:
        console.log("1.Incorrect!")

}
switch(quiz.question_2){
    case"Muhammad Ali Jinnah":
    console.log("2.Correct!")
    ++score;
    break;
    default:
        console.log("2.Incorrect!")

}
switch(quiz.question_3){
    case"Macedonia":
    console.log("3.Correct!")
    ++score;
    break;
    default:
        console.log("3.Incorrect!")

}
switch(quiz.question_4){
    case"Restorer of the world":
    console.log("4.Correct!")
    ++score;
    break;
    default:
        console.log("4.Incorrect!")

}
switch(quiz.question_5){
    case"Babar":
    console.log("5.Correct!")
    ++score;
    break;
    default:
        console.log("5.Incorrect!")

}
console.log(`Score:${score}`)
