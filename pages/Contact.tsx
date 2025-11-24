import React from 'react';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { MAP_PLACEHOLDER } from '../images/assets';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="입학 상담 및 문의"
          description="정확한 진단을 위해 방문 전 레벨 테스트 예약은 필수입니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-heading">상담 예약 신청</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">학생 이름</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="이름 입력" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">학교 / 학년</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="예: 대치중 2학년" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">학부모 연락처</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">희망 상담 시간</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option>시간 선택</option>
                  <option>평일 오전 (10:00 ~ 12:00)</option>
                  <option>평일 오후 (14:00 ~ 18:00)</option>
                  <option>토요일 (10:00 ~ 16:00)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">현재 성적 및 고민사항 (선택)</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-32 resize-none" placeholder="현재 등급이나 특히 어려워하는 단원 등을 적어주세요."></textarea>
              </div>

              <div className="pt-2">
                <Button fullWidth size="lg">예약 신청하기</Button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  신청 후 24시간 이내에 담당자가 전화로 일정을 확정해 드립니다.
                </p>
              </div>
            </form>
          </Card>

          {/* Info & Map */}
          <div className="space-y-8">
            <Card className="p-8 bg-primary text-white">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">상담 안내</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Clock className="text-secondary flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">운영 시간</strong>
                    <span className="text-blue-100 text-sm">평일: 14:00 - 22:00<br/>토/일: 10:00 - 22:00</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-secondary flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">전화 문의</strong>
                    <span className="text-blue-100 text-sm">02-1234-5678</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">TIP</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    오후 4시 이후에는 수업 중이라 전화 연결이 어려울 수 있습니다. 문자를 남겨주시면 쉬는 시간에 연락드립니다.
                  </p>
                </li>
              </ul>
            </Card>

            <div className="rounded-xl overflow-hidden shadow-lg h-80 relative">
              <img src={MAP_PLACEHOLDER} alt="Map" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-xs">
                 <MapPin className="text-primary" />
                 <div>
                   <div className="font-bold text-sm">KAIST 수학학원</div>
                   <div className="text-xs text-gray-500">서울 강남구 대치동 123-45</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;