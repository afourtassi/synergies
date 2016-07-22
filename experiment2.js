
// ## Helper functions

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

// Get a random integer less than n.
//function randomInteger(n) {
//	return Math.floor(Math.random()*n);
//}

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

//Preload the pictures


//var count = myImages.length;

//var $MyPics = new Array();

//for (var i=0; i<count-1;i++){
//    $MyPics.push($('<img>').attr('src', myImages[i]));
//}

// get condition
//call the maker getter to get the cond variable

//try { 
//var filename = "FCexptMT1"
//var condCounts = "1,10;2,10;3,10" //Example: "1,20;2,20;3,20"
//var xmlHttp = null;
//xmlHttp = new XMLHttpRequest();
//xmlHttp.open( "GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + condCounts +"&filename=" + filename, false );
//xmlHttp.send( null );
//var cond = xmlHttp.responseText;
    
//} catch (e) {
//    var cond = 1;
//}

//choose a condition
//var cond = randomInt(1,3);
var cond = 2;

//Pick a sub-condition for the joint condition 
//var sub = randomInt(0,3);
var sub=3;

var subJoint=[[0,3,1,2],
             [1,2,0,3],
             [2,1,3,0],
             [3,0,2,1]];

var condition_name="";
var ConStim =  new Array();
var SounStim = new Array();
var myInstruction="";


if (cond == 1) {
    
     condition_name = "joint";
     ConStim = ['cow','buffle','deer','bird', 'car'];   
     SounStim = ['aba01','aba09_white', 'aba09_pink','aba09_brown','aba09'];
    
     myInstruction= "Now you will start the real task. Please make sure that you read and understand the following instructions: <br><br> Contrary to the training, the alien will NOT be speaking in English, but in an alien language. This language contains only two words: 'ABA' and 'ADA'. <br><br> As before, the alien will describe two new objects either by different words (in this case by ABA - ADA) or by a same word (ABA - ABA). <br><br> A difficulty for the other alien, however, is that the second word is sometimes pronounced in a noisy context. This makes it sometimes difficult to distinguish two instances of the same word ABA-ABA, from the two words ABA-ADA. You should help the other alien in this task based on both the sounds and the objects being described. <br><br> In each trial, you should press <span class='same-key'>S</span> if you think that the objects are being described by the <b>same</b> word (ABA - ABA), and press <span class='different-key'>D</span> if you think the objects are being described by 2 <b>different</b> words (ABA - ADA). <br><br> Each trial is different. Your answers for one trial do not need to be related to your other answers on subsequent trials.";

    
    //Pick a sub-condition for the joint condition 


    var SoundToConcept_Map1=subJoint[sub]; 
    var SoundToConcept_Map2=SoundToConcept_Map1;
       
}

else if (cond == 2){
    condition_name = "sound";
    ConStim = ['grey','grey','grey','grey', 'grey','grey','grey','grey', 'grey','grey','grey'];
    //pilot 1
    //SounStim = ['aba01','aba09_white35','aba09_white34','aba09_white33','aba09_white32','aba09_white31','aba09_white30', 'aba09_white25','aba09_white20','aba09_white15','aba09'];
    //pilot 2
    //SounStim = ['aba01','aba09_white35','aba09_white32','aba09_white31','aba09_white15','aba09_white10','aba09_white05','aba09'];
    
    //pilot 3
    SounStim = ['aba01','aba09_white35','aba09_white32','aba09_white15','aba09'];
    
    //[based on 15/30/35]
    
    myInstruction= "Now you will start the real task. Please make sure that you read and understand the following instructions: <br><br> Contrary to the training, the alien will NOT be speaking in English, but in an alien language. This language contains only two words: 'ABA' and 'ADA'. <br><br> As before, the alien will describe two new objects either by different words (in this case by ABA - ADA) or by a same word (ABA - ABA). <br><br> <b>One difficulty for the other alien, however, is that the second word is sometimes pronounced in a noisy context. This makes it sometimes difficult to distinguish two instances of the same word ABA-ABA, from the two words ABA-ADA</b>. <br><br> <b>Another difficulty is that the objects being described will be hidden. You should help the other alien in this task based on the sounds only.</b> <br><br> In each trial, you should press <span class='same-key'>S</span> if you think that the hidden objects are being described by the <b>same</b> words (ABA - ABA) even when they are  pronounced slightly differently, and press <span class='different-key'>D</span> if you think the objects are being described by 2 <b>different</b> words (ABA - ADA). <br><br> Each trial is different. Your answers for one trial do not need to be related to your other answers on subsequent trials.";    
    

    var SoundToConcept_Map1=shuffleArray([0,1,2,3]); 
    var SoundToConcept_Map2=shuffleArray([0,1,2,3]); 
}

