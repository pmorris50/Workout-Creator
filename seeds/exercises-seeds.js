const { Exercise } = require("../models"); //putting curly brackets around exercise cause it to become undefined?
const exerciseData = [
  {
    name: "Plank",
    muscle_group: "Core",
    demo_link: "assets/videos/plankvid.webm",
    equipment_id: 5,
  },
  {
    name: "Dumbbell Bench Press ",
    muscle_group: "Chest",
    demo_link:
      "assets/videos/dbBenchPress.webm",
    equipment_id: 1,
  },
  {
    name: "Back Squat",
    muscle_group: "Legs",
    demo_link: "assets/videos/BackSquat.webm",
    equipment_id: 4,
  },
  {
    name: "Dumbbell Curl ",
    muscle_group: "Arms",
    demo_link:
    "assets/videos/BicepCurls.webm",  //must screen capture save video into public/video and remember to "${}" when calling
    equipment_id: 3,
  },
  {
    name: "Bent Over Row",
    muscle_group: "Back",
    demo_link:
      "assets/videos/bentOverRowBB.webm",
    equipment_id: 2,
  },
  {
    name: "Deadlift",
    muscle_group: "Legs",
    demo_link:
      "assets/videos/deadliftBB.webm",
    equipment_id: 2,
  },
  {
    name: "Barbell Hip Thrust ",
    muscle_group: "Legs",
    demo_link: "assets/videos/barbellHipThrust.webm",
    equipment_id: 2,
  },
  {
    name: "Skull Crusher ",
    muscle_group: "Arms",
    demo_link:
      "/videos/skullCrusher.webm",
    equipment_id: 2,
  },
  {
    name: "Rotating Mountain Climber",
    muscle_group: "Core",
    demo_link:
      "assets/videos/rotatingMTclimber.webm",
    equipment_id: 5,
  },
  {
    name: "Pushup",
    muscle_group: "Chest",
    demo_link: "assets/videos/pushup.webm",
    equipment_id: 5,
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
