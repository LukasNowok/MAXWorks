var lowLimit=50;
var hiLimit=10000;

function prepend(value, array) 
{
  var newArray = array.slice();
  newArray.unshift(value);
  return newArray;
}

function list(list)
{
	list=arrayfromargs(arguments);//get a list from input argument
	var length=list.length;
	for(var i=0;i<length;i+=2)
	{
		if(list[i]<=lowLimit)
		{
			list[i+1]=0;
		};
		if(list[i]>=hiLimit)
		{
			list[i+1]=0;
		};
	};
	outlet(0,this.prepend('response',list));
}