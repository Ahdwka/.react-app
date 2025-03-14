import React from 'react';
import { FileText, Presentation as FilePresentation, Download } from 'lucide-react';
import { Material } from '../types';

interface MaterialsListProps {
  materials: Material[];
}

export function MaterialsList({ materials }: MaterialsListProps) {
  const getIcon = (type: Material['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5" />;
      case 'ppt':
      case 'pptx':
        return <FilePresentation className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleDownload = (material: Material) => {
    // In a real app, this would handle the actual file download
    window.open(material.url, '_blank');
  };

  return (
    <div className="space-y-4">
      {materials.map((material) => (
        <div 
          key={material.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="text-blue-600">
              {getIcon(material.type)}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">{material.title}</h4>
              <p className="text-sm text-gray-500 uppercase">{material.type}</p>
            </div>
          </div>
          <button
            onClick={() => handleDownload(material)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );
}