import React from 'react'
import AppImage from '../../../components/ui/AppImage';

const AutomativeMarine = () => {
    const stores = [
  { id: 1, name: "Tony's Toys", image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/TTs-Logo-300x300.jpg', description: "Tony's Toys offers a wide range of water sports equipment and accessories.", phone: '345-123-4567', email: 'info@tonystoys.ky' },
  { id: 2, name: 'Kirk Marine', image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/Kirk-Freeport-Logo-300x300.png', description: 'Kirk Marine provides boat repair, maintenance, and marine parts.', phone: '345-234-5678', email: 'info@kirkmarine.ky' },
  { id: 3, name: 'Scotts Auto', image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/Scotts-Logo-300x300.jpg', description: "Scott's Auto provides expert auto repair and maintenance.", phone: '345-345-6789', email: 'info@scottsauto.ky' },
  { id: 4, name: 'Polaris', image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/Polaris-Logo-300x300.jpg', description: 'Polaris offers ATVs, UTVs, and outdoor recreation vehicles.', phone: '345-456-7890', email: 'info@polaris.ky' },
  { id: 5, name: 'AutoZone', image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/AutoZone-Logo-300x300.png', description: 'AutoZone: Your one-stop shop for auto parts and accessories.', phone: '345-567-8901', email: 'info@autozone.ky' },
  { id: 6, name: 'Cayman Automotive', image: 'https://web.archive.org/web/20200811165616im_/https://clubsave.ky/wp-content/uploads/2020/06/Cayman-Automotive-Logo-300x300.jpg', description: 'Cayman Automotive: Full-service auto care center.', phone: '345-678-9012', email: 'info@caymanautomotive.ky' }
];
  return (
     <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-heading text-4xl font-bold text-slate-900 mb-8">Automotive & Marine</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <AppImage src={store.image} alt={store.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{store.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{store.description}</p>
                {store.phone && <p className="text-sm text-slate-600"><strong>Phone:</strong> {store.phone}</p>}
                {store.email && <p className="text-sm text-slate-600"><strong>Email:</strong> {store.email}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AutomativeMarine