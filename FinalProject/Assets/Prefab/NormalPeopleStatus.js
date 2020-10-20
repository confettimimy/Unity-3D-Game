public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;
private var score : int = 0; 

function Update ()
{

    transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);

}

function OnTriggerEnter(other : Collider)
{

   if(other.gameObject.tag == "fence")
   {
       Destroy(gameObject);
   }

   else if(other.gameObject.tag == "Player")
   {
 	GameObject.FindWithTag("Player").SendMessage("CatchCommon");
 	Destroy(gameObject);
      
   }
}