import gsap from "gsap";

export function updateSizeCircle(ele: HTMLDivElement, options: gsap.TweenVars) {
  gsap.to(ele, options);
}

export function addMouseEventListener(
  container: HTMLDivElement,
  elements: HTMLHtmlElement[],
  leaveOptions: gsap.TweenVars,
  moveOptions: gsap.TweenVars
) {
  elements.forEach((ele) => {
    ele.addEventListener("mousemove", function () {
      updateSizeCircle(container as HTMLDivElement, moveOptions);
    });
    ele.addEventListener("mouseleave", function () {
      updateSizeCircle(container as HTMLDivElement, leaveOptions);
    });
  });
}
