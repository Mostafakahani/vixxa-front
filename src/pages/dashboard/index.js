import jwt from "jsonwebtoken";
import { Server } from "../../../config";

export async function getServerSideProps(context) {
  const { req } = context;

  // دریافت توکن از کوکی‌ها
  const token = req.cookies.token;
  // بررسی وجود توکن
  if (!token) {
    // اگر توکن وجود نداشت، کاربر به صفحه لاگین ریدایرکت می‌شود
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    // تجزیه و بررسی توکن با استفاده از کلید خصوصی
    const decodedToken = jwt.verify(token, Server.SECRET);

    // اگر توکن تایید شد، اطلاعات کاربر درون آن قابل دسترسی است
    const { isAdmin } = decodedToken;

    // بررسی نقش کاربر
    if (isAdmin) {
      // اگر کاربر ادمین است، به صفحه مربوط به ادمین ریدایرکت می‌شود
      return {
        redirect: {
          destination: "/dashboard/admin",
          permanent: false,
        },
      };
    } else {
      // اگر کاربر ادمین نبود، به صفحه کاربران عادی ریدایرکت می‌شود
      return {
        redirect: {
          destination: "/dashboard/user",
          permanent: false,
        },
      };
    }
  } catch (error) {
    // در صورت بروز خطا در تجزیه توکن، کاربر به صفحه لاگین ریدایرکت می‌شود
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

function DashboardRedirect() {
  return <div>DashboardRedirect</div>;
}

export default DashboardRedirect;
