import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter() {
  return (
    <div className="App">
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}><strong>SUMAIYA SHAIK</strong></h2>
      <Typewriter
        options={{
          wrapperClassName: 'typewriter-wrapper',
          cursorClassName: 'typewriter-cursor',
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("HLO! ")
            .pauseFor(3000)
            .deleteAll()
            .typeString("I'm a WEB-DEVELOPER")
            .pauseFor(3000)
            .deleteAll()
            .typeString("I'm a FRONT-END DEVELOPER")
            .pauseFor(3000)
            .deleteAll()
            .typeString("I'm a FREELANCER")
            .start();
        }}
      />
    </div>
  );
}

export default TypeWriter;