else if (cond == 3){
    condition_name = "concept";
    ConStim = ['cow','buffle','deer','bird', 'car'];
    SounStim = ['beep','beep','beep','beep', 'beep'];
    
    myInstruction= "Now you will start the real task. Please make sure that you read and understand the following instructions: <br><br> As in the training, the first alien will be teaching an other alien the names of some objects from the planet Earth. <br><br> <b>Now the difficulty is that the words will be bleeped. You should help the other alien in this task based on the pictures of the objects only.</b> <br><br> In each trial, you should press <span class='same-key'>S</span> if you think that the objects are being described by the <b>same</b> bleeped word, and press <span class='different-key'>D</span> if you think the objects are being described by 2 <b>different</b> words. <br><br> Each trial is different. Your answers for one trial do not need to be related to your other answers on subsequent trials.";
    
    var SoundToConcept_Map1=shuffleArray([0,1,2,3]); 
    var SoundToConcept_Map2=shuffleArray([0,1,2,3]);
}

ConStim_pre = ['phone','lion','apple2', 'sandwich'];
SounStim_pre = ['phone','lion','apple', 'food'];

//Preloading the alien stimuli: 

var $alien = new Array();
$alien.push($('<img>').attr('src','images/alien2.png').height(170).width(250));
$alien.push($('<img>').attr('src','images/alien1.png').height(170).width(250));


//Preloading the Concept training stimuli:
///////////////
//left concept
var $concept_pre_0 = new Array();
for (i=0; i < ConStim_pre.length; i++){
$concept_pre_0.push($('<img>').attr('src','images/apple.jpg').height(170).width(250));
}
//right concept
var $concept_pre_1 = new Array();
for (i=0; i < ConStim_pre.length; i++){
$concept_pre_1.push($('<img>').attr('src','images/'+ConStim_pre[i]+'.jpg').height(170).width(250));
}

//Preloading the Sound training stimuli:
///////////////////
//left sound
var $sound_pre_0 = new Array();
for (i=0; i < SounStim_pre.length-1; i++){
$sound_pre_0.push($('<audio>').attr('src','sounds/apple.mp3').attr("preload", "auto"));
}   
//Account for the fact that the last sound changes
$sound_pre_0.push($('<audio>').attr('src','sounds/food.mp3').attr("preload", "auto"));

var $sound_pre_1 = new Array();
for (i=0; i < SounStim_pre.length; i++){
$sound_pre_1.push($('<audio>').attr('src','sounds/'+SounStim_pre[i]+'.mp3').attr("preload", "auto"));
}
    
//shuffle the training order of exposure 
var Trials_pre=shuffleArray([0,1,2,3]);

//Concept-sound mapping (here identical)
var SoundToConcept_Map_pre=[0,1,2,3]; 

//Preloading the Concept real stimuli:
///////////////////
//left concept
var $concept_0 = new $('<img>').attr('src','images/'+ConStim[0]+'.jpg').height(170).width(250);
//right concept
var $concept_1 = new Array();
for (i=0; i < ConStim.length-1; i++){
$concept_1.push($('<img>').attr('src','images/'+ConStim[i+1]+'.jpg').height(170).width(250));
}

//left sound
var $sound_0 = new Array(); 
for (i=0; i < SounStim.length-1; i++){
$sound_0.push($('<audio>').attr('src','sounds/'+SounStim[0]+'.mp3').attr("preload", "auto"));
} 

//right sound
var $sound_1 = new Array();
for (i=0; i < SounStim.length-1; i++){
$sound_1.push($('<audio>').attr('src','sounds/'+SounStim[i+1]+'.mp3').attr("preload", "auto"));
}

//shuffle order of exposure
var Trials1=shuffleArray([0,1,2,3]);
var Trials2=shuffleArray([0,1,2,3]);




// 0 is code for "same" and 1 code for "different"
var myKeyBindings = {"S": 0, "D": 1};
   

$(".same-key").text("S");
$(".different-key").text("D");

 //Build trial sequence:

var myTrials=[];
var total_pre= Trials_pre.length;
var total_real= Trials1.length;
//var totalTrials = totalPre + totalReal +2;

// I assume here that Sound and Concept continua are of the same length 

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "pre_instruction",
        session:0,
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
        trial_order:Trials_pre[i]+1,
        trial_type: "pre",
        session:0,
        concept_l:$concept_pre_0[Trials_pre[i]],
        concept_r:$concept_pre_1[Trials_pre[i]],
        concept_dist:'',
        sound_l:$sound_pre_0[SoundToConcept_Map_pre[Trials_pre[i]]],
        sound_r:$sound_pre_1[SoundToConcept_Map_pre[Trials_pre[i]]],
        sound_dist:''
        //sound_dist:''
    }
    myTrials.push(myTrial);
}

