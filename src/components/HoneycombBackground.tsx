import { useEffect, useRef } from "react";

export const HoneycombBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      // Resize canvas to fit window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const radius = 30;
      const hexHeight = Math.sqrt(3) * radius;
    //   const hexWidth = 2 * radius;
      const vertSpacing = hexHeight;
      const horizSpacing = 1.5 * radius;

      const drawHexagon = (x: number, y: number) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const px = x + radius * Math.cos(angle);
          const py = y + radius * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.fill();
      };

      for (let row = 0; row < canvas.height / vertSpacing + 1; row++) {
        for (let col = 0; col < canvas.width / horizSpacing + 1; col++) {
          const x = col * horizSpacing;
          const y = row * vertSpacing + (col % 2 === 0 ? 0 : vertSpacing / 2);
          drawHexagon(x, y);
        }
      }
    };

    draw(); // initial draw
    window.addEventListener("resize", draw); // redraw on resize
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};