
// ## Helper functions

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.
function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

// Get a random integer less than n.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
}

//shuffle an array
function shuffleArray(a) {

    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

// Get a random element from an array (e.g., <code>random_element([4,8,7])</code> could return 4, 8, or 7). This is useful for condition randomization.
function randomElement(array) {
  return array[randomInteger(array.length)];
}
// three types of trials:
// 1) sound and picture 2) sound with hidden pictures 3) beep with image 4) traing trials with known sounds and pictures

//Stimuli (training)

var concept_pre_0=['apple.jpg', 'apple.jpg', 'apple.jpg', 'apple.jpg']
    sound_pre_0=['apple.wav','apple.wav','apple.wav','food.wav' ],
    concept_pre_1=['phon.jpg','lion.jpg','apple2.jpg', 'sandwich.jpg'],
    sound_pre_1 = ['phone.wav', 'lion.wav', 'apple.wav','food.wav'];
  
    
//shuffle order of exposure 
var Trials_pre=shuffleArray([0,1,2,3]);

//identical concept-sound mapping
var SoundToConcept_Map_pre=[0,1,2,3]; 

//Stimuli (real)
var concept_0= 'cow.jpg',
    sound_0= 'mybeep.wav',
    concept_1= ['buffle.jpg','deer.jpg','bird.jpg','car.jpg'],
    sound_1=['mybeep.wav','mybeep.wav','mybeep.wav','mybeep.wav'];

//shuffle order of exposure
var Trials=shuffleArray([0,1,2,3]);

// Arbitrray mapping between the continuum of concepts and the continuum of sounds
// I assume a one-to-one mapping
// the sound-concept mapping is randomized for each participant

var SoundToConcept_Map=shuffleArray([0,1,2,3]); 


// ## Configuration settings
// I should randomize these training examples
//var PreTrialPic=    [[0,1],[1,2],[4,3],[5,2],[5,4],[3,5],[1,2]];
//var PreTrialSound = [[0,0],[0,1],[3,3],[4,1],[5,5],[3,4],[2,2]];
//var PreTrials=[];
//var totalPreTrials= conceptPre.length; 


//var RealTrials=[];
//var totalRealTrials= conceptReal.length; 

//for (i=0; i < totalRealTrials; i++){
//    for (j=0; j < totalRealTrials; j++){
//        if (i != j){
//            RealTrials.push([i,j]);
//            }
//    }
//}




// 0 is code for "same" and 1 code for "different"
var myKeyBindings = {"S": 0, "D": 1};
   
    
// Fill in the instructions template using jQuery's <code>html()</code> method. In particular,
// let the subject know which keys correspond to even/odd. Here, I'm using the so-called **ternary operator**, which is a shorthand for <code>if (...) { ... } else { ... }</code>

$(".same-key").text("S");
$(".different-key").text("D");

 //Build trial sequence:

var myTrials=[];
var total_pre= Trials_pre.length;
var total_real= Trials.length;
//var totalTrials = totalPre + totalReal +2;

// I assume here that Sound and Concept continua are of the same length 

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "pre_instruction",
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: ''
        
        });

//Pre-trials
for (i=0; i < total_pre; i++){
    myTrial = {
        trial_number: 0,
        trial_type: "pre",
        concept_l:concept_pre_0[Trials_pre[i]],
        concept_r:concept_pre_1[Trials_pre[i]],
        concept_dist:'',
        sound_l:sound_pre_0[SoundToConcept_Map_pre[Trials_pre[i]]],
        sound_r:sound_pre_1[SoundToConcept_Map_pre[Trials_pre[i]]],
        sound_dist:''
        //sound_dist:''
    }
    myTrials.push(myTrial);
}

//Instructions 2
myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "real_instruction",
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: ''
        });

//Real trials
for (i=0; i < total_real; i++){
    myTrial = {
        trial_number: i+1,
        trial_type: "real",
        concept_l:concept_0,
        concept_r:concept_1[Trials[i]],
        concept_dist:Trials[i],
        sound_l:sound_0,
        sound_r:sound_1[SoundToConcept_Map[Trials[i]]],
        sound_dist: SoundToConcept_Map[Trials[i]]
    }
    
    myTrials.push(myTrial);
}


// Show the instructions slide -- this is what we want subjects to see first.

showSlide("instructions");

// ## The main event

