export type AdoptionStatus =
  | "ESCROW_CREATED"
  | "ESCROW_FUNDED"
  | "SETTLEMENT_TRIGGERED"
  | "DISPUTED"
  | "FUNDS_RELEASED"
  | "CUSTODY_ACTIVE"
  | "FUNDS_RELEASED";

export interface AdoptionTimelineEntry {
  id: string;
  adoptionId: string;
  timestamp: string;
  sdkEvent: string;
  message: string;
  actor?: string;
  actorRole?: string;
  fromStatus?: AdoptionStatus;
  toStatus?: AdoptionStatus;
  sdkTxHash?: string;
  isAdminOverride?: boolean;
  reason?: string;
}
