/*#pragma strict

var velocity : float = 8.0;
var moveDelay : float = 1.0;
var sustainTime : float = 0.2;
yield WaitForSeconds(sustainTime);
var moveSpeed : float = 0.0;


function Start () {


    yield WaitForSeconds(moveDelay);
   
      var player : GameObject = GameObject.FindWithTag("Player");

      if(player != null)
      {
          var direction : Vector3 = (player.transform.position - transform.position).normalized;
         //transform.Translate(direction * moveSpeed * Time.deltaTime);

       //    var rb = GetComponent.<Rigidbody>();
      //    rb.AddForce(direction * velocity, ForceMode.VelocityChange); //힘의 방향과 크
   
      }



    //  yield WaitForSeconds(sustainTime);

     //Destroy(gameObject);


}

function Update () {

	  var player : GameObject = GameObject.FindWithTag("Player");

      if(player != null)
      {
          var direction : Vector3 = (player.transform.position - transform.position).normalized;
       //  var rb = GetComponent.<Rigidbody>();
      //    rb.AddForce(direction * velocity, ForceMode.VelocityChange);

          transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
 
      }

}
*/
