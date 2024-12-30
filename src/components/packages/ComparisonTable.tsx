import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Customization',
    buildDeliver: true,
    buildMaintain: true,
  },
  {
    feature: 'Training',
    buildDeliver: true,
    buildMaintain: 'Optional',
  },
  {
    feature: 'Ongoing Support',
    buildDeliver: false,
    buildMaintain: true,
  },
  {
    feature: 'Cost Model',
    buildDeliver: 'One-time fee',
    buildMaintain: 'Subscription',
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-secondary-700">
            <th className="py-4 px-6 text-left">Feature</th>
            <th className="py-4 px-6 text-left">Build & Deliver</th>
            <th className="py-4 px-6 text-left">Build & Maintain</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-secondary-800/50' : ''}
            >
              <td className="py-4 px-6">{row.feature}</td>
              <td className="py-4 px-6">
                {typeof row.buildDeliver === 'boolean' ? (
                  row.buildDeliver ? (
                    <Check className="h-5 w-5 text-blue-400" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400" />
                  )
                ) : (
                  row.buildDeliver
                )}
              </td>
              <td className="py-4 px-6">
                {typeof row.buildMaintain === 'boolean' ? (
                  row.buildMaintain ? (
                    <Check className="h-5 w-5 text-blue-400" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400" />
                  )
                ) : (
                  row.buildMaintain
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}