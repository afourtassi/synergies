
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

var side = [
      {"left":"choice1", "right":"choice2"},
      {"left":"choice2", "right":"choice1"} ],
    mySideBinding= randomElement(side),
    leftSame=(mySideBinding["left"]=="choice1");

if(leftSame){
    $("#choice1").css({"float": "left"});
    $("#choice2").css({"float": "right"});
    $("#space").css({"float": "left"});
} else {
    $("#choice1").css({"float": "right"});
    $("#choice2").css({"float": "left"});
    $("#space").css({"float": "right"});
}

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
var cond = 1;

//Pick a sub-condition for the joint condition 
//var sub = randomInt(0,3);
var sub=3;

var subJoint=[[0,3,1,2],
             [1,2,0,3],
             [2,1,3,0],
             [3,0,2,1]];

var myInstruction="";

    
var condition_name = "All";

    
var myInstruction= "Now";

  
      
var ConStim_left=['cow','cow','cow','cow',
                  'cow','cow','cow','cow',
              'grey','grey','grey','grey',
             'cow','cow','cow','cow'];

var ConStim_right=['buffle','deer','bird', 'car',
                   'buffle','deer','bird', 'car',
              'grey','grey','grey','grey',
             'buffle','deer','bird', 'car'];

var SounStim_left=['aba01','aba01','aba01','aba01',
                   'aba01','aba01','aba01','aba01',
              'aba01','aba01','aba01','aba01',
             'beep','beep','beep','beep'];

var SounStim_right=['aba03','aba05','aba07','aba09',
                    'aba03','aba05','aba07','aba09',
              'aba03','aba05','aba07','aba09',
             'beep','beep','beep','beep'];

var condition=['joint','joint','joint','joint',
               'joint','joint','joint','joint',
              'sound','sound','sound','sound',
             'concept','concept','concept','concept'];


var SoundToConcept_joint1=subJoint[sub],
    SoundToConcept_joint2=subJoint[sub],
    SoundToConcept_sound=shuffleArray([0,1,2,3]),
    SoundToConcept_pic=shuffleArray([0,1,2,3]); 

//var SoundToConcept=SoundToConcept_joint.concat(SoundToConcept_sound, SoundToConcept_pic);



//Pre_traning both:

var ConStim_pre = ['phone','lion','apple2', 'sandwich'];
var SounStim_pre = ['phone','lion','apple', 'food'];

//Pre_traning sound:

var ConStim2_pre=['grey','grey','grey','grey'];
var SounStim2_pre=['bee','dee','path','bath'];

//Pre_traning picture:

var ConStim3_pre=['lion','apple2','phone'];
var SounStim3_pre=['beep','beep','beep'];

var diff=[1,1,0,0,1,0,0,1,1,0,1];


//Preloading the Concept training stimuli:
///////////////
//left concept
var $concept_pre_0 = new Array();
for (i=0; i < ConStim_pre.length; i++){
$concept_pre_0.push($('<img>').attr('src','images/apple.jpg').height(150).width(200));
}
for (i=0; i < 4; i++){
$concept_pre_0.push($('<img>').attr('src','images/grey.jpg').height(150).width(200));
}
for (i=0; i < ConStim_pre.length; i++){
$concept_pre_0.push($('<img>').attr('src','images/apple.jpg').height(150).width(200));
}

