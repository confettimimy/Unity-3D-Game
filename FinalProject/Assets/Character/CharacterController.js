#pragma strict
public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;
//private var velocity : Vector3;


function Start () {
	//animation["Walk"].speed = 2.0;
	
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	controller.transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
	}
	/*if(controller.isGrounded){
		//velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vectical"));
		velocity *= walkSpeed;

		if(velocity.magnitude > 0.5)
		{
			animation.CrossFade("Walk",0.1);		
			transform.LookAt(transform.position + velocity);
		}else
		{	
			animation.CrossFade("Idle",0.1);		
		}
	}
	velocity.y -= gravity * Time.deltaTime;
	controller.Move(velocity*Time.deltaTime);
}*/
