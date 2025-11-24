import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded text-primary">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-bold">KAIST 수학</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              KAIST 출신 강사진의<br/>
              체계적인 관리 시스템.<br/>
              결과로 증명하는 수학 교육의 정답.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-secondary">바로가기</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">학원 소개</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">커리큘럼 안내</Link></li>
              <li><Link to="/results" className="hover:text-white transition-colors">명예의 전당</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">입학 상담 신청</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">서울특별시 강남구 대치동 123-45 KAIST 빌딩 3층</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">admissions@kaistmath.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 KAIST Math Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;