inlets=1;
outlets=8;
function list(list)
{
	list=arrayfromargs(arguments);//get a list from input argument
	//post(list+"\n");
	if(list[0]!=144)
	{
		switch(list[0])
		{
			case 224: 
				{outlet(0,this.formatOutput(list))};
				break;
			case 225: 
				{outlet(1,this.formatOutput(list))};
				break;
			case 226: 
				{outlet(2,this.formatOutput(list))};
				break;
			case 227: 
				{outlet(3,this.formatOutput(list))};
				break;
			case 228: 
				{outlet(4,this.formatOutput(list))};
				break;
			case 229: 
				{outlet(5,this.formatOutput(list))};
				break;
			case 230: 
				{outlet(6,this.formatOutput(list))};
				break;
			case 231: 
				{outlet(7,this.formatOutput(list))};
				break;
		}
	}
}

function formatOutput(list)
{
	var value;
	value = list[2]+(list[1]/112);
	//post(value+"\n");
	return(value);
}