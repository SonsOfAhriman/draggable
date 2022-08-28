import "./Box.css";
import Bear from "../images/Bear_Web.png";

type BoxProps = {
  mouseDown: Function;
  mouseMove: Function;
  active: string;
};

export default function Box(props: BoxProps) {
  return (
    <div
      className={`draggable ${props.active}`}
      onMouseDown={(e) => props.mouseDown(e)}
      onMouseMove={(e) => props.mouseMove(e)}
    >
      <div className="bear-robotics">
        <div>
          <img style={{ height: "50px" }} src={Bear} alt="Bear" />
        </div>

        <h3 style={{ color: "white", marginTop: "40px" }}>
          Bear Robotics Coding Test - Ryan
        </h3>
      </div>
    </div>
  );
}