var experiment = {
    
  //Objet to be submitted:
  data :{
    tri_number:[],
    tri_type:[],
    con_l: [] ,
    con_r: [],
    con_dist: [],
    sou_l: [],
    sou_r: [],  
    sou_dist: [],  
    answer:[],
    rt:[]  
  },
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  keyBindings: myKeyBindings,
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    setTimeout(function() { turk.submit(experiment) }, 1500);
  },
  // The work horse of the sequence - what to do on every trial.
  next: function() {
    // If the number of remaining trials is 0, we're done, so call the end function.
    if (experiment.trials.length == 0) {
      experiment.end();
      return;
    }
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    var current_trial = experiment.trials.shift();
      
    if (current_trial.trial_type == "pre_instruction")
        {
            showSlide("pre_instruction");
        }
      
    if (current_trial.trial_type == "real_instruction")
        {
            showSlide("real_instruction");
        }
      
    if (current_trial.trial_type == "pre" || current_trial.trial_type == "real") 
    {
        
        var current_concept_l= current_trial.concept_l;
      
        var current_concept_r= current_trial.concept_r;
      
        var current_sound_l= current_trial.sound_l;
      
        var current_sound_r= current_trial.sound_r;
        
        
    showSlide("stage");
      
    // Display the pictures.
    
    $("#pic_alien").html("<center><img src='images/alien2.png' height='170' width='250'></center>");
        
    $("#pic_left").html("<center><img src='images/"+current_concept_l+"' height='170' width='250'></center>");
      
    $("#pic_right").html("<center><img src='images/"+current_concept_r+"' height='170' width='250'></center>");
      
    //Play the sound for the left word then the sound for the right word
  
    var MySound1 = $('#sound_left')[0];
    MySound1.setAttribute('src', 'sounds/'+current_sound_l);
    MySound1.play();
      
    $('#sound_left').on('ended', function() {
        
    $("#word_left").css({"background-color": "white"});
        
    $("#pic_alien").html("<center><img src='images/alien2.png' height='170' width='250'></center>");
    
    setTimeout(function(){
                         
    var MySound2 = $('#sound_right')[0];
    MySound2.setAttribute('src', 'sounds/'+current_sound_r);
    MySound2.play();
                          
    }, 500);   
    });
    
    $('#sound_left').on('playing', function() {
    
    $("#word_left").css({"background-color": "#81F781"});
        
    $("#pic_alien").html("<center><img src='images/alien1.png' height='170' width='250'></center>");
        
    });
      
    $('#sound_right').on('playing', function() {
    
    $("#word_right").css({"background-color": "#81F781"});
        
    $("#pic_alien").html("<center><img src='images/alien1.png' height='170' width='250'></center>");
        
    });

    $('#sound_right').on('ended', function() {
    
    $("#word_right").css({"background-color": "white"});
        
    $("#pic_alien").html("<center><img src='images/alien2.png' height='170' width='250'></center>");
        
    });
    
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
    
    var keyPressHandler = function(event) {
        
    var keyCode = event.which;
      
    if (keyCode != 83 && keyCode != 68) {
        // If a key that we don't care about is pressed, re-attach the handler (see the end of this script for more info)
        $(document).one("keydown", keyPressHandler);
        
      } else {
        // If a valid key is pressed (code 80 is p, 81 is q),
        // record the reaction time (current time minus start time), which key was pressed, and what that means (even or odd).
        var endTime = (new Date()).getTime(),
            key = (keyCode == 83) ? "S" : "D",
            userAnswer = experiment.keyBindings[key];
            
        
        experiment.data.tri_number.push(current_trial.trial_number);
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.con_l.push(current_trial.concept_l);
        experiment.data.con_r.push(current_trial.concept_r);
        experiment.data.con_dist.push(current_trial.concept_dist);
        experiment.data.sou_l.push(current_trial.sound_l);
        experiment.data.sou_r.push(current_trial.sound_r);
        experiment.data.sou_dist.push(current_trial.sound_dist);
        
        experiment.data.answer.push(userAnswer);
        
        experiment.data.rt.push(endTime - startTime);
        
        
        
        // Temporarily clear the trial.
        //$("#pic_left").html("");
        //$("#pic_right").html("");
        //$("#sound_left").html("");
        //$("#sound_right").html("");
        
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 500);
      }
    };
    
   
    $(document).one("keydown", keyPressHandler);
    }
  }
  }

