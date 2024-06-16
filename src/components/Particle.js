import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 80, // Adjust density here
            density: {
              enable: true,
              value_area: 800, // Adjust density area here
            },
          },
          size: {
            value: 1, // Adjust particle size here
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
