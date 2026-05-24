import React, { useEffect, useRef, useState } from 'react';

/**
 * Wraps children with a scroll-triggered animation.
 * Props:
 *   type    — 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'flipIn' | 'popIn'
 *   delay   — CSS delay string e.g. '0.1s'
 *   threshold — 0–1, how much of element must be visible (default 0.12)
 *   style   — extra styles on wrapper div
 *   className — extra class on wrapper div
 */
export default function Animate({
  children,
  type = 'fadeUp',
  delay = '0s',
  threshold = 0.12,
  style = {},
  className = '',
  tag: Tag = 'div',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`${visible ? `anim-${type}` : 'anim-hidden'} ${className}`}
      style={{ animationDelay: delay, ...style }}
    >
      {children}
    </Tag>
  );
}
