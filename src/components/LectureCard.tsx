import React from 'react';
import { FileDown } from 'lucide-react';
import { Lecture } from '../types';

interface LectureCardProps {
  lecture: Lecture;
  onSelect: (lecture: Lecture) => void;
}

export function LectureCard({ lecture, onSelect }: LectureCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onSelect(lecture)}
    >
      <img 
        src={lecture.thumbnail} 
        alt={lecture.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{lecture.title}</h3>
        <p className="text-gray-600 mb-4">{lecture.description}</p>
        <div className="flex items-center text-blue-600">
          <FileDown className="w-5 h-5 mr-2" />
          <span>{lecture.materials.length} materials</span>
        </div>
      </div>
    </div>
  );
}