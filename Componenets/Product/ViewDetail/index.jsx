import DOMPurify from "dompurify";
const ViewDetail = ({ html }) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  const plainText = sanitizedHtml.replace(/<[^>]+>/g, "").trim();
  const words = plainText.split(" ");
  const truncatedText = words.slice(0, 5).join(" ");
  return truncatedText + " " + "...";
};
export default ViewDetail;
