window.addEventListener("load", function () {
  // 모달창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modalClose");
  //  modalClose.addEventListener("이벤트" , function(){행동});
  // "이벤트"를 할 경우에 {행동}한다.
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
  });
});
