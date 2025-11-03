import { getRequestConfig } from "next-intl/server";
import { cookies} from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get("MYNEXTAPP_LOCALE")?.value || "bg";
  const locale = cookieLocale || "bg";
  // const locale = "bg";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
