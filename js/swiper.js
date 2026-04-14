window.addEventListener("load" , ()=>{
    const swVisual = new Swiper(".sw-visual" , {
        effect: "fade",
        // loop: true 마지막 슬라이드 다음에 다시 첫 번째 슬라이드로 이동
        loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplay 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    })
})