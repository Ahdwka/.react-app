import React from 'react';
import { useNavigate } from 'react-router-dom';
import { lectures } from '../data/lectures';
import { LectureCard } from './LectureCard';
import type { Lecture } from '../types';

export function Home() {
  const navigate = useNavigate();

  const handleSelectLecture = (lecture: Lecture) => {
    navigate(`/lecture/${lecture.id}`);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        IUST Lecture Materials
      </h1>
      <div className="text-2xl font-bold text-gray-800 mb-2 text-center">
        BY AHED ALKHALAf
      </div>
      <div className="text-lg Alexandria text-gray-800 mb-10 text-center">
...يتم تحميل تتمة المقررات      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((lecture) => (
          <LectureCard
            key={lecture.id}
            lecture={lecture}
            onSelect={handleSelectLecture}
          />
        ))}
      </div>
    </div>
  );
}