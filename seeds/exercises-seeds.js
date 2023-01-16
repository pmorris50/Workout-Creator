const  Exercise   = require('../models/exercises'); //putting curly brackets around exercise cause it to become undefined?
const exerciseData = [
{
 "name": "Plank",
 "muscle_group": "Core",
 "demo_link":"https://www.muscleandstrength.com/exercises/hover.html",
 "equipment": "null"
 
},
 {
    "name": "Dumbbell Bench Press ",
    "muscle_group": "Chest",
    "demo_link": "https://www.muscleandstrength.com/exercises/dumbbell-bench-press.html ",
    "equipment": "Dumbbells" 
 },
 {
    "name": "Back Squat",
    "muscle_group": "Legs",
    "demo_link": "https://www.muscleandstrength.com/exercises/squat.html",
    "equipment": "Rack"
    
 },
 {
    "name": "Dumbbell Curl ",
    "muscle_group": "Arms",
    "demo_link": "https://www.muscleandstrength.com/exercises/standing-dumbbell-curl.html",
    "equipment": "Dumbbells"
    
 },
 {
    "name": "Bent Over Row",
    "muscle_group": "Back",
    "demo_link": "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html",
    "equipment": "Barbell"
    
 },
 {
    "name": "Deadlift",
    "muscle_group": "Legs",
    "demo_link": "https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html ",
    "equipment": "Barbell"
 },
 {
    "name": "Barbell Hip Thrust ", 
    "muscle_group": "Legs",
    "demo_link": "https://www.muscleandstrength.com/exercises/barbell-hip-thrust",
    "equipment": "Barbell"
 },
 {
    "name": "Skull Crusher ",
    "muscle_group": "Arms",
    "demo_link": "https://www.muscleandstrength.com/exercises/lying-tricep-extension.html ",
    "equipment": "Barbell"
 },
 {
    "name": "Rotating Mountain Climber",
    "muscle_group": "Core",
    "demo_link": "https://www.muscleandstrength.com/exercises/rotating-mountain-climber",
    "equipment": "null"
 },
 {
    "name": "Pushup",
    "muscle_group": "Chest",
    "demo_link": "https://www.muscleandstrength.com/exercises/push-up.html"
 }
]

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;