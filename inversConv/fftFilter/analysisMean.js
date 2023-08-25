var buf=new Buffer("fftAnalysis");//name of the analysis buffer

function binMean(fftSize)
{
	var frames=buf.framecount();
	var numBins=frames/(fftSize*0.5);
	outlet(0,numBins);
}

function invertBuffer(name)
{
	buf=new Buffer(name);
	var frames=buf.framecount();
	var samples=new Array;
	samples=buf.peek(1,0,frames);
	for(var i=0;i<frames;i++)
	{
		samples[i]=1-samples[i];
	};
	buf.poke(1,0,samples);
}