import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { lectures } from '../data/lectures';
import { MaterialsList } from './MaterialsList';

export function LectureDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecture = lectures.find(l => l.id === id);

  if (!lecture) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Lecture not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 hover:text-blue-700"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to Lectures
      </button>
      <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
        <img 
          src={lecture.thumbnail} 
          alt={lecture.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {lecture.title}
        </h2>
        <p className="text-gray-600 mb-6">{lecture.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Available Materials
        </h3>
        <MaterialsList materials={lecture.materials} />
      </div>
    </div>
  );
}