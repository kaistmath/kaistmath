import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, BrainCircuit } from 'lucide-react';
import Button from '../components/UI/Button';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';
import { HERO_BG, FEATURE_1, FEATURE_2, FEATURE_3 } from '../images/assets';

const Home: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="University Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 tracking-widest uppercase animate-fade-in-up">
            KAIST의 사고방식을 배웁니다
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            수학, 재능이 아니라<br />
            <span className="text-secondary">올바른 방법</span>입니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            문제 풀이 기술이 아닌 출제 원리를 꿰뚫는 통찰력.<br/>
            KAIST 출신 강사진이 설계한 논리적 사고 커리큘럼을 만나보세요.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">무료 레벨 테스트 신청</Button>
            </Link>
            <Link to="/curriculum">
              <Button size="lg" variant="white">커리큘럼 확인하기</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why KAIST Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="Why KAIST Math?"
            title="상위 1%를 위한 확실한 선택"
            description="다른 학원과는 근본적으로 다른 접근 방식을 취합니다. 우리는 정답을 맞추는 것을 넘어, 문제를 지배하는 힘을 기릅니다."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-t-4 border-t-primary">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">원리 중심의 사고</h3>
              <p className="text-gray-600 leading-relaxed">
                단순 암기식 풀이가 아닌, 정의와 정리를 기반으로 한 논리적 전개를 훈련합니다.
              </p>
            </Card>
            <Card className="text-center p-8 border-t-4 border-t-secondary">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">KAIST 강사진 직강</h3>
              <p className="text-gray-600 leading-relaxed">
                수학을 전공한 KAIST 출신 강사진이 직접 교재를 집필하고 강의를 진행합니다.
              </p>
            </Card>
            <Card className="text-center p-8 border-t-4 border-t-primary">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">압도적인 결과</h3>
              <p className="text-gray-600 leading-relaxed">
                매년 SKY 대학 및 의치한 합격생을 배출하며, 평균 2등급 이상의 성적 향상을 보장합니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Management System */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <SectionTitle 
                align="left"
                subtitle="System"
                title="빈틈없는 3단계 관리 시스템"
                description="학생이 모르는 것을 확실히 알 때까지, KAIST 수학학원은 끝까지 책임집니다."
              />
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">일일 테스트 & 오답 클리닉</h4>
                    <p className="text-gray-600">매 수업 시작 전 테스트를 통해 이해도를 점검하고, 틀린 문제는 1:1로 밀착 지도합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">KAIST 시크릿 노트</h4>
                    <p className="text-gray-600">상위권 도약을 위한 자체 제작 심화 교재와 오답 노트를 제공합니다.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">주간 학습 리포트</h4>
                    <p className="text-gray-600">학부모님께 매주 학생의 성취도, 과제 수행률, 테스트 결과를 문자로 발송합니다.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline">자세히 보기</Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={FEATURE_1} alt="Studying" className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8" />
                <img src={FEATURE_2} alt="Teaching" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 변화를 시작하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            수학에 대한 자신감, KAIST 수학학원에서 찾아드립니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary">상담 예약하기</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;