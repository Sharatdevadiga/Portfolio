// import React, { useState, useEffect } from "react";
// import "./Certificates.css"; // Assuming your CSS is in this file
// import { certificates } from "../../../public/data";

// const CertificatesCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
//     }, 3000); // Auto-swipe every 3 seconds
//     return () => clearInterval(interval);
//   }, [certificates.length]);

//   const getCardStyle = (index) => {
//     let scale, opacity;
//     const diff = Math.abs(index - activeIndex);

//     if (diff === 0) {
//       scale = 1; // Center card
//       opacity = 1;
//     } else {
//       scale = Math.max(1 - 0.5 * diff, 0.7); // Decrease scale by 10% for each card away from center
//       opacity = Math.max(1 - 0.2 * diff, 0.6); // Decrease opacity for cards further away
//     }

//     return {
//       transform: `scale(${scale})`,
//       opacity: opacity,
//       transition: "transform 0.5s ease, opacity 0.5s ease",
//     };
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-inner">
//         {certificates.map((certificate, index) => (
//           <div className="card-general" key={index} style={getCardStyle(index)}>
//             <img src={certificate.image} alt={certificate.title} />
//             <h3 className="card-general-title">{certificate.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CertificatesCarousel;

// // .carousel-container {
// //   perspective: 1000px;
// //   position: relative;
// //   overflow: hidden;
// // }

// // .carousel-inner {
// //   display: flex;
// //   gap: 2.4rem;
// //   width: 200%;
// //   transition: transform 1s ease-in-out;
// // }

// // .control-btn {
// //   position: absolute;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   z-index: 10;
// //   /* Style your buttons */
// // }

// // .prev-btn {
// //   left: 10px;
// // }

// // .next-btn {
// //   right: 10px;
// // }
