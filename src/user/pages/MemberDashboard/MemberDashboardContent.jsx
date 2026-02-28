import React, { useEffect, useState } from 'react'
import Icon from '../../components/ui/AppIcon'
import { QRCodeSVG } from 'qrcode.react';
import AppImage from '../../components/ui/AppImage';
import { Link } from 'react-router-dom';


const MemberDashboardContent = () => {
  const [user] = useState({ id: 'mock-user-id', user_metadata: { full_name: 'John Doe' }, email: 'john.doe@example.com' });
  const [qrCodeData, setQrCodeData] = useState('');
  const [showQRModal, setShowQRModal] = useState(false);
  const [travelDeals, setTravelDeals] = useState([]);
  const [newDiscounts, setNewDiscounts] = useState([]);
  const [unbeatableDeals, setUnbeatableDeals] = useState([]);
  const [newCertificates, setNewCertificates] = useState([]);
  const [hotCertificates, setHotCertificates] = useState([]);
  const [providerDirectory, setProviderDirectory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      generateQRCode();
      fetchDashboardData();
      
      // Rotate QR code every 10 minutes
      const qrInterval = setInterval(() => {
        generateQRCode();
      }, 10 * 60 * 1000);
      
      return () => clearInterval(qrInterval);
    }
  }, [user]);

  const generateQRCode = async () => {
    const timestamp = Date.now();
    const qrData = `DCC-MEMBER-${user?.id}-${timestamp}`;
    setQrCodeData(qrData);
    
    // Store in database
    // Supabase logic removed
  };

  const fetchDashboardData = async () => {
    try {
      // Supabase logic removed
      setTravelDeals([]);
      setNewDiscounts([]);
      setUnbeatableDeals([]);
      setNewCertificates([]);
      setHotCertificates([]);
      setProviderDirectory([]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-green-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with QR Code Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Welcome, <span className="text-[#1C4D8D]">{user?.user_metadata?.full_name || user?.email?.split('@')?.[0]}</span>
            </h1>
            <p className="text-lg text-slate-600">
              Your exclusive member benefits await.
            </p>
          </div>
          <button
            onClick={() => setShowQRModal(true)}
            className="group relative px-6 py-3 bg-[#1C4D8D] text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            <Icon name="QrCodeIcon" size={24} />
            <span>Show Member ID</span>
          </button>
        </div>

        {/* Section 1: Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Link
            to="/travel"
            className="group relative overflow-hidden  bg-gradient-to-br from-[#1C4D8D] to-[#4988C4] text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="GlobeAltIcon" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Travel Deals</h3>
              <p className="text-blue-100 font-medium">Save up to 70% on hotels & flights worldwide</p>
            </div>
          </Link>

          <Link
            to="/discounts"
            className="group relative overflow-hidden  bg-gradient-to-br from-[#1C4D8D] to-[#4988C4] text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="TagIcon" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Local Discounts</h3>
              <p className="text-emerald-100 font-medium">Exclusive savings at local businesses</p>
            </div>
          </Link>

          <Link
            to="/certificates"
            className="group relative overflow-hidden bg-gradient-to-br from-[#1C4D8D] to-[#4988C4] text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="TicketIcon" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Certificates</h3>
              <p className="text-violet-100 font-medium">Purchase high-value certificates for less</p>
            </div>
          </Link>
        </div>

        {/* Section 2: Special Travel Deals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Featured Travel Deals</h2>
            <Link to="/travel" className="text-[#1C4D8D] font-semibold hover:underline flex items-center gap-1">
              View All <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {travelDeals.map((deal) => (
              <div key={deal.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  {deal.image_url && (
                    <AppImage
                      src={deal.image_url}
                      alt={deal.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{deal.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-1">{deal.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Member Price</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#1C4D8D]">${deal.member_price}</span>
                      {deal.regular_price && (
                          <span className="text-sm text-slate-400 line-through">${deal.regular_price}</span>
                      )}
                      </div>
                    </div>
                    <Link
                      to="/travel"
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-[#1C4D8D] hover:text-white transition-all duration-300"
                    >
                      View Deal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: New Discounts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">New Local Discounts</h2>
            <Link to="/discounts" className="text-[#1C4D8D] font-semibold hover:underline flex items-center gap-1">
              View All <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newDiscounts.map((discount) => (
              <div key={discount.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 flex-shrink-0 bg-white p-1">
                    {discount.businesses?.logo_url ? (
                      <AppImage
                        src={discount.businesses.logo_url}
                        alt={discount.businesses.name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-xl">
                        <Icon name="BuildingStorefrontIcon" size={24} className="text-slate-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{discount.businesses?.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {discount.category}
                    </span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-5 mb-5 border border-blue-100">
                  <p className="text-lg font-bold text-[#1C4D8D] text-center">{discount.offer_text}</p>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{discount.description}</p>
                
                <Link
                  to={`/business-profile/${discount.business_id}`}
                  className="w-full block text-center py-3 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:border-[#1C4D8D] hover:text-[#1C4D8D] transition-all"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Unbeatable Deals (Horizontal Scrolling Banner) */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">Unbeatable Deals</h2>
          <div className="relative group">
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x">
              {unbeatableDeals.map((banner) => (
                <Link
                  key={banner.id}
                  to={banner.link_url || '#'}
                  className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group/card"
                >
                  <div className="relative h-52 overflow-hidden">
                     <AppImage
                      src={banner.image_url}
                      alt={banner.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-[#1C4D8D] text-white text-xs font-bold rounded-md mb-2 inline-block">Featured</span>
                      <h3 className="font-bold text-white text-xl leading-tight">{banner.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">{banner.businesses?.name}</p>
                    <span className="text-[#1C4D8D] text-sm font-bold flex items-center gap-1">
                      Check it out <Icon name="ArrowRightIcon" size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: New Certificates */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">New Certificates</h2>
            <Link to="/certificates" className="text-[#1C4D8D] font-semibold hover:underline flex items-center gap-1">
              View All <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-slate-50 rounded-[1.4rem] p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center p-1">
                      {cert.businesses?.logo_url ? (
                        <AppImage
                          src={cert.businesses.logo_url}
                          alt={cert.businesses.name}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <Icon name="TicketIcon" size={24} className="text-slate-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{cert.title}</h3>
                      <p className="text-sm text-slate-500">{cert.businesses?.name}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-sm text-slate-500">Face Value</span>
                      <span className="text-lg font-bold text-slate-900 line-through decoration-slate-400 decoration-2">${cert.face_value}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#1C4D8D] to-[#4988C4] rounded-xl text-white shadow-md">
                      <span className="text-sm font-medium opacity-90">Your Price</span>
                      <span className="text-2xl font-bold">${cert.member_price}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-medium text-slate-500 bg-slate-200/50 px-2 py-1 rounded-md">
                      {cert.quantity_available} left
                    </span>
                    <Link
                      to="/certificates"
                      className="text-sm font-bold text-[#1C4D8D] hover:underline"
                    >
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: HOT Certificates (Ad Banner) */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4988C4] to-[#BDE8F5] shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <Icon name="FireIcon" size={28} className="text-[#1C4D8D]" variant="solid" />
                </div>
                HOT Certificates - Limited Time!
              </h2>
              
              <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                {hotCertificates.map((cert) => (
                  <div key={cert.id} className="flex-shrink-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                        <p className="text-orange-100 text-sm">{cert.businesses?.name}</p>
                      </div>
                      <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-lg">HOT</span>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-orange-200 mb-0.5">Member Price</p>
                        <span className="text-3xl font-bold text-white">${cert.member_price}</span>
                      </div>
                      <Link
                        to="/certificates"
                        className="px-4 py-2 bg-white text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shadow-lg"
                      >
                        Get It
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Full Discount Provider Directory */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">Discount Provider Directory</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {providerDirectory.map((business) => (
              <Link
                key={business.id}
                to={`/business-profile/${business.id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-slate-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                  {business.logo_url ? (
                    <AppImage
                      src={business.logo_url}
                      alt={business.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <Icon name="BuildingStorefrontIcon" size={32} className="text-slate-400" />
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1 group-hover:text-[#1C4D8D] transition-colors">{business.name}</h3>
                <p className="text-xs text-slate-500 mb-2 line-clamp-1">{business.category}</p>
                <div className="mt-auto pt-2 border-t border-slate-50 w-full">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">
                    {business.location || 'Cayman Islands'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowQRModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">Member ID</h3>
              <button onClick={() => setShowQRModal(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>
            
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
              <QRCodeSVG value={qrCodeData} size={200} level="H" className="mb-4" />
              <p className="font-mono text-sm font-bold text-slate-600 tracking-widest">{user?.id?.substring(0, 8).toUpperCase()}</p>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-slate-900">
                Show this code to redeem discounts
              </p>
              <p className="text-xs text-slate-500">
                This code automatically refreshes every 10 minutes for your security.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MemberDashboardContent