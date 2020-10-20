#pragma strict
private var score : int = 0; 
public var skin : GUISkin = null;
public var celebratePrefab : GameObject;
public var airPrefab1 : GameObject;
public var airPrefab2 : GameObject;
private var timer : float = 3.0;
private var sustainTime : float = 0.5;


function CatchCriminals()
{

	score+=1;
	Instantiate(celebratePrefab, transform.position, transform.rotation);

     if(score>=5)
	{	
		Application.LoadLevel("End");			
	}

}

function CatchCommon()
{

     Instantiate(airPrefab1, transform.position, transform.rotation);
     Instantiate(airPrefab2, transform.position, transform.rotation);

}

function OnGUI()
{
	GUI.skin = skin;

    var rect : Rect = Rect(0, 0, Screen.width, Screen.height);
    GUI.Label(rect, "catch " + score.ToString()+ " criminals","score");
}