//right concept
var $concept_pre_1 = new Array();
for (i=0; i < ConStim_pre.length; i++){
$concept_pre_1.push($('<img>').attr('src','images/'+ConStim_pre[i]+'.jpg').height(150).width(200));
}
for (i=0; i < 4; i++){
$concept_pre_1.push($('<img>').attr('src','images/grey.jpg').height(150).width(200));
}
for (i=0; i < ConStim3_pre.length; i++){
$concept_pre_1.push($('<img>').attr('src','images/'+ConStim3_pre[i]+'.jpg').height(150).width(200));
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

//Sound Only training trials, left
$sound_pre_0.push($('<audio>').attr('src','sounds/bee.mp3').attr("preload", "auto"));
$sound_pre_0.push($('<audio>').attr('src','sounds/bee.mp3').attr("preload", "auto"));
$sound_pre_0.push($('<audio>').attr('src','sounds/path.mp3').attr("preload", "auto"));
$sound_pre_0.push($('<audio>').attr('src','sounds/path.mp3').attr("preload", "auto"));

for (i=0; i < SounStim3_pre.length; i++){
$sound_pre_0.push($('<audio>').attr('src','sounds/beep.mp3').attr("preload", "auto"));
} 

var $sound_pre_1 = new Array();
for (i=0; i < SounStim_pre.length; i++){
$sound_pre_1.push($('<audio>').attr('src','sounds/'+SounStim_pre[i]+'.mp3').attr("preload", "auto"));
}

//Sound Only training trials, right
//////////////////////////////////

$sound_pre_1.push($('<audio>').attr('src','sounds/d.mp3').attr("preload", "auto"));
$sound_pre_1.push($('<audio>').attr('src','sounds/bee.mp3').attr("preload", "auto"));
$sound_pre_1.push($('<audio>').attr('src','sounds/path.mp3').attr("preload", "auto"));
$sound_pre_1.push($('<audio>').attr('src','sounds/bath.mp3').attr("preload", "auto"));

for (i=0; i < SounStim3_pre.length; i++){
$sound_pre_1.push($('<audio>').attr('src','sounds/'+SounStim3_pre[i]+'.mp3').attr("preload", "auto"));
}

var $good=$('<audio>').attr('src','sounds/good.mp3').attr("preload", "auto");

var $bad=$('<audio>').attr('src','sounds/oops.mp3').attr("preload", "auto");

var $applause=$('<audio>').attr('src','sounds/applause.mp3').attr("preload", "auto");


//shuffle the training order of exposure 
var Trials_pre=[0,1,2,3,4,5,6,7,8,9,10];

//Concept-sound mapping (here identical)
var SoundToConcept_pre=[0,1,2,3,4,5,6,7,8,9,10]; 



//////////////////////////////////
//Preloading the real stimuli:
///////////////////

//left concept
var $concept_0 = new Array();
for (i=0; i< ConStim_left.length; i++){
$concept_0.push($('<img>').attr('src','images/'+ConStim_left[i]+'.jpg').height(150).width(200));
}

//right concept
var $concept_1 = new Array();
for (i=0; i < ConStim_right.length; i++){
$concept_1.push($('<img>').attr('src','images/'+ConStim_right[i]+'.jpg').height(150).width(200));
}

//left sound
var $sound_0 = new Array(); 
for (i=0; i < SounStim_left.length; i++){
$sound_0.push($('<audio>').attr('src','sounds/'+SounStim_left[i]+'.mp3').attr("preload", "auto"));
} 

//right sound
var $sound_1 = new Array();
for (i=0; i < SounStim_right.length; i++){
$sound_1.push($('<audio>').attr('src','sounds/'+SounStim_right[i]+'.mp3').attr("preload", "auto"));
}

//shuffle order of exposure

var Trials_joint1=shuffleArray([0,1,2,3]),
    Trials_joint2=shuffleArray([0,1,2,3]),
    Trials_sound=shuffleArray([0,1,2,3]),
    Trials_pic=shuffleArray([0,1,2,3]);




 //Build trial sequence:

var myTrials=[];
var total_pre= Trials_pre.length;
var total_joint1= Trials_joint1.length,
    total_joint2= Trials_joint2.length,
    total_sound= Trials_sound.length,
    total_pic= Trials_pic.length;
//var totalTrials = totalPre + totalReal +2;

// I assume here that Sound and Concept continua are of the same length 

//First Instructions:

myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "first",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        myconditon:''
        
        });

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "joint",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        myconditon:''
        
        });

//Pre-trials
for (i=0; i < 4; i++){
    myTrial = {
        trial_number: 0,
        trial_order:Trials_pre[i]+1,
        trial_type: "pre",
        session:0,
        concept_l:$concept_pre_0[Trials_pre[i]],
        concept_r:$concept_pre_1[Trials_pre[i]],
        concept_dist:'',
        sound_l:$sound_pre_0[SoundToConcept_pre[Trials_pre[i]]],
        sound_r:$sound_pre_1[SoundToConcept_pre[Trials_pre[i]]],
        sound_dist:'',
        different:diff[Trials_pre[i]],
        mycondition:'pre'
        //sound_dist:''
    }
    myTrials.push(myTrial);
}

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "sound",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        myconditon:''
        
        });

//Pre-trials
for (i=0; i < 4; i++){
    myTrial = {
        trial_number: 0,
        trial_order:Trials_pre[i]+1,
        trial_type: "pre",
        session:0,
        concept_l:$concept_pre_0[4+Trials_pre[i]],
        concept_r:$concept_pre_1[4+Trials_pre[i]],
        concept_dist:'',
        sound_l:$sound_pre_0[4+SoundToConcept_pre[Trials_pre[i]]],
        sound_r:$sound_pre_1[4+SoundToConcept_pre[Trials_pre[i]]],
        sound_dist:'',
        different:diff[4+Trials_pre[i]],
        mycondition:'pre'
        //sound_dist:''
    }
    myTrials.push(myTrial);
}
//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "concept",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        myconditon:''
        
        });

