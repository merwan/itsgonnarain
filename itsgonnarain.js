let audioContext = new AudioContext();

fetch('itsgonnarain.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();
    let loopStart = 3.5;
    let loopEnd = 4.3;
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = true;
    sourceNode.loopStart = loopStart;
    sourceNode.loopEnd = loopEnd;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, loopStart);
  })
  .catch(e => console.error(e));
