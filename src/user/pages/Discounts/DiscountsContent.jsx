import React from 'react'

const DiscountsContent = () => {
      const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [discounts, setDiscounts] = useState([]);
  const [loadingDiscounts, setLoadingDiscounts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [topBanners, setTopBanners] = useState([]);
  const [midBanners, setMidBanners] = useState([]);
  const [bottomBanners, setBottomBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState({ top: 0, mid: 0, bottom: 0 });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchDiscounts();
      fetchBanners();
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prev => ({
        top: topBanners.length > 0 ? (prev.top + 1) % topBanners.length : 0,
        mid: midBanners.length > 0 ? (prev.mid + 1) % midBanners.length : 0,
        bottom: bottomBanners.length > 0 ? (prev.bottom + 1) % bottomBanners.length : 0
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, [topBanners.length, midBanners.length, bottomBanners.length]);

  const fetchDiscounts = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('discounts')
        .select(`*, businesses (*)`)
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) throw error;
      setDiscounts(data || []);
    } catch (error) {
      console.error('Error fetching discounts:', error);
    } finally {
      setLoadingDiscounts(false);
    }
  };

  const fetchBanners = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('advertising_banners')
        .select('*')
        .eq('is_active', true)
        .lte('start_date', new Date().toISOString())
        .gte('end_date', new Date().toISOString())
        .is('category', null)
        .order('display_order', { ascending: true });
      if (error) throw error;
      const banners = data || [];
      setTopBanners(banners.filter(b => b.position === 'top'));
      setMidBanners(banners.filter(b => b.position === 'mid'));
      setBottomBanners(banners.filter(b => b.position === 'bottom'));
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'food', label: 'Food & Dining' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'health', label: 'Health & Wellness' },
    { value: 'auto', label: 'Auto & Transport' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'services', label: 'Professional Services' },
    { value: 'family', label: 'Family & Kids' },
    { value: 'travel', label: 'Travel & Leisure' },
    { value: 'retail', label: 'Retail' },
    { value: 'entertainment', label: 'Entertainment' }
  ];

  const filteredDiscounts = discounts.filter(discount => {
    const matchesCategory = selectedCategory === 'all' || discount.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      discount.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discount.businesses?.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredDiscounts = filteredDiscounts.filter(d => d.is_featured);
  const regularDiscounts = filteredDiscounts.filter(d => !d.is_featured);

  const BannerDisplay = ({ banners, position }) => {
    if (!banners || banners.length === 0) return null;
    const currentBanner = banners[currentBannerIndex[position]];
    if (!currentBanner) return null;

    return (
      <div className="w-full mb-8">
        <Link to={currentBanner.link_url || '#'} className="block">
          <div className="relative w-full h-[200px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all">
            <AppImage src={currentBanner.image_url} alt={currentBanner.title || 'Advertisement'} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">Ad</div>
          </div>
        </Link>
        {banners.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(prev => ({ ...prev, [position]: index }))}
                className={`w-2 h-2 rounded-full transition-all ${index === currentBannerIndex[position] ? 'bg-primary w-6' : 'bg-border'}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const DiscountCard = ({ discount }) => {
    const hasValidBusinessId = discount.business_id && discount.business_id !== ':id';
    const Wrapper = hasValidBusinessId ? Link : 'div';
    const wrapperProps = hasValidBusinessId ? { to: `/business-profile/${discount.business_id}` } : {};

    return (
      <Wrapper {...wrapperProps} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group">
        <div className="relative h-48 overflow-hidden">
          <AppImage
            src={discount.businesses?.logo_url || 'https://images.unsplash.com/photo-1542838132-92c53300491e'}
            alt={discount.businesses?.name || 'Business'}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount.is_featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">Featured</div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">{discount.businesses?.name}</h3>
          <p className="text-primary font-bold text-lg mb-3">{discount.offer_text}</p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{discount.description}</p>
          {discount.terms && <p className="text-xs text-muted-foreground">{discount.terms}</p>}
        </div>
      </Wrapper>
    );
  };
  return (
   <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">Member-Exclusive Discounts</h1>
            <p className="text-xl text-muted-foreground mb-8">Browse 150+ exclusive discounts from trusted local businesses across the Cayman Islands.</p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search businesses or discounts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 border-2 border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Icon name="MagnifyingGlassIcon" size={24} className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <BannerDisplay banners={topBanners} position="top" />

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.value
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-white text-foreground border border-border hover:border-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {featuredDiscounts.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Featured Discounts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredDiscounts.map((discount) => <DiscountCard key={discount.id} discount={discount} />)}
            </div>
          </div>
        )}

        <BannerDisplay banners={midBanners} position="mid" />

        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">All Discounts</h2>
          {loadingDiscounts ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : regularDiscounts.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="BuildingStorefrontIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No discounts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {regularDiscounts.map((discount) => <DiscountCard key={discount.id} discount={discount} />)}
            </div>
          )}
        </div>

        <BannerDisplay banners={bottomBanners} position="bottom" />
      </div>
    </div>
  )
}

export default DiscountsContent