//Pre-trials
for (i=0; i < 3; i++){
    myTrial = {
        trial_number: 0,
        trial_order:Trials_pre[i]+1,
        trial_type: "pre",
        session:0,
        concept_l:$concept_pre_0[8+Trials_pre[i]],
        concept_r:$concept_pre_1[8+Trials_pre[i]],
        concept_dist:'',
        sound_l:$sound_pre_0[8+SoundToConcept_pre[Trials_pre[i]]],
        sound_r:$sound_pre_1[8+SoundToConcept_pre[Trials_pre[i]]],
        sound_dist:'',
        different:diff[8+Trials_pre[i]],
        mycondition:'pre'
        //sound_dist:''
    }
    myTrials.push(myTrial);
}

//Instructions joint

myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "ready",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });

myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "joint",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });

//Trials joint 1
for (i=0; i < total_joint1; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_joint1[i]+1,
        trial_type: "real",
        session:1,
        concept_l:$concept_0[Trials_joint1[i]],
        concept_r:$concept_1[Trials_joint1[i]],
        concept_dist:Trials_joint1[i]+1,
        sound_l:$sound_0[SoundToConcept_joint1[Trials_joint1[i]]],
        sound_r:$sound_1[SoundToConcept_joint1[Trials_joint1[i]]],
        sound_dist: SoundToConcept_joint1[Trials_joint1[i]]+1,
        different:'',
        mycondition:'joint'
    }
    
    myTrials.push(myTrial);
}

myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "joint",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });

//Trials joint 2
for (i=0; i < total_joint2; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_joint2[i]+1,
        trial_type: "real",
        session:2,
        concept_l:$concept_0[4+Trials_joint2[i]],
        concept_r:$concept_1[4+Trials_joint2[i]],
        concept_dist:Trials_joint2[i]+1,
        sound_l:$sound_0[4+SoundToConcept_joint2[Trials_joint2[i]]],
        sound_r:$sound_1[4+SoundToConcept_joint2[Trials_joint2[i]]],
        sound_dist: SoundToConcept_joint2[Trials_joint2[i]]+1,
        different:'',
        mycondition:'joint'
    }
    
    myTrials.push(myTrial);
}


//Instructions real sound
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "sound",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });

//Real trials sound
for (i=0; i < total_sound; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_sound[i]+1,
        trial_type: "real",
        session:1,
        concept_l:$concept_0[8+Trials_sound[i]],
        concept_r:$concept_1[8+Trials_sound[i]],
        concept_dist:Trials_sound[i]+1,
        sound_l:$sound_0[8+SoundToConcept_sound[Trials_sound[i]]],
        sound_r:$sound_1[8+SoundToConcept_sound[Trials_sound[i]]],
        sound_dist: SoundToConcept_sound[Trials_sound[i]]+1,
        different:'',
        mycondition:'sound'
    }
    
    myTrials.push(myTrial);
}

//Instructions real pic
myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "concept",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });

//Real trials picture
for (i=0; i < total_pic; i++){
    myTrial = {
        trial_number: i+1,
        trial_order:Trials_pic[i]+1,
        trial_type: "real",
        session:1,
        concept_l:$concept_0[12+Trials_pic[i]],
        concept_r:$concept_1[12+Trials_pic[i]],
        concept_dist:Trials_pic[i]+1,
        sound_l:$sound_0[12+SoundToConcept_pic[Trials_pic[i]]],
        sound_r:$sound_1[12+SoundToConcept_pic[Trials_pic[i]]],
        sound_dist: SoundToConcept_pic[Trials_pic[i]]+1,
        different:'',
        mycondition:'concept'
    }
    
    myTrials.push(myTrial);
}

