import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface Column {
  label: string;
}

interface Row {
  feature: string;
  ours: boolean;
  theirs: boolean;
  note?: string;
}

interface ComparisonTableProps {
  columns: Column[];
  rows: Row[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, rows }) => {
  if (!rows.length) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="overflow-x-auto">
          <table className="w-full bg-transparent border-collapse">
            <thead className="sticky top-0 bg-surface-0 z-10">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-text-primary border-b border-surface-2">
                  Feature
                </th>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="text-center py-4 px-6 font-semibold text-text-primary border-b border-surface-2"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="group hover:bg-accent-tint transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--accent-tint)',
                  }}
                >
                  <td className="py-4 px-6 text-text-primary font-medium border-b border-surface-2">
                    <div className="flex flex-col">
                      <span>{row.feature}</span>
                      {row.note && (
                        <span className="text-sm text-text-muted mt-1">
                          {row.note}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-b border-surface-2">
                    {row.ours ? (
                      <div className="flex items-center justify-center">
                        <CheckIcon className="w-5 h-5 text-positive" />
                      </div>
                    ) : (
                      <span className="text-text-muted">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-b border-surface-2">
                    {row.theirs ? (
                      <div className="flex items-center justify-center">
                        <CheckIcon className="w-5 h-5 text-positive" />
                      </div>
                    ) : (
                      <span className="text-text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
