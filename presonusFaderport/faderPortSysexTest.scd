MIDIClient.init;

//select presonus faderport 16
m=MIDIOut(5);

m.sysex(Int8Array[0xf0, 00, 01, 06, 02, 00, 01, 06, 16, 0xf7]);
m.sysex(Int8Array[0xf0, 00, 01, 06, 02, 13, 0x00, 12, 0xf7]);
m.sysex(Int8Array[0xf0, 0, 1, 6, 2, 2, 0, 0, 0, 54, 65, 73, 74, 20, 20, 20, 0xf7]);


//set fader (index,value)
m.bend(1,0);




//x-touch control
m=MIDIOut(7);

m.touch(0,15);

m.sysex(Int8Array[0xf0, 00, 00, 66, 58, 20, 42, 43, 68, 20, 31, 00, 00, 00, 20, 20, 20, 20, 61, 42, 33, 0xf7]);

{inf.do{m.sysex(Int8Array[0xf0,0x00,0x00,0x66,0x14,0x00,0xf7]);postln("do");3.wait}}.fork