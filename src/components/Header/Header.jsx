import logo from "../../assets/calcul.png";
import "../Header/Header.css";

export default function Header() {
  return (
    <header id="header">
      <h1>Gap Rate of Return</h1>
      <div className="image-container">
        <img src={logo} alt="logic" />
        <span className="text-container">
          <p>
            위 코드에서 left: 50%;와 transform: translateX(-50%);를 사용하여
            컨테이너를 가운데로 정렬하고 있습니다. max-width를 사용하여
            컨테이너의 최대 너비를 이미지의 너비에서 패딩값을 뺀 값으로 설정하여
            좌우 균형을 맞춥니다. 이렇게 하면 이미지와 컨테이너가 좌우로
            균형있게 맞춰질 것입니다.
          </p>
        </span>
      </div>
    </header>
  );
}
