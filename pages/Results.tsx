import React from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HALL_OF_FAME } from '../images/assets';

const data = [
  { name: '3월', score: 58 },
  { name: '4월', score: 65 },
  { name: '6월', score: 72 },
  { name: '9월', score: 88 },
  { name: '11월', score: 96 },
];

const Results: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Hall of Fame */}
        <div className="mb-24">
          <SectionTitle 
            subtitle="Hall of Fame"
            title="명예의 전당"
            description="KAIST 수학학원과 함께 꿈을 이룬 자랑스러운 학생들입니다."
          />
          
          <div className="relative rounded-2xl overflow-hidden mb-12 h-64 md:h-96">
            <img src={HALL_OF_FAME} alt="Graduation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">2024학년도 주요 합격 현황</h3>
                <p className="text-xl text-secondary font-bold">SKY 및 의치한 총 32명 합격</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { uni: '서울대학교', dept: '의예과', name: '이0준', school: '휘문고' },
              { uni: 'KAIST', dept: '수리과학과', name: '박0우', school: '경기과학고' },
              { uni: '연세대학교', dept: '전기전자공학부', name: '김0원', school: '중동고' },
              { uni: '고려대학교', dept: '컴퓨터학과', name: '최0민', school: '숙명여고' },
            ].map((student, idx) => (
              <Card key={idx} className="p-6 text-center border-t-4 border-t-secondary">
                <div className="mb-2 text-primary font-bold">{student.uni}</div>
                <div className="text-xl font-bold mb-2">{student.dept}</div>
                <div className="text-gray-500">{student.name} ({student.school})</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Story & Graph */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">5등급에서 1등급으로, 기적의 성적 향상</h3>
              <div className="prose text-gray-600 mb-8">
                <p className="mb-4">
                  "처음 학원에 왔을 때는 수학이 가장 싫은 과목이었습니다. 
                  기본기가 너무 부족해서 어디서부터 손대야 할지 몰랐죠."
                </p>
                <p>
                  하지만 KAIST 1:1 클리닉을 통해 저의 취약점인 '함수' 파트를 집중 공략했고, 
                  선생님께서 만들어주신 오답 노트만 5번 이상 반복했습니다. 
                  결국 수능에서 백분위 98%라는 놀라운 성적을 받았습니다.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                   {/* Placeholder avatar */}
                   <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                </div>
                <div>
                  <div className="font-bold text-heading">박0호 학생</div>
                  <div className="text-sm text-gray-500">진선여고 졸업 / 연세대 합격</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full h-[300px]">
              <h4 className="text-center font-bold text-gray-500 mb-4">모의고사 성적 추이</h4>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#004191" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: "#C5A059", strokeWidth: 2 }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Results;