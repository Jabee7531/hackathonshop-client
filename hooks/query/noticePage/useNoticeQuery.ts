import { useRouter } from "next/router";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { NoticePage } from "../../../interface/interfaces";
import { fetchNotices } from "../../../lib/api/notice/fetchNotices";

export default function useNoticeQuery() {
  const router = useRouter();
  const { page } = router.query;

  const { isLoading, error, data } = useQuery(
    "notices",
    async () => await fetchNotices(page ? +page : 1),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const noticesPage = useMemo((): NoticePage => {
    if (!data) return { data: null, meta: null };
    return data.result.notices;
  }, [data]);

  return { notices: noticesPage.data, meta: noticesPage.meta };
}
