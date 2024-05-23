"use client"
import React, { useRef, useEffect } from "react";

const AvatarGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawAvatar = (ctx: CanvasRenderingContext2D) => {
    // Random color for the background
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const bgColor = randomColor();

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 100, 100);

    // Eyes
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(30, 40, 7, 0, Math.PI * 2, true); // Left eye
    ctx.arc(70, 40, 7, 0, Math.PI * 2, true); // Right eye
    ctx.fill();

    // Smile
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 5;
    ctx.beginPath();
    // Adjust the endpoints and curvature to make the smile wider, closer to the eyes, and to the right
    ctx.arc(60, 55, 20, 0.2 * Math.PI, 0.8 * Math.PI, false); // Mouth
    ctx.stroke();
  };

  const generateAvatar = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawAvatar(ctx);
      }
    }
  };

  useEffect(() => {
    generateAvatar();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Avatar Generator</h1>
      <canvas
        ref={canvasRef}
        width={100}
              height={100}
              className="rounded"
        style={{ border: "1px solid #000" }}
      />
      <div>
        <button
          onClick={generateAvatar}
          style={{ marginTop: 20, padding: 10, fontSize: 16 }}
        >
          Generate Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;
