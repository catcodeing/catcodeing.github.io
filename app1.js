(() => {
    const container = document.querySelector("#prlx-container");
  
    window.addEventListener("scroll", () =>
      container.style.setProperty(
        "--prlx-scroll",
        `${
          (window.pageYOffset || container.scrollTop) -
          (container.clientTop || 0)
        }`,
      ),
    );
  })();