myTrials.push(myTrial={
        trial_number: 0,
        trial_order:'',
        trial_type: "great",
        session:0,
        concept_l:'',
        concept_r:'',
        concept_dist:'',
        sound_l:'',
        sound_r:'',
        sound_dist: '',
        different:'',
        mycondition:''
        });


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
  sideBinding: mySideBinding,
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
    var current_trial = experiment.trials.shift();
    experiment.playthis(current_trial);
  },
    
  playthis: function(current_trial) {
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    
    if (current_trial.trial_type == "great")
        {
            showSlide("great");
            $applause.get(0).play();
        }
      
    if (current_trial.trial_type == "joint")
        {
            showSlide("joint");
        }
      
    if (current_trial.trial_type == "sound")
        {
            showSlide("sound");
        
        }
    
    if (current_trial.trial_type == "concept")
        {
            showSlide("concept");
        
        } 
      if (current_trial.trial_type == "ready")
        {
            showSlide("ready");
        
        }
      
      if (current_trial.trial_type == "first")
        {
            showSlide("stage");
            $("#word_left").css({"background-color": "white"});
            $("#pic_left").html($concept_pre_0[0]);
            $("#pic_right").html($concept_pre_1[0]);
        }
      
      
    if (current_trial.trial_type == "pre" || current_trial.trial_type == "real") 
    {
        
        var $current_concept_l= current_trial.concept_l;
      
        var $current_concept_r= current_trial.concept_r;
      
        var $current_sound_l= current_trial.sound_l;
      
        var $current_sound_r= current_trial.sound_r;
        
        
    showSlide("stage");
    
    $( "#word_right" ).css({ "left":"0%","top": "20%" });
        
    $("#next").hide();   
        
    $("#pic_left").html($current_concept_l);
      
    $("#pic_right").html($current_concept_r);
      
    //Play the sound for the left word then the sound for the right word
  
      
    $current_sound_l.get(0).play();
    
    $current_sound_l.on('ended', function() {
        
    $("#word_left").css({"background-color": "white"});
    
    setTimeout(function(){
       
    $current_sound_r.get(0).play();
                          
    }, 500);   
    });
    

    $current_sound_l.on('playing', function() {
    
    //here hide choice1 and choice2 div to prevent kids from answering before the end of the stim
        
    $("#word_left").css({"background-color": "#81F781"});
        
        
    });
      
    //$('#sound_right').on('playing', function() {
    $current_sound_r.on('playing', function() {
    
    $("#word_right").css({"background-color": "#81F781"});
                
    });

    $current_sound_r.on('ended', function() {

    $("#word_right").css({"background-color": "white"});
        
    setTimeout(function(){
    $(document).one("mousedown", mouseDownHandler); 
    }, 200);   
    
        
    });
    
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
    
    var mouseDownHandler = function(event) {
    
    var ch1_col = $(event.target).closest("div").is("#choice1");
    var ch1_word = $(event.target).closest("div").is("#word_left");
    var ch1_pic = $(event.target).closest("div").is("#pic_left");
        
    var ch1= ch1_col || ch1_word || ch1_pic;
        
    var ch2 = $(event.target).is("#choice2");
        
    if (!(ch1) && !(ch2)) {
       $(document).one("mousedown", mouseDownHandler); 
        
    } else {            
    var endTime = (new Date()).getTime(),
        userAnswer = ch1? 0:1;
   
    if (current_trial.trial_type == "pre" && current_trial.different != userAnswer ){

    $bad.get(0).play();
        
    $bad.one('playing', function() {
    showSlide("feedback");
    $("#feedback").css({"background-color":"red"});
    });
        
    
    $bad.one('ended', function() {
    experiment.playthis(current_trial);
    }); 
        
    //$(document).one("mousedown", mouseDownHandler);
    
    } else {
        
    if (current_trial.trial_type == "real"){
        
    if (leftSame){
    if (ch1){
    $( "#word_right" ).animate({ "left": "-20%", "top":"-80%" }, "slow" );
    } else {
    $( "#word_right" ).animate({ "left": "27%", "top":"-95%" }, "slow" );   
    }
    } else {
    if (ch1){
    $( "#word_right" ).animate({ "left": "20%", "top":"-80%" }, "slow" );
    } else {
    $( "#word_right" ).animate({ "left": "-27%", "top":"-95%" }, "slow" );   
    }
    }
    }
    if (current_trial.trial_type == "pre"){
    $good.get(0).play();
        
    $good.one('playing', function() {
    showSlide("feedback");
    $("#feedback").css({"background-color":"green"});
    });
        
    $good.one('ended', function() {
    showSlide("stage");
    //experiment.next();
    }); 
    }
    experiment.data.tri_number.push(current_trial.trial_number);
    experiment.data.tri_order.push(current_trial.trial_order);  
    experiment.data.tri_type.push(current_trial.trial_type);
    experiment.data.session.push(current_trial.session);  
    experiment.data.con_dist.push(current_trial.concept_dist);
    experiment.data.sou_dist.push(current_trial.sound_dist);
        
    experiment.data.answer.push(userAnswer);
        
    experiment.data.rt.push(endTime - startTime);
        
    experiment.data.condition.push(current_trial.mycondition);
        
    experiment.data.subCondition.push(sub);
        
    
        
    setTimeout(function(){
    $("#next").show();
                          
    }, 500);
    
    }     // the end of the condition on clicking on either Choice1 or Choice2      
        // Wait 500 milliseconds before starting the next trial.
    //setTimeout(experiment.next, 2000);
    
    }
    };
        

    //$(document).one("mousedown", mouseDownHandler);
    
    
    }
  }
  }

