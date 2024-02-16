import React from "react";

const HTMLDetail = ({ data }) => {
  // تابعی برای تبدیل کلاس‌های رشته HTML به className
  const convertClassesToClassName = (htmlString) => {
    // الگوی regex برای پیدا کردن کلاس‌ها
    const classRegex = /class="([^"]+)"/g;
    // یافتن همه کلاس‌ها و جایگزینی آنها با className
    return htmlString.replace(classRegex, (match, classes) => {
      // جایگزینی class به className
      const classNames = classes
        .split(" ")
        .map((className) => {
          // مثال: اینجا می‌توانید مقادیر class را به className تبدیل کنید
          // اینجا مثالی از تبدیل کلاس‌ها به className قرار داده شده است
          if (className === "ql-align-center") return "align-center";
          // اضافه کردن تبدیل‌های دیگر
          return className;
        })
        .join(" ");
      return `className="${classNames}"`;
    });
  };

  return (
    <div
      className="detail-container"
      dangerouslySetInnerHTML={{
        __html: convertClassesToClassName(data),
      }}
    />
  );
};

export default HTMLDetail;
