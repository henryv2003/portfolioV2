import { useEffect, useState } from "react";

export const SnowfallBackground = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    generateSnowflakes();

    const handleResize = () => {
      generateSnowflakes();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSnowflakes = () => {
    const numberOfSnowflakes = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newSnowflakes = [];

    for (let i = 0; i < numberOfSnowflakes; i++) {
      newSnowflakes.push({
        id: i,
        size: Math.random() * 8 + 2, // Size between 2-10px
        x: Math.random() * 100, // Random x position (0-100%)
        delay: Math.random() * 5, // Random delay (0-5s)
        duration: Math.random() * 10 + 10, // Duration between 10-20s
        drift: Math.random() * 100 - 50, // Horizontal drift (-50px to 50px)
        opacity: Math.random() * 0.6 + 0.4, // Opacity between 0.4-1
      });
    }

    setSnowflakes(newSnowflakes);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake animate-snowfall"
          style={{
            width: snowflake.size + "px",
            height: snowflake.size + "px",
            left: snowflake.x + "%",
            animationDelay: snowflake.delay + "s",
            animationDuration: snowflake.duration + "s",
            opacity: snowflake.opacity,
            "--drift": snowflake.drift + "px",
          }}
        />
      ))}
    </div>
  );
};
