document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal"); // 모든 모달 요소 가져오기

  // 페이지 로드 시 모달이 표시되는 문제 해결
  modals.forEach((modal) => {
    modal.style.display = "none"; // 강제로 숨기기
  });

  const openBtns = document.querySelectorAll("[data-target]"); // data-target 속성이 있는 요소 찾기
  const closeBtns = document.querySelectorAll(".close-btn"); // 닫기 버튼들

  // 모달 열기
  openBtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // a 태그의 기본 동작 방지
      const targetModalId = this.getAttribute("data-target"); // data-target 값 가져오기
      const modal = document.getElementById(targetModalId); // 해당하는 모달 찾기
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // 모달 닫기
  closeBtns.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none"; // 현재 닫기 버튼이 속한 모달 닫기
    });
  });

  // 뒤로가기 버튼으로 팝업 닫기
  const backBtns = document.querySelectorAll(".back-btn"); // 뒤로가기 버튼들

  backBtns.forEach((button) => {
    button.addEventListener("click", function () {
      history.back();
      this.closest(".modal").style.display = "none"; // 팝업 내부에서 실행할 경우
    });
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  /*input 글자 수 제한*/
  document
    .querySelectorAll("input[type=number][maxlength]")
    .forEach((input) => {
      input.addEventListener("input", function (ev) {
        const maxlength = this.getAttribute("maxlength");
        if (maxlength && this.value.length > maxlength) {
          this.value = this.value.substring(0, maxlength);
        }
      });
    });

  // input에 숫자 갯수 제한하기/notion에 정리하기
  // document.querySelectorAll('input[type=number][maxlength]').forEach(

  // );
});
