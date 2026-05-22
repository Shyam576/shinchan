"use client";
import { useRef } from "react";

interface Props {
  onSigned: () => void;
  onCleared: () => void;
}

export default function SignaturePad({ onSigned, onCleared }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const hasFiredSigned = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  function getPos(
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement
  ) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  function startDraw(e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) {
    if ("touches" in e) e.preventDefault();
    isDrawing.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    lastPos.current = getPos(e, canvas);
  }

  function draw(e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) {
    if ("touches" in e) e.preventDefault();
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pos = getPos(e, canvas);
    if (lastPos.current) {
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = "#1F1F1F";
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }
    lastPos.current = pos;
    if (!hasFiredSigned.current) {
      hasFiredSigned.current = true;
      onSigned();
    }
  }

  function stopDraw() {
    isDrawing.current = false;
    lastPos.current = null;
  }

  function clearPad() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasFiredSigned.current = false;
    onCleared();
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-widest">
          Release Authorization — Sign Below
        </span>
        <button
          type="button"
          onClick={clearPad}
          className="text-xs text-[#9CA3AF] hover:text-[#FF5A5F] transition-colors font-medium"
        >
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={460}
        height={90}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
        className="w-full border-2 border-dashed border-[#9CA3AF] rounded-xl cursor-crosshair select-none touch-none block"
        style={{ background: "#FFF8E7" }}
      />
      <p className="text-[10px] text-[#9CA3AF] text-center mt-1.5">
        Sign to authorize the deployment
      </p>
    </div>
  );
}
