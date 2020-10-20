#pragma strict

var interval : float;
var Basic0001_Walk : GameObject;
var Basic0002_Walk : GameObject;
var Basic01_Run : GameObject;
var Basic02_Run : GameObject;
var Basic03_Run : GameObject;



private var timer : float;

function Start () {

    timer= 0.0;
	
}

function Update () {

      timer -= Time.deltaTime;
      if(timer < 0.0)
      {

          Instantiate(Basic0001_Walk, transform.position, transform.rotation);
          Instantiate(Basic0002_Walk, transform.position, transform.rotation);
          Instantiate(Basic01_Run, transform.position, transform.rotation);
          Instantiate(Basic02_Run, transform.position, transform.rotation);
          Instantiate(Basic03_Run, transform.position, transform.rotation);



          timer = interval;



      }
	
}