//Instructions real 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "real_instruction1",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: ''
        });

//Real trials 1
for (i=0; i < total_real; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials1[i]+1,
        trial_type: "real",
        session:1,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials1[i]],
        concept_dist:Trials1[i]+1,
        sound_l:$sound_0[SoundToConcept_Map1[Trials1[i]]],
        sound_r:$sound_1[SoundToConcept_Map1[Trials1[i]]],
        sound_dist: SoundToConcept_Map1[Trials1[i]]+1
    }
    
    myTrials.push(myTrial);
}

//Instructions real 2
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "real_instruction2",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: ''
        });

//Real trials 2
for (i=0; i < total_real; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials2[i]+1,
        trial_type: "real",
        session:2,
        concept_l:$concept_0,
        concept_r:$concept_1[Trials2[i]],
        concept_dist:Trials2[i]+1,
        sound_l:$sound_0[SoundToConcept_Map2[Trials2[i]]],
        sound_r:$sound_1[SoundToConcept_Map2[Trials2[i]]],
        sound_dist: SoundToConcept_Map2[Trials2[i]]+1
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
    tri_order:[],  
    tri_type:[],
    session:[],
    con_dist: [],  
    sou_dist: [],  
    answer:[],
    rt:[],
    condition:[],
    subCondition:[]
      
      
  },
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  keyBindings: myKeyBindings,
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { 
        
            //Decrement 
            //if (turk.workerId.length > 0){
            //var xmlHttp = null;
            //xmlHttp = new XMLHttpRequest();
            //xmlHttp.open("GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            //xmlHttp.send(null);
            //}
        turk.submit(experiment) }, 1500);
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
      
    if (current_trial.trial_type == "real_instruction1")
        {
            showSlide("real_instruction1");
            $("#instructions2").html(myInstruction);
        }
    
    if (current_trial.trial_type == "real_instruction2")
        {
            showSlide("real_instruction2");
        
        } 
      
    if (current_trial.trial_type == "pre" || current_trial.trial_type == "real") 
    {
        
        var $current_concept_l= current_trial.concept_l;
      
        var $current_concept_r= current_trial.concept_r;
      
        var $current_sound_l= current_trial.sound_l;
      
        var $current_sound_r= current_trial.sound_r;
        
        
    showSlide("stage");
      
    // Display the pictures.
    
    //$("#pic_alien").html($MyPics[1]); // alien 1
        
    $("#pic_alien").html($alien[0]);
        
    $("#pic_left").html($current_concept_l);
      
    $("#pic_right").html($current_concept_r);
      
    //Play the sound for the left word then the sound for the right word
  
      
    $current_sound_l.get(0).play();
    
    //var MySound1 = $('#sound_left')[0];
    //MySound1.setAttribute('src', 'sounds/'+current_sound_l);
    //MySound1.play();
      
    //$('#sound_left').on('ended', function() {
    
    $current_sound_l.on('ended', function() {
        
    $("#word_left").css({"background-color": "white"});
        
    $("#pic_alien").html($alien[0]);
    
    setTimeout(function(){
       
    $current_sound_r.get(0).play();
        
    //var MySound2 = $('#sound_right')[0];
    //MySound2.setAttribute('src', 'sounds/'+current_sound_r);
    //MySound2.play();
                          
    }, 500);   
    });
    
    //$('#sound_left').on('playing', function() {

    $current_sound_l.on('playing', function() {
    
    $("#word_left").css({"background-color": "#81F781"});
        
    $("#pic_alien").html($alien[1]);
        
    });
      
    //$('#sound_right').on('playing', function() {
    $current_sound_r.on('playing', function() {
    
    $("#word_right").css({"background-color": "#81F781"});
        
    $("#pic_alien").html($alien[1]);
        
    });

    //$('#sound_right').on('ended', function() {
    $current_sound_r.on('ended', function() {

    
    $("#word_right").css({"background-color": "white"});
        
    $("#pic_alien").html($alien[0]);
        
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
          
        experiment.data.tri_order.push(current_trial.trial_order);  
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.session.push(current_trial.session);  
        experiment.data.con_dist.push(current_trial.concept_dist);
        experiment.data.sou_dist.push(current_trial.sound_dist);
        
        experiment.data.answer.push(userAnswer);
        
        experiment.data.rt.push(endTime - startTime);
        
        experiment.data.condition.push(condition_name);
        
        experiment.data.subCondition.push(sub);
                
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 500);
      }
    };
    
   
    $(document).one("keydown", keyPressHandler);
    }
  }
  }

