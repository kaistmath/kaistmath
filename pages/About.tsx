import React from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import { ABOUT_MAIN, INSTRUCTOR_1, INSTRUCTOR_2 } from '../images/assets';
import { Quote } from 'lucide-react';
import Card from '../components/UI/Card';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Intro Section */}
      <div className="container mx-auto px-4 mb-20">
        <SectionTitle 
          subtitle="About Us"
          title="수학을 포기하지 않으면 대학이 바뀝니다"
          description="KAIST 수학학원은 단순한 지식 전달자가 아닌, 학생의 잠재력을 이끌어내는 멘토가 되고자 합니다."
        />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] mb-12">
          <img src={ABOUT_MAIN} alt="Academy Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 md:p-12">
            <div className="max-w-2xl text-white">
              <Quote className="text-secondary mb-4 opacity-80" size={48} />
              <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-6">
                "수학은 머리 좋은 아이들만의 전유물이 아닙니다. 올바른 방법으로 끈기 있게 훈련한다면 누구나 정복할 수 있는 과목입니다. 제가 KAIST에 진학할 수 있었던 그 공부법 그대로 학생들을 지도하겠습니다."
              </p>
              <p className="text-lg font-bold text-secondary">- 김민석 대표 원장</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="최고의 강사진" 
            description="실력과 열정을 겸비한 전문가 그룹입니다."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8 max-w-4xl mx-auto">
            {/* Instructor 1 */}
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 h-64 md:h-auto">
                <img src={INSTRUCTOR_1} alt="Instructor" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-secondary font-bold text-sm tracking-wider">고등부 전임</span>
                  <h3 className="text-2xl font-bold text-heading">박진수 선생님</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  <li>KAIST 수리과학과 졸업</li>
                  <li>전 대치동 M학원 최상위반 전임</li>
                  <li>수능 수학 만점자 50명 이상 배출</li>
                </ul>
                <p className="text-gray-500 italic text-sm border-l-4 border-primary pl-3">
                  "킬러 문항도 결국 기본 개념의 응용입니다. 두려움을 확신으로 바꿔드리겠습니다."
                </p>
              </div>
            </Card>

             {/* Instructor 2 */}
             <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 h-64 md:h-auto">
                <img src={INSTRUCTOR_2} alt="Instructor" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-secondary font-bold text-sm tracking-wider">중등부 전임</span>
                  <h3 className="text-2xl font-bold text-heading">이지은 선생님</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  <li>연세대학교 수학교육과 졸업</li>
                  <li>KAIST 교육대학원 석사</li>
                  <li>특목고 입시 전문 경력 7년</li>
                </ul>
                <p className="text-gray-500 italic text-sm border-l-4 border-primary pl-3">
                  "고등 수학의 기초는 중등 과정에서 완성됩니다. 빈틈 없는 기초 공사를 약속합니다."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;