/**
 * escrowService
 *
 * Placeholder escrow API calls.
 * TODO: replace stub bodies with real HTTP calls via the api-client.
 */
export const escrowService = {
  /**
   * Retry a failed settlement for the given escrow.
   * @param escrowId - The ID of the escrow to retry settlement for.
   */
  retrySettlement: async (_escrowId: string): Promise<void> => {
    // TODO: wire to real API endpoint, e.g.
    // return apiClient.post(`/escrow/${escrowId}/retry-settlement`);
  },
};
