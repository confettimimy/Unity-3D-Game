#pragma strict
var skin : GUISkin = null;

function Start () {
	
}

function Update ()
{

	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("Main");
	}
}

function OnGUI()
{
	GUI.skin = skin;

	var sw : int  = Screen.width;
	var sh : int = Screen.height;

	GUI.Label(Rect(0,0,sw,sh),"The Criminals","TheCriminals");
	GUI.Label(Rect(0,sh/4,sw,sh/2),"Hit the Space","ClicktoStart");

}