#pragma strict

var timer : float;
var fbs : float ;

function Start () {
	
}

function Update () {

    timer = Time.deltaTime;
    Debug.Log("timer :" + timer/fbs + "seconds");
	
}

function OnGUI()
{
     var w : int = Screen.width;
     var h : int = Screen.height;

     var style : GUIStyle = new GUIStyle();


     var rect : Rect = new Rect(0, h/2, w, h/4);
     style.alignment = TextAnchor.UpperLeft;
     style.fontSize= h*2/100;
     style.normal.textColor = new Color(0.0f, 0.0f, 0.5f, 1.0f);
     var msec : float = Time.deltaTime*1000.0f;
     fbs =1.0f/Time.deltaTime;
     var text : String = String.Format("{0:0.0} ms ({1:0.}fbs)", msec, fbs);
     GUI.Label(rect, text, style);



}

