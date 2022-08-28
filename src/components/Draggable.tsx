import { createRef, useEffect, useState } from "react";
import Box from "./Box";
import "./Draggable.css";

type DraggableProps = {};

export default function Draggable(props: DraggableProps) {
  const [pressed, setPressed] = useState(false);

  const [left, setLeft] = useState(700);
  const [top, setTop] = useState(300);
  const ref = createRef<HTMLInputElement>();

  const [active, setActive] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${left}px, ${top}px)`;
    }
  }, [left, top, ref]);

  // Update the current position if mouse is down

  function mouseMove(e: MouseEvent): void {
    console.log(e.movementX, e.movementY);
    if (pressed) {
      setLeft(left + e.movementX);
      setTop(top + e.movementY);
    }
    e.stopPropagation();
    e.preventDefault();
  }

  function mouseDown(e: MouseEvent) {
    setActive("active");
    setPressed(true);
    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUp(e: React.MouseEvent<HTMLDivElement>) {
    setActive("");
    setPressed(false);
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <div className="draggable" ref={ref} onMouseUp={(e) => mouseUp(e)}>
      <Box active={active} mouseMove={mouseMove} mouseDown={mouseDown} />
    </div>
  );
}
