var count = 0
var day =1


array =[
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
    ['Jumping Jacks: 3 sets of 20 reps','Push-ups: 3 sets of 10 reps','Bodyweight Squats: 3 sets of 15 reps','Plank: Hold for 30 seconds, repeat 3 times','Mountain Climbers: 3 sets of 20 reps'],
    ['High Knees: 3 sets of 20 reps','Tricep Dips: 3 sets of 10 reps','Lunges: 3 sets of 10 reps (each leg)','Bicycle Crunches: 3 sets of 15 reps (each side)','Glute Bridge: 3 sets of 12 reps'],
    ['Burpees: 3 sets of 10 reps','Diamond Push-ups: 3 sets of 8 reps','Jump Squats: 3 sets of 12 reps','Side Plank: Hold for 30 seconds (each side), repeat 3 times','Russian Twists: 3 sets of 15 reps (each side)'],
    ['Skaters: 3 sets of 10 reps (each side)','Shoulder Taps: 3 sets of 10 reps (each side)','Reverse Lunges: 3 sets of 10 reps (each leg)','Leg Raises: 3 sets of 12 reps','Superman Pose: Hold for 30 seconds, repeat 3 times'],
    ['Jump Rope: 3 sets of 50 skips','Wide Grip Push-ups: 3 sets of 10 reps','Squat Jumps: 3 sets of 12 reps','Plank with Shoulder Taps: 3 sets of 10 reps (each side','Russian Twists with Medicine Ball: 3 sets of 12 reps (each side)'],
]


function checkComplete(){
    var next = document.getElementById("confirm-msg").value
   
    if(next === "DONE" && day <= 31){

        document.getElementById('days').innerHTML = 'Day: '+ day
        day = day + 1

        if (count <30){
            var workout = document.getElementById("workout")
            
         
        count = count + 1
         
            for(let i=0; i<=array[count - 1].length - 1; i++){
                var li = document.createElement("li")
                li.appendChild(document.createTextNode(array[count-1][i]))
                workout.appendChild(li)
            }
            
        }else if(count === 30){
            count = count + 1
            document.getElementById('congratulations').innerHTML = 'Congratulations you have completed the 30 days challenge!!!';
        }
        
        workout.removeChild(workout.firstChild)
        if (count != 1){
            
            workout.removeChild(workout.firstChild)
            workout.removeChild(workout.firstChild)    
            workout.removeChild(workout.firstChild)            
            workout.removeChild(workout.firstChild)
            // workout.removeChild(workout.firstChild)
       }
            

    }
}

function reset(){
    count = 0
    day = 1
    document.getElementById('days').innerHTML = 'Day: '+ day
    document.getElementById('congratulations').innerHTML = '';


    workout.removeChild(workout.firstChild)
    workout.removeChild(workout.firstChild)
    workout.removeChild(workout.firstChild)    
    workout.removeChild(workout.firstChild)            
    workout.removeChild(workout.firstChild)
    // workout.removeChild(workout.firstChild)

    
}

