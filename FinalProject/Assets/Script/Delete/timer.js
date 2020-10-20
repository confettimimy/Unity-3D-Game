/*private var startTime : float; 
private var restSeconds : float; 
private var roundedRestSeconds : int; 
private var displaySeconds : float; 

public var CountDownSeconds :  int; 
private var Timeleft : float; 
var timetext : String; 


function Start () 
{ 
    startTime=Time.deltaTime; 

} 

function OnGUI() 
{ 

    Timeleft= Time.time-startTime; 

    restSeconds = CountDownSeconds-(Timeleft); 

    roundedRestSeconds=Mathf.CeilToInt(restSeconds); 
    displaySeconds = roundedRestSeconds % 11; 

    timetext = (displaySeconds.ToString()+""); 


    GUI.Label(new Rect(100f, 100f, 100f, 100f), timetext); 
  
}*/