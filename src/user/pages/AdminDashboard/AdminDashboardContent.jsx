import React, { useState, useEffect } from 'react';
import Icon from '../../components/ui/AppIcon';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const AdminDashboardContent = () => {

    const [activeTab, setActiveTab] = useState('approvals');
    const [approvalSubTab, setApprovalSubTab] = useState('memberships');
    const [analyticsSubTab, setAnalyticsSubTab] = useState('revenue');

    // Approvals state
    const [pendingMemberships, setPendingMemberships] = useState([]);
    const [pendingEmployers, setPendingEmployers] = useState([]);
    const [pendingAssociations, setPendingAssociations] = useState([]);
    const [pendingBusinesses, setPendingBusinesses] = useState([]);
    const [pendingB2B, setPendingB2B] = useState([]);
    const [loadingApprovals, setLoadingApprovals] = useState(false);

    // Payment verification state
    const [paymentVerifications, setPaymentVerifications] = useState([]);
    const [loadingPayments, setLoadingPayments] = useState(false);

    // Travel lock state
    const [employees, setEmployees] = useState([]);
    const [loadingEmployees, setLoadingEmployees] = useState(false);
    const [searchEmployer, setSearchEmployer] = useState('');

    // Analytics state
    const [revenueData, setRevenueData] = useState(null);
    const [membershipData, setMembershipData] = useState(null);
    const [loadingAnalytics, setLoadingAnalytics] = useState(false);
    const [analyticsFilters, setAnalyticsFilters] = useState({
        startDate: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        comparisonType: 'yoy',
        membershipType: 'all',
        district: 'all',
        ageGroup: 'all',
        sex: 'all',
    });

    // Banner state
    const [bannerSettings, setBannerSettings] = useState([]);
    const [activeBanners, setActiveBanners] = useState([]);
    const [editingSettings, setEditingSettings] = useState(null);
    const [loadingBanners, setLoadingBanners] = useState(false);
    const [editFormData, setEditFormData] = useState({});
    const [exportingMembers, setExportingMembers] = useState(false);
    const [exportingAssociations, setExportingAssociations] = useState(false);
    const [exportingBusinesses, setExportingBusinesses] = useState(false);

    // Pricing state
    const [individualPricing, setIndividualPricing] = useState(null);
    const [businessPricing, setBusinessPricing] = useState(null);
    const [associationPricing, setAssociationPricing] = useState(null);
    const [editingPricing, setEditingPricing] = useState(null);
    const [pricingFormData, setPricingFormData] = useState({});
    const [pricingSubTab, setPricingSubTab] = useState('individual');

    // Memberships state
    const [individualMemberships, setIndividualMemberships] = useState([]);
    const [organizationMemberships, setOrganizationMemberships] = useState([]);
    const [memberUploads, setMemberUploads] = useState([]);
    const [uploadedMembers, setUploadedMembers] = useState([]);
    const [selectedUpload, setSelectedUpload] = useState(null);
    const [membershipSubTab, setMembershipSubTab] = useState('individual');
    const [loadingMemberships, setLoadingMemberships] = useState(false);

    // Email templates state
    const [emailTemplates, setEmailTemplates] = useState([]);
    const [editingTemplate, setEditingTemplate] = useState(null);
    const [templateFormData, setTemplateFormData] = useState({});
    const [loadingTemplates, setLoadingTemplates] = useState(false);

    useEffect(() => {
        if (activeTab === 'approvals') fetchApprovals();
        else if (activeTab === 'payment-verification') fetchPaymentVerifications();
        else if (activeTab === 'travel-lock') fetchEmployees();
        else if (activeTab === 'analytics') fetchAnalytics();
        else if (activeTab === 'banners') { fetchBannerSettings(); fetchActiveBanners(); }
        else if (activeTab === 'pricing') fetchStandardPricing();
        else if (activeTab === 'memberships') fetchMemberships();
        else if (activeTab === 'email-templates') fetchEmailTemplates();
    }, [activeTab, approvalSubTab]);

    useEffect(() => {
        if (activeTab === 'analytics') fetchAnalytics();
    }, [analyticsFilters, analyticsSubTab]);

    // ── Approvals ──────────────────────────────────────────────────────────────
    const fetchApprovals = async () => {
        setLoadingApprovals(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching approvals:', error);
        } finally {
            setLoadingApprovals(false);
        }
    };

    const handleApproval = async (id, action, type) => {
        // Supabase logic removed
        alert('Approval logic is disabled.');
    };

    // ── Payment Verification ───────────────────────────────────────────────────
    const fetchPaymentVerifications = async () => {
        setLoadingPayments(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching payment verifications:', error);
        } finally {
            setLoadingPayments(false);
        }
    };

    const handlePaymentVerification = async (id, action) => {
        try {
            alert('Payment verification logic is disabled.');
        } catch (error) {
            console.error('Error verifying payment:', error);
        }
    };

    // ── Travel Lock ────────────────────────────────────────────────────────────
    const fetchEmployees = async () => {
        setLoadingEmployees(true);
        try {
           
        } catch (error) {
            console.error('Error fetching employees:', error);
        } finally {
            setLoadingEmployees(false);
        }
    };

    const toggleTravelLock = async (id, currentStatus) => {
        try {
            alert('Travel lock logic is disabled.');
        } catch (error) {
            console.error('Error toggling travel lock:', error);
        }
    };

    // ── Analytics ──────────────────────────────────────────────────────────────
    const fetchAnalytics = async () => {
        setLoadingAnalytics(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching analytics:', error);
        } finally {
            setLoadingAnalytics(false);
        }
    };

    const exportToCSV = (data, filename) => {
        if (!data || data.length === 0) { alert('No data to export'); return; }
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(h => JSON.stringify(row[h] || '')).join(','))
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const exportAnalytics = () => {
        if (analyticsSubTab === 'revenue' && revenueData) {
            exportToCSV(revenueData.chartData, 'revenue_analytics');
        } else if (analyticsSubTab === 'membership' && membershipData) {
            const exportData = [
                ...membershipData.byType.map(item => ({ category: 'Type', name: item.name, count: item.value })),
                ...membershipData.byDistrict.map(item => ({ category: 'District', name: item.name, count: item.value })),
                ...membershipData.byMonth.map(item => ({ category: 'Month', name: item.month, count: item.count })),
            ];
            exportToCSV(exportData, 'membership_analytics');
        }
    };

    // ── Banners ────────────────────────────────────────────────────────────────
    const fetchBannerSettings = async () => {
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching banner settings:', error);
        }
    };

    const fetchActiveBanners = async () => {
        setLoadingBanners(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching active banners:', error);
        } finally {
            setLoadingBanners(false);
        }
    };

    const toggleBannerStatus = async (id, currentStatus) => {
        try {
            // Supabase logic removed
            alert('Banner status logic is disabled.');
        } catch (error) {
            console.error('Error toggling banner status:', error);
        }
    };

    const updateBannerSettings = async (settingsId) => {
        // Supabase logic removed
        alert('Banner settings update logic is disabled.');
    };

    const startEditing = (setting) => {
        setEditingSettings(setting.id);
        setEditFormData({
            max_slots: setting.max_slots,
            monthly_price: setting.monthly_price,
            six_month_discount: setting.six_month_discount || 10,
            annual_discount: setting.annual_discount || 15,
            rotation_enabled: setting.rotation_enabled,
        });
    };

    const cancelEditing = () => { setEditingSettings(null); setEditFormData({}); };

    // ── Pricing ────────────────────────────────────────────────────────────────
    const fetchStandardPricing = async () => {
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching standard pricing:', error);
        }
    };

    const updateStandardPricing = async (planType) => {
        // Supabase logic removed
        alert('Pricing update logic is disabled.');
    };

    // ── Memberships ────────────────────────────────────────────────────────────
    const fetchMemberships = async () => {
        setLoadingMemberships(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching memberships:', error);
        } finally {
            setLoadingMemberships(false);
        }
    };

    const fetchUploadedMembers = async (uploadId) => {
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching uploaded members:', error);
        }
    };

    const updateMembershipStatus = async (id, status, type) => {
        // Supabase logic removed
        alert('Status update logic is disabled.');
    };

    const massApproveMembers = async (uploadId) => {
        // Supabase logic removed
        alert('Mass approve logic is disabled.');
    };

    // ── Email Templates ────────────────────────────────────────────────────────
    const fetchEmailTemplates = async () => {
        setLoadingTemplates(true);
        try {
            // Supabase logic removed
        } catch (error) {
            console.error('Error fetching email templates:', error);
        } finally {
            setLoadingTemplates(false);
        }
    };

    const updateEmailTemplate = async (id, updates) => {
        // Supabase logic removed
        alert('Template update logic is disabled.');
    };

    // ── Exports ────────────────────────────────────────────────────────────────
    const exportMembers = async () => {
        setExportingMembers(true);
        try {
            // Supabase logic removed
            exportToCSV([], 'members');
        } catch (error) {
            console.error('Error exporting members:', error);
        } finally {
            setExportingMembers(false);
        }
    };

    const exportAssociations = async () => {
        setExportingAssociations(true);
        try {
            // Supabase logic removed
            exportToCSV([], 'associations');
        } catch (error) {
            console.error('Error exporting associations:', error);
        } finally {
            setExportingAssociations(false);
        }
    };

    const exportBusinesses = async () => {
        setExportingBusinesses(true);
        try {
            // Supabase logic removed
            exportToCSV([], 'businesses');
        } catch (error) {
            console.error('Error exporting businesses:', error);
        } finally {
            setExportingBusinesses(false);
        }
    };

    const stats = [
        { label: 'Total Members', value: individualMemberships.length.toString(), icon: 'UsersIcon', color: 'bg-blue-500' },
        { label: 'Active Businesses', value: pendingBusinesses.length.toString(), icon: 'BuildingStorefrontIcon', color: 'bg-green-500' },
        { label: 'Pending Approvals', value: (pendingMemberships.length + pendingEmployers.length + pendingAssociations.length + pendingBusinesses.length + pendingB2B.length).toString(), icon: 'ClockIcon', color: 'bg-orange-500' },
        { label: 'Payment Verifications', value: paymentVerifications.length.toString(), icon: 'CurrencyDollarIcon', color: 'bg-purple-500' },
    ];

    const tabBtn = (tab, label) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
            {label}
        </button>
    );

    const subTabBtn = (current, val, label, setter) => (
        <button
            onClick={() => setter(val)}
            className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${current === val ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-500">Comprehensive platform management and analytics</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                                    <Icon name={stat.icon} size={24} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
                    {tabBtn('approvals', 'Approvals')}
                    {tabBtn('payment-verification', 'Payment Verification')}
                    {tabBtn('travel-lock', 'Travel Lock')}
                    {tabBtn('analytics', 'Analytics')}
                    {tabBtn('categories', 'Categories')}
                    {tabBtn('reports', 'Reports')}
                    {tabBtn('banners', 'Banner Ads')}
                    {tabBtn('marketing', 'Marketing')}
                    {tabBtn('pricing', 'Pricing Plans')}
                    {tabBtn('memberships', 'Memberships')}
                    {tabBtn('email-templates', 'Email Templates')}
                </div>

                {/* ── Approvals Tab ── */}
                {activeTab === 'approvals' && (
                    <div className="space-y-6">
                        <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
                            {subTabBtn(approvalSubTab, 'memberships', `Individual Memberships (${pendingMemberships.length})`, setApprovalSubTab)}
                            {subTabBtn(approvalSubTab, 'employers', `Employers (${pendingEmployers.length})`, setApprovalSubTab)}
                            {subTabBtn(approvalSubTab, 'associations', `Associations (${pendingAssociations.length})`, setApprovalSubTab)}
                            {subTabBtn(approvalSubTab, 'businesses', `Business Partners (${pendingBusinesses.length})`, setApprovalSubTab)}
                            {subTabBtn(approvalSubTab, 'b2b', `B2B Partners (${pendingB2B.length})`, setApprovalSubTab)}
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Pending {approvalSubTab.charAt(0).toUpperCase() + approvalSubTab.slice(1)} Approvals
                            </h2>
                            {loadingApprovals ? (
                                <p className="text-center py-8 text-gray-500">Loading...</p>
                            ) : (
                                <div className="space-y-4">
                                    {approvalSubTab === 'memberships' && pendingMemberships.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="UserIcon" size={20} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.first_name} {item.last_name}</p>
                                                    <p className="text-sm text-gray-500">{item.email} • {item.district?.replace('_', ' ')} • ${item.payment_amount}</p>
                                                    <p className="text-xs text-gray-400">Status: {item.status?.replace('_', ' ')} • Payment: {item.payment_status}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleApproval(item.id, 'approve', 'membership')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                                                <button onClick={() => handleApproval(item.id, 'reject', 'membership')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    ))}
                                    {approvalSubTab === 'employers' && pendingEmployers.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="BuildingOfficeIcon" size={20} className="text-green-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.organization_name}</p>
                                                    <p className="text-sm text-gray-500">{item.contact_name} • {item.email} • {item.estimated_members} members</p>
                                                    <p className="text-xs text-gray-400">Status: {item.status?.replace('_', ' ')} • ${item.total_price || (item.estimated_members * 119.99).toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleApproval(item.id, 'approve', 'employer')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                                                <button onClick={() => handleApproval(item.id, 'reject', 'employer')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    ))}
                                    {approvalSubTab === 'associations' && pendingAssociations.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="UserGroupIcon" size={20} className="text-purple-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.organization_name}</p>
                                                    <p className="text-sm text-gray-500">{item.contact_name} • {item.email} • {item.estimated_members} members</p>
                                                    <p className="text-xs text-gray-400">Status: {item.status?.replace('_', ' ')} • ${item.total_price || (item.estimated_members * 89.99).toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleApproval(item.id, 'approve', 'association')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                                                <button onClick={() => handleApproval(item.id, 'reject', 'association')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    ))}
                                    {approvalSubTab === 'businesses' && pendingBusinesses.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="BuildingStorefrontIcon" size={20} className="text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.name}</p>
                                                    <p className="text-sm text-gray-500">{item.category} • {item.location}</p>
                                                    <p className="text-xs text-gray-400">{item.email} • {item.phone}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleApproval(item.id, 'approve', 'business')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                                                <button onClick={() => handleApproval(item.id, 'reject', 'business')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    ))}
                                    {approvalSubTab === 'b2b' && pendingB2B.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="BriefcaseIcon" size={20} className="text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{item.company_name}</p>
                                                    <p className="text-sm text-gray-500">{item.partner_type?.replace('_', ' ')} • {item.category}</p>
                                                    <p className="text-xs text-gray-400">{item.contact_email} • {item.contact_phone}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleApproval(item.id, 'approve', 'b2b')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                                                <button onClick={() => handleApproval(item.id, 'reject', 'b2b')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    ))}
                                    {((approvalSubTab === 'memberships' && pendingMemberships.length === 0) ||
                                        (approvalSubTab === 'employers' && pendingEmployers.length === 0) ||
                                        (approvalSubTab === 'associations' && pendingAssociations.length === 0) ||
                                        (approvalSubTab === 'businesses' && pendingBusinesses.length === 0) ||
                                        (approvalSubTab === 'b2b' && pendingB2B.length === 0)) && (
                                            <p className="text-center py-8 text-gray-500">No pending approvals</p>
                                        )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── Payment Verification Tab ── */}
                {activeTab === 'payment-verification' && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Verification</h2>
                        {loadingPayments ? (
                            <p className="text-center py-8 text-gray-500">Loading...</p>
                        ) : paymentVerifications.length === 0 ? (
                            <p className="text-center py-8 text-gray-500">No pending payment verifications</p>
                        ) : (
                            <div className="space-y-4">
                                {paymentVerifications.map((payment) => (
                                    <div key={payment.id} className="border border-gray-200 rounded-xl p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{payment.user_profiles?.full_name}</h3>
                                                <p className="text-sm text-gray-500">{payment.user_profiles?.email} • {payment.user_profiles?.role}</p>
                                                <p className="text-sm text-gray-500">Year: {payment.billing_year} • Amount: ${payment.annual_fee}</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Pending Review</span>
                                        </div>
                                        {payment.payment_proof_url && (
                                            <div className="mb-4">
                                                <p className="text-sm font-medium text-gray-900 mb-2">Payment Proof:</p>
                                                <a href={payment.payment_proof_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                                    View Uploaded Document
                                                </a>
                                            </div>
                                        )}
                                        <div className="flex gap-3">
                                            <button onClick={() => handlePaymentVerification(payment.id, 'approve')} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Approve Payment</button>
                                            <button onClick={() => handlePaymentVerification(payment.id, 'reject')} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Reject Payment</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ── Travel Lock Tab ── */}
                {activeTab === 'travel-lock' && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Travel Lock Controls</h2>
                            <input
                                type="text"
                                placeholder="Search by employer..."
                                value={searchEmployer}
                                onChange={(e) => setSearchEmployer(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {loadingEmployees ? (
                            <p className="text-center py-8 text-gray-500">Loading...</p>
                        ) : employees.length === 0 ? (
                            <p className="text-center py-8 text-gray-500">No employees found</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Employee Name</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Email</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Employer</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Travel Lock</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees
                                            .filter(emp => !searchEmployer || emp.user_profiles?.full_name?.toLowerCase().includes(searchEmployer.toLowerCase()))
                                            .map((employee) => (
                                                <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                    <td className="py-3 px-4 text-sm text-gray-900">{employee.full_name}</td>
                                                    <td className="py-3 px-4 text-sm text-gray-900">{employee.email}</td>
                                                    <td className="py-3 px-4 text-sm text-gray-900">{employee.user_profiles?.full_name || 'N/A'}</td>
                                                    <td className="py-3 px-4 text-sm">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${employee.status === 'active' ? 'bg-green-100 text-green-800' : employee.status === 'travel_locked' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                                            {employee.status?.replace('_', ' ')}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">
                                                        {employee.is_travel_locked ? (
                                                            <span className="flex items-center gap-2 text-red-600">
                                                                <Icon name="LockClosedIcon" size={16} /> Locked
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-2 text-green-600">
                                                                <Icon name="LockOpenIcon" size={16} /> Unlocked
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">
                                                        <button
                                                            onClick={() => toggleTravelLock(employee.id, employee.is_travel_locked)}
                                                            className={`px-4 py-2 rounded-lg transition-colors ${employee.is_travel_locked ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-red-500 text-white hover:bg-red-600'}`}
                                                        >
                                                            {employee.is_travel_locked ? 'Unlock' : 'Lock'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                {/* ── Analytics Tab ── */}
                {activeTab === 'analytics' && (
                    <div className="space-y-6">
                        <div className="flex gap-4 border-b border-gray-200">
                            {subTabBtn(analyticsSubTab, 'revenue', 'Revenue Analytics', setAnalyticsSubTab)}
                            {subTabBtn(analyticsSubTab, 'membership', 'Membership Analytics', setAnalyticsSubTab)}
                        </div>

                        {/* Filters */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Start Date</label>
                                    <input type="date" value={analyticsFilters.startDate} onChange={(e) => setAnalyticsFilters({ ...analyticsFilters, startDate: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">End Date</label>
                                    <input type="date" value={analyticsFilters.endDate} onChange={(e) => setAnalyticsFilters({ ...analyticsFilters, endDate: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Comparison</label>
                                    <select value={analyticsFilters.comparisonType} onChange={(e) => setAnalyticsFilters({ ...analyticsFilters, comparisonType: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="yoy">Year over Year</option>
                                        <option value="qoq">Quarter over Quarter</option>
                                        <option value="mom">Month over Month</option>
                                    </select>
                                </div>
                                {analyticsSubTab === 'membership' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">District</label>
                                        <select value={analyticsFilters.district} onChange={(e) => setAnalyticsFilters({ ...analyticsFilters, district: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="all">All Districts</option>
                                            <option value="george_town">George Town</option>
                                            <option value="west_bay">West Bay</option>
                                            <option value="bodden_town">Bodden Town</option>
                                            <option value="north_side">North Side</option>
                                            <option value="east_end">East End</option>
                                            <option value="cayman_brac">Cayman Brac</option>
                                            <option value="little_cayman">Little Cayman</option>
                                        </select>
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">&nbsp;</label>
                                    <button onClick={exportAnalytics} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                        <Icon name="ArrowDownTrayIcon" size={16} /> Export CSV
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Revenue Analytics */}
                        {analyticsSubTab === 'revenue' && (
                            <div className="space-y-6">
                                {loadingAnalytics ? (
                                    <p className="text-center py-8 text-gray-500">Loading analytics...</p>
                                ) : revenueData ? (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                                <p className="text-sm text-gray-500 mb-2">Current Period Revenue</p>
                                                <p className="text-3xl font-bold text-gray-900">${revenueData.currentRevenue.toFixed(2)}</p>
                                                <p className="text-xs text-gray-400 mt-1">{revenueData.totalTransactions} transactions</p>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                                <p className="text-sm text-gray-500 mb-2">Comparison Period Revenue</p>
                                                <p className="text-3xl font-bold text-gray-900">${revenueData.comparisonRevenue.toFixed(2)}</p>
                                                <p className="text-xs text-gray-400 mt-1">{analyticsFilters.comparisonType.toUpperCase()}</p>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                                <p className="text-sm text-gray-500 mb-2">Change</p>
                                                <p className={`text-3xl font-bold ${revenueData.percentChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {revenueData.percentChange >= 0 ? '+' : ''}{revenueData.percentChange.toFixed(1)}%
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">{analyticsFilters.comparisonType.toUpperCase()} comparison</p>
                                            </div>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Trend</h3>
                                            <ResponsiveContainer width="100%" height={400}>
                                                <LineChart data={revenueData.chartData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                                                    <Legend />
                                                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-center py-8 text-gray-500">No data available</p>
                                )}
                            </div>
                        )}

                        {/* Membership Analytics */}
                        {analyticsSubTab === 'membership' && (
                            <div className="space-y-6">
                                {loadingAnalytics ? (
                                    <p className="text-center py-8 text-gray-500">Loading analytics...</p>
                                ) : membershipData ? (
                                    <>
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                            <p className="text-sm text-gray-500 mb-2">Total Members</p>
                                            <p className="text-4xl font-bold text-gray-900">{membershipData.total}</p>
                                            <p className="text-xs text-gray-400 mt-1">In selected period</p>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4">Members by Type</h3>
                                                <ResponsiveContainer width="100%" height={300}>
                                                    <PieChart>
                                                        <Pie data={membershipData.byType} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                                            {membershipData.byType.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                            ))}
                                                        </Pie>
                                                        <Tooltip />
                                                        <Legend />
                                                    </PieChart>
                                                </ResponsiveContainer>
                                            </div>
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4">Members by District</h3>
                                                <ResponsiveContainer width="100%" height={300}>
                                                    <BarChart data={membershipData.byDistrict}>
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Bar dataKey="value" fill="#10b981" name="Members" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Membership Growth Trend</h3>
                                            <ResponsiveContainer width="100%" height={300}>
                                                <LineChart data={membershipData.byMonth}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line type="monotone" dataKey="count" stroke="#8b5cf6" strokeWidth={2} name="New Members" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-center py-8 text-gray-500">No data available</p>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* ── Categories Tab ── */}
                {activeTab === 'categories' && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Manage Categories</h2>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Add Category</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['Dining', 'Fitness', 'Retail', 'Entertainment', 'Services', 'Travel'].map((category) => (
                                <div key={category} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                                    <span className="font-medium text-gray-900">{category}</span>
                                    <button className="text-red-500 hover:text-red-600"><Icon name="TrashIcon" size={20} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Reports Tab ── */}
                {activeTab === 'reports' && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Export Reports</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: 'DocumentTextIcon', title: 'Member Report', desc: 'Export all member data to CSV' },
                                { icon: 'ChartBarIcon', title: 'Business Analytics', desc: 'Export business performance data' },
                                { icon: 'TicketIcon', title: 'Redemption Report', desc: 'Export all redemption history' },
                                { icon: 'CurrencyDollarIcon', title: 'Revenue Report', desc: 'Export financial data' },
                            ].map((r) => (
                                <button key={r.title} className="p-6 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors">
                                    <Icon name={r.icon} size={24} className="text-blue-600 mb-2" />
                                    <p className="font-semibold text-gray-900 mb-1">{r.title}</p>
                                    <p className="text-sm text-gray-500">{r.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Banners Tab ── */}
                {activeTab === 'banners' && (
                    <div className="space-y-6">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Banner Settings</h2>
                            <div className="space-y-4">
                                {bannerSettings.map((setting) => (
                                    <div key={setting.id} className="border border-gray-200 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <Icon name="RectangleStackIcon" size={20} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 capitalize">{setting.position} Banner</h3>
                                                    <p className="text-sm text-gray-500">728 x 200 pixels</p>
                                                </div>
                                            </div>
                                            {editingSettings === setting.id ? (
                                                <button onClick={cancelEditing} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">Cancel</button>
                                            ) : (
                                                <button onClick={() => startEditing(setting)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Edit Settings</button>
                                            )}
                                        </div>
                                        {editingSettings === setting.id ? (
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                        <p className="text-sm text-gray-500 mb-1">Max Slots</p>
                                                        <input type="number" value={editFormData.max_slots || ''} onChange={(e) => setEditFormData({ ...editFormData, max_slots: parseInt(e.target.value) })} className="w-full text-2xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1" />
                                                    </div>
                                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                        <p className="text-sm text-gray-500 mb-2">Monthly Price</p>
                                                        <input type="number" step="0.01" value={editFormData.monthly_price || ''} onChange={(e) => setEditFormData({ ...editFormData, monthly_price: parseFloat(e.target.value) })} className="w-full text-xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1" placeholder="500.00" />
                                                    </div>
                                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                        <p className="text-sm text-gray-500 mb-2">Semi-Annual Discount (%)</p>
                                                        <input type="number" step="1" value={editFormData.six_month_discount || ''} onChange={(e) => setEditFormData({ ...editFormData, six_month_discount: parseFloat(e.target.value) })} className="w-full text-xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1" placeholder="10" />
                                                    </div>
                                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                        <p className="text-sm text-gray-500 mb-2">Annual Discount (%)</p>
                                                        <input type="number" step="1" value={editFormData.annual_discount || ''} onChange={(e) => setEditFormData({ ...editFormData, annual_discount: parseFloat(e.target.value) })} className="w-full text-xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1" placeholder="15" />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
                                                    <input type="checkbox" checked={editFormData.rotation_enabled || false} onChange={(e) => setEditFormData({ ...editFormData, rotation_enabled: e.target.checked })} className="w-5 h-5 text-blue-600" />
                                                    <span className="text-sm text-gray-900">Enable automatic rotation</span>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button onClick={() => updateBannerSettings(setting.id)} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Save Changes</button>
                                                    <button onClick={cancelEditing} className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">Cancel</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                    <p className="text-sm text-gray-500 mb-1">Max Slots</p>
                                                    <p className="text-2xl font-bold text-gray-900">{setting.max_slots}</p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                    <p className="text-sm text-gray-500 mb-1">Monthly Price</p>
                                                    <p className="text-2xl font-bold text-green-600">${setting.monthly_price?.toFixed(2)}</p>
                                                    <p className="text-xs text-gray-400">Base price per month</p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                    <p className="text-sm text-gray-500 mb-1">Semi-Annual Price</p>
                                                    <p className="text-2xl font-bold text-green-600">${(setting.monthly_price * 6 * (1 - (setting.six_month_discount ?? 10) / 100)).toFixed(2)}</p>
                                                    <p className="text-xs text-green-600">{setting.six_month_discount ?? 10}% discount (6 months)</p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4 border border-gray-100">
                                                    <p className="text-sm text-gray-500 mb-1">Annual Price</p>
                                                    <p className="text-2xl font-bold text-green-600">${(setting.monthly_price * 12 * (1 - (setting.annual_discount ?? 15) / 100)).toFixed(2)}</p>
                                                    <p className="text-xs text-green-600">{setting.annual_discount ?? 15}% discount (12 months)</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="mt-4 flex items-center gap-2">
                                            <Icon name={setting.rotation_enabled ? 'CheckCircleIcon' : 'XCircleIcon'} size={20} className={setting.rotation_enabled ? 'text-green-500' : 'text-gray-400'} />
                                            <span className="text-sm text-gray-500">Automatic rotation: {setting.rotation_enabled ? 'Enabled' : 'Disabled'}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Banner Ads</h2>
                            {loadingBanners ? (
                                <div className="text-center py-8 text-gray-500">Loading banners...</div>
                            ) : activeBanners.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">No active banner ads</div>
                            ) : (
                                <div className="space-y-4">
                                    {activeBanners.map((banner) => (
                                        <div key={banner.id} className="border border-gray-200 rounded-xl p-4 flex items-center gap-4">
                                            <img src={banner.image_url} alt={banner.title} className="w-24 h-24 object-cover rounded-lg" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">{banner.title}</p>
                                                <p className="text-sm text-gray-500">{banner.businesses?.name || 'Unknown Business'}</p>
                                                <div className="flex gap-4 mt-2 text-sm">
                                                    <span className="text-gray-500">Position: <span className="font-medium text-gray-900 capitalize">{banner.position}</span></span>
                                                    <span className="text-gray-500">Duration: <span className="font-medium text-gray-900">{banner.duration?.replace('_', ' ')}</span></span>
                                                    <span className="text-gray-500">Price: <span className="font-medium text-gray-900">${banner.price?.toFixed(2)}</span></span>
                                                </div>
                                                <div className="flex gap-2 mt-2 text-xs">
                                                    <span className="text-gray-400">{new Date(banner.start_date).toLocaleDateString()} - {new Date(banner.end_date).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleBannerStatus(banner.id, banner.is_active)}
                                                className={`px-4 py-2 rounded-lg transition-colors ${banner.is_active ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                            >
                                                {banner.is_active ? 'Active' : 'Inactive'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── Marketing Tab ── */}
                {activeTab === 'marketing' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Marketing Exports</h2>
                            <p className="text-gray-500 mb-6">Export member, association, and business data for CRM integration or marketing campaigns</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Icon name="UsersIcon" size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Members</h3>
                                        <p className="text-sm text-gray-500">Export member data</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">Includes: Name, Email, Membership Tier, Status, Expiration, Price, Association</p>
                                <button onClick={exportMembers} disabled={exportingMembers} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                                    {exportingMembers ? 'Exporting...' : 'Export to CSV'}
                                </button>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Icon name="BuildingOfficeIcon" size={24} className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Associations</h3>
                                        <p className="text-sm text-gray-500">Export association data</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">Includes: Name, Email, Members Count, Total Revenue, Commission Rate, Status</p>
                                <button onClick={exportAssociations} disabled={exportingAssociations} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                                    {exportingAssociations ? 'Exporting...' : 'Export to CSV'}
                                </button>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Icon name="BuildingStorefrontIcon" size={24} className="text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Businesses</h3>
                                        <p className="text-sm text-gray-500">Export business data</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">Includes: Business Name, Category, Owner Info, Contact Details, Status, Featured</p>
                                <button onClick={exportBusinesses} disabled={exportingBusinesses} className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                                    {exportingBusinesses ? 'Exporting...' : 'Export to CSV'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Pricing Tab ── */}
                {activeTab === 'pricing' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing Plans Management</h2>
                            <p className="text-gray-500">Manage standard pricing for Individual, Business, and Association memberships</p>
                        </div>
                        <div className="flex gap-4 border-b border-gray-200">
                            {subTabBtn(pricingSubTab, 'individual', 'Individual', setPricingSubTab)}
                            {subTabBtn(pricingSubTab, 'business', 'Business', setPricingSubTab)}
                            {subTabBtn(pricingSubTab, 'association', 'Association', setPricingSubTab)}
                        </div>

                        {pricingSubTab === 'individual' && individualPricing && (
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                {editingPricing === 'individual' ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Annual Price (USD)</label>
                                            <input type="number" step="0.01" value={pricingFormData.annual_price || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, annual_price: parseFloat(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="119.99" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                                            <textarea value={pricingFormData.description || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Fixed annual pricing for individual members" />
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => updateStandardPricing('individual')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
                                            <button onClick={() => { setEditingPricing(null); setPricingFormData({}); }} className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Standard Pricing</h3>
                                                <p className="text-sm text-gray-500">{individualPricing.description || 'Fixed annual pricing for individual members'}</p>
                                            </div>
                                            <button onClick={() => { setEditingPricing('individual'); setPricingFormData(individualPricing); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                                <Icon name="PencilIcon" size={16} /> Edit
                                            </button>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Annual Price</p>
                                                <p className="text-2xl font-bold text-gray-900">${individualPricing.annual_price?.toFixed(2)}/year</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                                                <p className="text-lg font-semibold text-gray-900">PayPal Only</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {pricingSubTab === 'business' && businessPricing && (
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                {editingPricing === 'business' ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Annual Price (USD per member)</label>
                                            <input type="number" step="0.01" value={pricingFormData.annual_price || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, annual_price: parseFloat(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="99.99" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                                            <textarea value={pricingFormData.description || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Starting price per member per year." />
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => updateStandardPricing('business')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
                                            <button onClick={() => { setEditingPricing(null); setPricingFormData({}); }} className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Standard Pricing</h3>
                                                <p className="text-sm text-gray-500">{businessPricing.description || 'Starting price per member per year. Negotiable for 100+ members.'}</p>
                                            </div>
                                            <button onClick={() => { setEditingPricing('business'); setPricingFormData(businessPricing); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                                <Icon name="PencilIcon" size={16} /> Edit
                                            </button>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Starting Annual Price</p>
                                                <p className="text-2xl font-bold text-gray-900">${businessPricing.annual_price?.toFixed(2)}/member/year</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Special Pricing</p>
                                                <p className="text-lg font-semibold text-gray-900">Negotiable for 100+ members</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {pricingSubTab === 'association' && associationPricing && (
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                {editingPricing === 'association' ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Annual Price (USD per member)</label>
                                            <input type="number" step="0.01" value={pricingFormData.annual_price || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, annual_price: parseFloat(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="89.99" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                                            <textarea value={pricingFormData.description || ''} onChange={(e) => setPricingFormData({ ...pricingFormData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Starting price per member per year. Negotiable pricing available." />
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => updateStandardPricing('association')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
                                            <button onClick={() => { setEditingPricing(null); setPricingFormData({}); }} className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Association Standard Pricing</h3>
                                                <p className="text-sm text-gray-500">{associationPricing.description || 'Starting price per member per year. Negotiable pricing available.'}</p>
                                            </div>
                                            <button onClick={() => { setEditingPricing('association'); setPricingFormData(associationPricing); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                                <Icon name="PencilIcon" size={16} /> Edit
                                            </button>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Starting Annual Price</p>
                                                <p className="text-2xl font-bold text-gray-900">${associationPricing.annual_price?.toFixed(2)}/member/year</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-500 mb-1">Special Pricing</p>
                                                <p className="text-lg font-semibold text-gray-900">Negotiable</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* ── Memberships Tab ── */}
                {activeTab === 'memberships' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Membership Management</h2>
                            <p className="text-gray-500">Manage individual, business, and association memberships</p>
                        </div>
                        <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
                            {subTabBtn(membershipSubTab, 'individual', `Individual (${individualMemberships.length})`, setMembershipSubTab)}
                            {subTabBtn(membershipSubTab, 'organization', `Business/Association (${organizationMemberships.length})`, setMembershipSubTab)}
                            {subTabBtn(membershipSubTab, 'uploads', `Member Uploads (${memberUploads.length})`, setMembershipSubTab)}
                        </div>

                        {membershipSubTab === 'individual' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Individual Memberships</h3>
                                {loadingMemberships ? (
                                    <p className="text-center py-8 text-gray-500">Loading...</p>
                                ) : individualMemberships.length === 0 ? (
                                    <p className="text-center py-8 text-gray-500">No individual memberships found</p>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Email</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Phone</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">District</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Payment</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Email Confirmed</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {individualMemberships.map((membership) => (
                                                    <tr key={membership.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                        <td className="py-3 px-4 text-sm text-gray-900">{membership.first_name} {membership.middle_initial} {membership.last_name}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900">{membership.email}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900">{membership.phone}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900 capitalize">{membership.district?.replace('_', ' ')}</td>
                                                        <td className="py-3 px-4 text-sm">
                                                            <span className={`px-2 py-1 rounded-full text-xs ${membership.payment_status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{membership.payment_status}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm">
                                                            {membership.email_confirmed ? <span className="text-green-600">Yes</span> : <span className="text-orange-600">Pending</span>}
                                                        </td>
                                                        <td className="py-3 px-4 text-sm">
                                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 capitalize">{membership.status?.replace('_', ' ')}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm">
                                                            <select value={membership.status} onChange={(e) => updateMembershipStatus(membership.id, e.target.value, 'individual')} className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                                                                <option value="submitted">Submitted</option>
                                                                <option value="payment_pending">Payment Pending</option>
                                                                <option value="active">Active</option>
                                                                <option value="rejected">Rejected</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {membershipSubTab === 'organization' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Organization Memberships</h3>
                                {loadingMemberships ? (
                                    <p className="text-center py-8 text-gray-500">Loading...</p>
                                ) : organizationMemberships.length === 0 ? (
                                    <p className="text-center py-8 text-gray-500">No organization memberships found</p>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-200">
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Organization</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Contact</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Type</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Members</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Total Price</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                                                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {organizationMemberships.map((org) => (
                                                    <tr key={org.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                        <td className="py-3 px-4 text-sm text-gray-900">{org.organization_name}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900">{org.contact_name}<br /><span className="text-gray-400 text-xs">{org.email}</span></td>
                                                        <td className="py-3 px-4 text-sm text-gray-900 capitalize">{org.organization_type}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900">{org.estimated_members}</td>
                                                        <td className="py-3 px-4 text-sm text-gray-900">${org.total_price?.toFixed(2)}</td>
                                                        <td className="py-3 px-4 text-sm">
                                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 capitalize">{org.status?.replace('_', ' ')}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm">
                                                            <select value={org.status} onChange={(e) => updateMembershipStatus(org.id, e.target.value, 'organization')} className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                                                                <option value="submitted">Submitted</option>
                                                                <option value="special_pricing_review">Special Pricing Review</option>
                                                                <option value="approved_payment">Approved - Awaiting Payment</option>
                                                                <option value="active">Active</option>
                                                                <option value="rejected">Rejected</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {membershipSubTab === 'uploads' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Member Uploads</h3>
                                {loadingMemberships ? (
                                    <p className="text-center py-8 text-gray-500">Loading...</p>
                                ) : memberUploads.length === 0 ? (
                                    <p className="text-center py-8 text-gray-500">No member uploads found</p>
                                ) : (
                                    <div className="space-y-4">
                                        {memberUploads.map((upload) => (
                                            <div key={upload.id} className="border border-gray-200 rounded-xl p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{upload.organization_memberships?.organization_name}</p>
                                                        <p className="text-sm text-gray-500">{upload.organization_memberships?.contact_name} • {upload.member_count} members</p>
                                                        <p className="text-xs text-gray-400">Status: {upload.status?.replace('_', ' ')}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => { setSelectedUpload(upload.id); fetchUploadedMembers(upload.id); }}
                                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                                        >
                                                            View Members
                                                        </button>
                                                        {upload.status === 'pending' && (
                                                            <button
                                                                onClick={() => massApproveMembers(upload.id)}
                                                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                                                            >
                                                                Mass Approve
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                {selectedUpload === upload.id && uploadedMembers.length > 0 && (
                                                    <div className="mt-4 overflow-x-auto">
                                                        <table className="w-full text-sm">
                                                            <thead>
                                                                <tr className="border-b border-gray-200">
                                                                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Name</th>
                                                                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Email</th>
                                                                    <th className="text-left py-2 px-3 font-semibold text-gray-900">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {uploadedMembers.map((member) => (
                                                                    <tr key={member.id} className="border-b border-gray-100">
                                                                        <td className="py-2 px-3 text-gray-900">{member.first_name} {member.last_name}</td>
                                                                        <td className="py-2 px-3 text-gray-500">{member.email}</td>
                                                                        <td className="py-2 px-3">
                                                                            <span className={`px-2 py-1 rounded-full text-xs ${member.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{member.status}</span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* ── Email Templates Tab ── */}
                {activeTab === 'email-templates' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Templates</h2>
                            <p className="text-gray-500">Manage email templates with placeholder support</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            {loadingTemplates ? (
                                <p className="text-center py-8 text-gray-500">Loading...</p>
                            ) : emailTemplates.length === 0 ? (
                                <p className="text-center py-8 text-gray-500">No email templates found</p>
                            ) : (
                                <div className="space-y-6">
                                    {emailTemplates.map((template) => (
                                        <div key={template.id} className="border border-gray-200 rounded-lg p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{template.template_name}</h3>
                                                    <p className="text-sm text-gray-500">{template.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => { setEditingTemplate(template.id); setTemplateFormData({ subject: template.subject, body: template.body }); }}
                                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            {editingTemplate === template.id ? (
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                                                        <input type="text" value={templateFormData.subject || ''} onChange={(e) => setTemplateFormData({ ...templateFormData, subject: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-900 mb-2">Body</label>
                                                        <textarea value={templateFormData.body || ''} onChange={(e) => setTemplateFormData({ ...templateFormData, body: e.target.value })} rows={10} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" />
                                                    </div>
                                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                        <p className="text-sm font-semibold text-blue-900 mb-2">Available Placeholders:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {(template.placeholders || []).map((placeholder, index) => (
                                                                <code key={index} className="px-2 py-1 bg-white rounded text-xs text-blue-900 border border-blue-300">{placeholder}</code>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <button onClick={() => updateEmailTemplate(template.id, templateFormData)} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Save Changes</button>
                                                        <button onClick={() => { setEditingTemplate(null); setTemplateFormData({}); }} className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900 mb-1">Subject:</p>
                                                        <p className="text-sm text-gray-500">{template.subject}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900 mb-1">Body:</p>
                                                        <pre className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg whitespace-pre-wrap">{template.body}</pre>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboardContent