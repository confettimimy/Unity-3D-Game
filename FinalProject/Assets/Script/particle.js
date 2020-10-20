#pragma strict


public var smokePrefab : GameObject;
public var interval : float;

private var Timer : float;


function Start () {

      Timer = 20.0;

}

function Update () {


      Timer -= Time.deltaTime;
      if(Timer <= 0)
      {
          Instantiate(smokePrefab, transform.position, transform.rotation);
       //    Instantiate(smokePrefab, transform.position, transform.rotation);
        //    Instantiate(smokePrefab, transform.position, transform.rotation);
      //       Instantiate(smokePrefab, transform.position, transform.rotation);
         //     Instantiate(smokePrefab, transform.position, transform.rotation);
          //     Instantiate(smokePrefab, transform.position, transform.rotation);
           //     Instantiate(smokePrefab, transform.position, transform.rotation);
            //     Instantiate(smokePrefab, transform.position, transform.rotation);
           //       Instantiate(smokePrefab, transform.position, transform.rotation);


          Timer = interval;
	  }

}
