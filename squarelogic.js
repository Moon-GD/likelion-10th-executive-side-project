var lifeCount = 3;
var globalIndex = 0;
var row = 13;
var col = 15;
var totalTd = row * col;
var square = new Array();
var rowQuestion = new Array();
var colQuestion = new Array();
var answer = new Array();

//square 배열 초기화(0이면 미체크, 1이면 체크)
for (var i = 0; i < totalTd; i++) {
  square[i] = 0;
}

//네모로직 문제를 위한 번호 배열(row)
rowQuestion[0] = "44";
rowQuestion[1] = "33";
rowQuestion[2] = "22";
rowQuestion[3] = "11";
rowQuestion[4] = "11";
rowQuestion[5] = "6";
rowQuestion[6] = "6";
rowQuestion[7] = "0";
rowQuestion[8] = "1123";
rowQuestion[9] = "111111";
rowQuestion[10] = "111111";
rowQuestion[11] = "111111";
rowQuestion[12] = "41211";
//네모로직 문제를 위한 번호 배열(col)
colQuestion[0] = "";
colQuestion[1] = "5";
colQuestion[2] = "11";
colQuestion[3] = "21";
colQuestion[4] = "31";
colQuestion[5] = "7";
colQuestion[6] = "25";
colQuestion[7] = "2";
colQuestion[8] = "23";
colQuestion[9] = "211";
colQuestion[10] = "711";
colQuestion[11] = "33";
colQuestion[12] = "2";
colQuestion[13] = "15";
colQuestion[14] = "1";
colQuestion[15] = "5";

//정답
answer[0] = 1;
answer[1] = 2;
answer[2] = 3;
answer[3] = 4;
answer[4] = 9;
answer[5] = 11;
answer[6] = 12;
answer[7] = 17;
answer[8] = 18;
answer[9] = 19;
answer[10] = 24;
answer[11] = 25;
answer[12] = 26;
answer[13] = 33;
answer[14] = 34;
answer[15] = 39;
answer[16] = 40;
answer[17] = 49;
answer[18] = 54;
answer[19] = 64;
answer[20] = 69;
answer[21] = 79;
answer[22] = 80;
answer[23] = 81;
answer[24] = 82;
answer[25] = 83;
answer[26] = 84;
answer[27] = 94;
answer[28] = 95;
answer[29] = 96;
answer[30] = 97;
answer[31] = 98;
answer[32] = 99;
answer[33] = 120;
answer[34] = 125;
answer[35] = 128;
answer[36] = 129;
answer[37] = 132;
answer[38] = 133;
answer[39] = 134;
answer[40] = 135;
answer[41] = 140;
answer[42] = 142;
answer[43] = 145;
answer[44] = 147;
answer[45] = 149;
answer[46] = 150;
answer[47] = 155;
answer[48] = 157;
answer[49] = 160;
answer[50] = 162;
answer[51] = 164;
answer[52] = 165;
answer[53] = 170;
answer[54] = 172;
answer[55] = 175;
answer[56] = 177;
answer[57] = 179;
answer[58] = 180;
answer[59] = 181;
answer[60] = 182;
answer[61] = 183;
answer[62] = 185;
answer[63] = 188;
answer[64] = 189;
answer[65] = 192;
answer[66] = 194;

//네모로직1 화면의 팝업창
window.onload = function () {
  Swal.fire({
    title: "멋사 네모로직 퀴즈",
    text: "개발에 필요할 순발력과 센스를 미리 발휘해보세요!",
    showConfirmButton: false, //버튼 미표시
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

// 네모로직 결과물 제출
function checkSquare() {
  var result = true;
  // 네모로직 확인 알고리즘 작성
  for (var j = 0; j < answer.length; j++) {
    if (square[answer[j]] != 1) {
      result = false;
      break;
    }
  }

  if (result == false) {
    // 하트 갯수 확인

    document.getElementById("heart" + lifeCount--).style.visibility = "hidden";

    Swal.fire({
      icon: "error",
      title: "틀렸습니다!",
      text: "다시 한번 확인해보세요",
    });
    if (lifeCount == 0) {
      Swal.fire({
        title: "틀렸습니다!",
        text: "다음 게임으로 넘어갑니다.",
        timer: 1000,
        showConfirmButton: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      setTimeout(function () {
        localStorage.setItem("score", 0); //실패로 값을 0으로 지정
        location.href = "minju/index.html"; //에러 답 맞추기 링크 지정
      }, 1000);
    }
  } else {
    Swal.fire({
      icon: "success",
      title: "정답입니다!",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(function () {
      localStorage.setItem("score", 1); //성공으로 값을 1으로 지정
      location.href = "minju/index.html"; //에러 답 맞추기 링크 지정
    }, 1000);
  }
}

// 다음게임으로 패스
function passSquare() {
  Swal.fire({
    title: "다음 게임으로 넘어가시겠어요?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("score", 0); //패스로 값을 0으로 지정
      location.href = "minju/index.html"; //에러 답 맞추기 링크 지정
    }
  });
}

// 테이블의 칸 하나를 클릭시
function checkTd(index) {
  console.log(index);
  if (square[index] == 0) {
    document.getElementById(index).style.background = "grey";
    square[index] = 1;
  } else {
    document.getElementById(index).style.background = "white";
    square[index] = 0;
  }
}

//tbody의 칸 생성(0번쨰를 제외한 모든 row생성)
function makeTbody() {
  for (var j = 0; j < rowQuestion.length; j++) {
    document.write("<tr>");
    if (j == rowQuestion.length - 1) {
      document.write(
        "<th class='noLineLeft noLineBottom'>" + rowQuestion[j] + "</th>"
      );
      for (var i = 0; i < col; i++) {
        if (i == col - 1) {
          document.write(
            "<td class='noLineRight noLineBottom' id = '" +
              globalIndex +
              "' onClick='checkTd(" +
              globalIndex +
              ")'></td>"
          );
        } else {
          document.write(
            "<td class='noLineBottom' id = '" +
              globalIndex +
              "' onClick='checkTd(" +
              globalIndex +
              ")'></td>"
          );
        }
        globalIndex++;
      }
    } else {
      document.write("<th class='noLineLeft'>" + rowQuestion[j] + "</th>");
      for (var i = 0; i < col; i++) {
        if (i == col - 1) {
          document.write(
            "<td class='noLineRight' id = '" +
              globalIndex +
              "' onClick='checkTd(" +
              globalIndex +
              ")'></td>"
          );
        } else {
          document.write(
            "<td id = '" +
              globalIndex +
              "' onClick='checkTd(" +
              globalIndex +
              ")'></td>"
          );
        }
        globalIndex++;
      }
    }

    document.write("</tr>");
  }
}

//thead의 칸 생성(0번쨰 row생성)
function makeThead() {
  document.write("<tr>");
  for (var j = 0; j < colQuestion.length; j++) {
    if (j == 0)
      document.write(
        "<th class='noLineTop noLineLeft'>" + colQuestion[j] + "</th>"
      );
    else if (j == colQuestion.length - 1)
      document.write(
        "<th class='noLineTop noLineRight'>" + colQuestion[j] + "</th>"
      );
    else document.write("<th class='noLineTop'>" + colQuestion[j] + "</th>");
  }
  document.write("</tr>");
}
