// import React from "react";
// import DOMPurify from "dompurify";

// const ViewDetail = ({ html, wordsMax = 5 }) => {
//   const sanitizedHtml = DOMPurify.sanitize(html);
//   const plainText = sanitizedHtml.replace(/<[^>]+>/g, "").trim();

//   let truncatedText;
//   if (wordsMax === false) {
//     // Display all content
//     truncatedText = plainText;
//   } else {
//     // Truncate content based on wordsMax
//     const words = plainText.split(" ");
//     truncatedText = words.slice(0, wordsMax).join(" ");
//   }

//   return (
//     <>
//       {truncatedText} {wordsMax !== false && "..."}
//     </>
//   );
// };

// export default ViewDetail;
// v01:
// import DOMPurify from "dompurify";
// const ViewDetail = ({ html , wordsMax = 5}) => {
//   const sanitizedHtml = DOMPurify.sanitize(html);
//   const plainText = sanitizedHtml.replace(/<[^>]+>/g, "").trim();
//   const words = plainText.split(" ");
//   const truncatedText = words.slice(0, 5).join(" ");
//   return truncatedText + " " + "...";
// };
// export default ViewDetail;
