#pragma strict

function Start(){

}

function Update(){

}

/*function OntriggerEnter(other:Collider){

   if(other.gameObject.tag == "person1")
   {
       var respawn : GameObject = GameObject.FindWithTag("Respawn");
       other.gameObject.transform.position = respawn.transform.position;
   }

}*/

function OnControllerColliderHit(hit:ControllerColliderHit){

  if(gameObject.tag == "person1")
   {
       var respawn : GameObject = GameObject.FindWithTag("Respawn");
       gameObject.transform.position = respawn.transform.position;
   }

}
