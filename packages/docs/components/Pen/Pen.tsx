/* eslint-disable global-require */
import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './Pen.module.css';

export default function Pen(): ReactElement {
  const drawnPathRef = useRef(null);
  const penTopRef = useRef(null);
  const penRingRef = useRef(null);
  const penHandleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const animate = require('animateplus');
    animate({
      el: drawnPathRef.current,
      'stroke-dashoffset': [570, 1140],
      duration: 800,
      easing: 'easeOutSine',
      delay: 600,
    });

    animate({
      el: penTopRef.current,
      'stroke-dashoffset': [85, 0],
      duration: 900,
      easing: 'linear',
      delay: 1100,
    });

    animate({
      el: penRingRef.current,
      'stroke-dashoffset': [48, 0],
      duration: 900,
      easing: 'linear',
      delay: 1100,
    });

    animate({
      el: penHandleRef.current,
      'stroke-dashoffset': [228, 456],
      duration: 900,
      easing: 'linear',
      delay: 1100,
    });

    animate({
      el: dotRef.current,
      rx: [0, 3.6743313],
      ry: [0, 1.73943662],
      duration: 600,
      easing: 'easeOutQuad',
      delay: 1500,
    });
  }, []);

  return (
    <svg className={styles.logo} viewBox="0 0 263 209" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Pencil"
          transform="translate(177.000000, 1.000000)"
          stroke="#979797"
          strokeWidth="2"
          fill="#FFFFFF"
        >
          <path
            d="M9.86222802,83.2346527 C19.7086177,60.3135066 19.0904437,60.4954622 28.5876706,39.951712 C38.4066597,18.711948 62.1639292,-4.34969769 69.2604522,0.785282207 C76.3569752,5.92026211 68.390785,32.8458652 59.3370307,46.9675386 C50.2832764,61.089212 26.4106229,88.7005045 26.4106229,88.7005045 C26.4106229,88.7005045 15.8709471,84.8808725 9.86222802,83.2346527 Z"
            id="Path-2"
            strokeDasharray="228"
            strokeDashoffset="228"
            ref={penHandleRef}
          />
          <path
            d="M27.0409545,85.9009649 C27.0409545,84.3313098 26.1525667,82.9025007 24.698475,81.8335735 C23.0842946,80.6469623 20.7729906,79.9038379 18.2059893,79.9038379 C13.3265727,79.9038379 9.37102405,82.5888431 9.37102405,85.9009649 C9.37102405,89.2130867 13.3265727,91.8980919 18.2059893,91.8980919 C23.0854058,91.8980919 27.0409545,89.2130867 27.0409545,85.9009649 Z"
            id="Oval-1"
            transform="translate(18.205989, 85.900965) rotate(14.000000) translate(-18.205989, -85.900965) "
            strokeDasharray="48"
            strokeDashoffset="48"
            ref={penRingRef}
          />
          <path
            d="M0.014878413,113.951878 C1.78180994,108.545401 2.43334044,105.616394 2.43334044,95.9203125 C3.53217498,94.3115413 4.86453139,92.7130126 6.26188059,91.2345519 C9.7362174,87.5585412 12.0429116,84.7660539 13.7303754,84.2627016 C17.9673635,84.2627016 20.6406783,85.746119 22.9093963,86.9867691 C22.9093963,90.2466481 22.134279,93.848891 19.3059407,100.370564 C9.49146758,105.559173 5.55996694,109.67568 0.014878413,113.951878 Z"
            id="Path-1"
            strokeDasharray="85"
            strokeDashoffset="85"
            ref={penTopRef}
          />
        </g>
        <g
          id="Line"
          transform="translate(1.000000, 117.000000)"
          stroke="#979797"
        >
          <ellipse
            id="Oval-1"
            fill="#979797"
            cx="174.040826"
            cy="1.73943662"
            rx="0"
            ry="0"
            ref={dotRef}
          />
          <path
            d="M173.726977,1.74286972 C173.726977,1.74286972 81.2371686,10.7928991 76.8796413,26.5927817 C72.522114,42.3926643 296.495571,20.2825558 256.053049,46.3454959 C215.610526,72.408436 0.0593251408,90.9481221 0.0593251408,90.9481221"
            id="Path-5"
            strokeDasharray="570"
            strokeDashoffset="570"
            ref={drawnPathRef}
          />
        </g>
      </g>
    </svg>
  );
}
