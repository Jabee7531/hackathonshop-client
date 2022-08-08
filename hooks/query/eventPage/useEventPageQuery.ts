import { useRouter } from "next/router";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { EventPage } from "../../../interface/interfaces";
import { fetchEvents } from "../../../lib/api/event/fetchEvents";

export default function useEventQuery() {
  const router = useRouter();
  const { page } = router.query;

  const { isLoading, error, data } = useQuery(
    "events",
    async () => await fetchEvents(page ? +page : 1),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const eventPage = useMemo((): EventPage => {
    if (!data) return { data: null, meta: null };
    return data.result.events;
  }, [data]);

  return { events: eventPage.data, meta: eventPage.meta };
}
