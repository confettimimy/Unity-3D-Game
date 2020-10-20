#pragma strict

public var moveSpeed : float = 10f;

		


function Update ()
{
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
       
  
}