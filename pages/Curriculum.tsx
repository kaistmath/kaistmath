import React, { useState } from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';
import { CURRICULUM_MIDDLE, CURRICULUM_HIGH } from '../images/assets';
import { BookOpen, Target, Award } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'middle' | 'high'>('middle');

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="학습 시스템 및 커리큘럼"
          description="학년별, 수준별 맞춤 로드맵을 통해 최적의 학습 경로를 제시합니다."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('middle')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                activeTab === 'middle' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-primary'
              }`}
            >
              중등부
            </button>
            <button
              onClick={() => setActiveTab('high')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                activeTab === 'high' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-primary'
              }`}
            >
              고등부
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[600px]">
            <img 
              src={activeTab === 'middle' ? CURRICULUM_MIDDLE : CURRICULUM_HIGH} 
              alt="Curriculum Class" 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
             <div className="absolute inset-0 bg-primary/20"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-heading">
              {activeTab === 'middle' ? '고등 수학의 절대 기초 완성' : '내신 1등급 & 수능 만점 전략'}
            </h3>
            <p className="text-lg text-gray-600">
              {activeTab === 'middle' 
                ? '중등 과정의 완벽한 이해는 물론, 고등 수학과의 연계성을 고려하여 심화 학습을 진행합니다. 특목고 대비반은 별도 운영됩니다.'
                : '학교별 내신 출제 경향을 완벽 분석하고, 수능 최신 트렌드를 반영한 자체 제작 킬러 문항으로 실전 감각을 극대화합니다.'
              }
            </p>

            <div className="space-y-4 mt-8">
              <Card className="p-6 flex gap-4 items-start" hoverEffect={false}>
                <div className="p-3 bg-blue-50 text-primary rounded-lg">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">교재 시스템</h4>
                  <p className="text-gray-600 text-sm">
                    {activeTab === 'middle' ? '개념원리 + 쎈 + 자체 심화 프린트 (Black Label급)' : '정석 + 자이스토리 + KAIST 시크릿 노트(수능형 변형문제)'}
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 items-start" hoverEffect={false}>
                <div className="p-3 bg-yellow-50 text-secondary rounded-lg">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">관리 포인트</h4>
                  <p className="text-gray-600 text-sm">
                    {activeTab === 'middle' ? '서술형 풀이 습관 교정, 일일 연산 테스트, 오답 노트 생활화' : '실전 모의고사 주 1회, 개인별 취약 유형 분석 리포트, 1:1 심층 클리닉'}
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 items-start" hoverEffect={false}>
                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">목표 수준</h4>
                  <p className="text-gray-600 text-sm">
                    {activeTab === 'middle' ? '현행 심화 100% 이해 + 고등 선행(수I, 수II) 기본기 확립' : '내신 1등급 확보 + 수능 수학 1등급 달성'}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;