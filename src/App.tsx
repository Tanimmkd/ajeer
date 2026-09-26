import { useState } from 'react';
import { DocumentReplica } from './components/DocumentReplica';
import { defaultPermit } from './data/mockData';
import { PermitData } from './types';

export default function App() {
  const [currentPermit, setCurrentPermit] = useState<PermitData>(defaultPermit);

  return (
    <DocumentReplica
      permit={currentPermit}
      onUpdatePermit={(updated) => setCurrentPermit(updated)}
      onResetPermit={() => setCurrentPermit(defaultPermit)}
    />
  );
}
