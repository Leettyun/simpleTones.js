javascript:{AudioContext = window.AudioContext || window.webkitAudioContext;fcontext=new AudioContext();o=null;g=null;function playSound(waveType,startFreq,endTime){oscillatorNode=context.createOscillator();gainNode=context.createGain();oscillatorNode.type=waveType;oscillatorNode.frequency.setValueAtTime(startFreq, context.currentTime);for(i=3;i<arguments.length;i+=2){oscillatorNode.frequency.exponentialRampToValueAtTime(arguments[i], context.currentTime+arguments[i+1]);};gainNode.gain.setValueAtTime(0.3, context.currentTime);gainNode.gain.exponentialRampToValueAtTime(0.1, context.currentTime+0.5);oscillatorNode.connect(gainNode);gainNode.connect(context.destination);oscillatorNode.start();oscillatorNode.stop(context.currentTime+endTime);};alert('!');};
