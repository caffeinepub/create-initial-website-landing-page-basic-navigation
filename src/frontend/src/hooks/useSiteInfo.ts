import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSiteInfo() {
  const { actor, isFetching } = useActor();

  const { data, isLoading, error } = useQuery({
    queryKey: ['siteInfo'],
    queryFn: async () => {
      if (!actor) {
        // Return fallback immediately if actor is not available
        return {
          name: 'Archiv Agency',
          tagline: 'Travel the World with Archiv!',
        };
      }
      return actor.getSiteInfo();
    },
    // Always enable the query - it will return fallback values if actor is unavailable
    enabled: true,
    // Return fallback data immediately while loading
    placeholderData: {
      name: 'Archiv Agency',
      tagline: 'Travel the World with Archiv!',
    },
  });

  return {
    siteInfo: data || {
      name: 'Archiv Agency',
      tagline: 'Travel the World with Archiv!',
    },
    isLoading: isLoading && isFetching,
    error,
  };
}
