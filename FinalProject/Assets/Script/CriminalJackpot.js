#pragma strict

var interval : float;
var criminal : GameObject;


private var timer : float;

function Start () {

    timer= 0.0;
	
}

function Update () {

      timer -= Time.deltaTime;
      if(timer < 0.0)
      {

        Instantiate(criminal, transform.position, transform.rotation);
        Instantiate(criminal, transform.position, Quaternion.identity);
        Instantiate(criminal, transform.position, transform.rotation);
        Instantiate(criminal, transform.position, Quaternion.identity);
        Instantiate(criminal, transform.position, transform.rotation);
        Instantiate(criminal, transform.position, Quaternion.identity);



        timer = interval;
     
      }
	
}