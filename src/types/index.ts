export interface PermitData {
  id: string;
  permitNumber: string;
  iqamaNumber: string;
  status: 'VALID' | 'EXPIRED' | 'CANCELLED';
  statusLabel: string;
  badgeLabel: string;
  registryNote: string;
  issueDateText: string;
  expiryDateText: string;
  workerName: string;
  profession: string;
  nationality: string;
  providerName: string;
  providerMhrsdNumber: string;
  beneficiaryName: string;
  beneficiaryMhrsdNumber: string;
  contractSummary: string;
  workLocations: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
