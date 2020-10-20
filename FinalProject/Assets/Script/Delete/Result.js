/*#pragma strict
@script RequireComponent(Scorekeeper)

var skin : GUISkin = null;

private var scorekeeper : Scorekeeper;
private var state : String;

function Start () {
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;	
}

function Update () {
	
}


function TimeUp(){

	state = "Time Up";
	yield WaitForSeconds(180.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Show Score";

	while(!Input.GetButtonDown("Fire1"))
	yield;

	Application.LoadLevel("Title");

}

function OnGUI(){

	GUI.skin = skin;

	var sw : int = Screen.width;
	var sh : int = Screen.height;

	if(state == "Time Up")
	{
		GUI.Label(Rect(0,0,sw,sh),"Time Up! Fail To get the criminals:(");
	}
	else if(state == "Show Score")
	{
		var scoreText: String = "You get the " + scorekeeper.score.ToString()+"criminals";
		GUI.Label(Rect(0,sh/4,sw,sh/4),scoreText);
	}
}
*/