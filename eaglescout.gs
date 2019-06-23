function eagleScout() {
  // function eagleScout
  // creates a ransomly selected message to be sent to specified device
  // the messages written were to help motivate my friend to become eagle scout
  messageLibrary = ["Why aren't you an Eagle Scout yet?",
                 "It's honestly not that hard, ",
                 "Your brother is an eagle scout, if he can do it you can",
                 "GIVE ME AN 'E'.... GIVE ME AN 'A'.... GIVE ME A 'G'.... GIVE ME AN 'L'.... GIVE ME AN 'E'............That's not you",
                 "Your mother is a pro at making eagles, shes happy to help.",
                 "Do it because it took this much time to make this program for you  :) ",
                 "I don't do motivational stuff, are you eagle yet",
                 "Comeon, its a resume booster!!",
                 "Eagle eagle eagle eagle eagle",
                 "Keithey weathey lemon squeazy. Make eagle.",
                 "If I can make this program, you can make eagle.",
                 "your mom 'doesnt give a rats ass', make eagle.",
                 "your brother thinks you're chicken",
                 "What did the chicken say to the eagle?.....I wish I was you",
                 "People respect eagles and eat chickens. Remember that."];
  
  var x = messageLibrary.length;
  var randomNum = Math.floor(Math.random() * (x-1)) + 1;
  var todaysMessageIs = messageLibrary[randomNum];

  // In the case of my friend, the string follows the format of phonenumber@vtext.com
  var targetDevice = 'your string'; // edit this line
  subject = '' // edit this line if need be
  
  var timezone = Session.getScriptTimeZone();
  var today = Utilities.formatDate(new Date(), timezone, "yy-MM-dd HH:mm:ss");
  // this is the day my friend turns 18, so we will use this to format the message being sent 
  // as he approaches his 18th birthday. 
  var judgementDay = '18-04-21 00:00:00'; 
  
  if(judgementDay <= today){
    alertMessage1 = "\"uhoh!\" and/or \"Hooray!!!\", better be hooray ";
    
    GmailApp.sendEmail(targetDevice, subject, alertMessage1)
    }
  else if(today >= '18-02-21 00:00:00'){
    alertMessage2 = "2 months till you're 18, hope you're an eagle scout";
    
    GmailApp.sendEmail(targetDevice, subject, alertMessage2)
    }
  else{
    GmailApp.sendEmail(targetDevice, subject, todaysMessageIs)
    } 
   
}
