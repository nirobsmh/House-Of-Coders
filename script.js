if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".hero-card", {
    opacity: 0,
    y: 80,
    duration: 1.4,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.utils.toArray(".service-card, .work-card, .timeline-item").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: i * 0.05,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });

  gsap.to(".hero-glow", {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
  });
}

const motion = window.motion;
if (motion) {
  const { animate, stagger } = motion;

  animate(
    ".navbar",
    { opacity: [0, 1], y: [-20, 0] },
    { duration: 0.6, ease: "easeOut" }
  );

  animate(
    ".hero-stats div",
    { opacity: [0, 1], y: [20, 0] },
    { delay: 0.4, duration: 0.6, ease: "easeOut", delay: stagger(0.1) }
  );
}
