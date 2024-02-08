import { useQuery } from "@tanstack/react-query";
import { getApiClient } from "./axios";

export const useSearchQuery = (
  query,
  yearStart,
  yearEnd,
  pageNum,
  pageSize
) => {
  const params = new URLSearchParams({
    q: query,
    media_type: "image",
    page_size: pageSize,
    page: pageNum,
  });
  !!yearStart && yearStart !== "" && params.append("year_start", yearStart);
  !!yearEnd && params.append("year_end", yearEnd);

  return useQuery({
    queryKey: ["search", query, yearStart, yearEnd, pageSize, pageNum],
    queryFn: () =>
      getApiClient()
        .get(`/search?${params}`)
        .then((res) => res.data),
    enabled: !!query,
  });
};

export const useShowItemQuery = (nasaId) => {
  return useQuery({
    queryKey: ["search", nasaId],
    queryFn: () =>
      getApiClient()
        .get(`/search?nasa_id=${nasaId}`)
        .then((res) => res.data),
    enabled: !!nasaId,
  });
};
