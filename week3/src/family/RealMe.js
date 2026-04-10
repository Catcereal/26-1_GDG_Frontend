import pic1 from "./images.jpg";

function RealMe() {
  return (
    <div>
      <h1>자기소개</h1>
      <p>
        원래 자기소개가 제일 어려운 법. 개발을 잘 하는 사람이 되고 싶은
        사람이에요...
      </p>
      <h2>최근관심사</h2>
      <p>
        Cheng Lou 라는 분이 개발한 pretext라는 것을 보고 왔는데, 정말 흥미로웠던
        것 같습니다.
      </p>
      <p>
        그리고 최근에 axios에 악성코드가 포함되어 배포되는 공급망 공격이
        있었다고 들었습니다
      </p>
      <p>항상 보안을 조심합시다...</p>
      <h2>귀여운 고양이 사진</h2>
      <img src={pic1} alt="검은고양이" />
    </div>
  );
}

export default RealMe;
