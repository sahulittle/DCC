import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Icon from '../../components/ui/AppIcon';
import AppImage from '../../components/ui/AppImage';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssociationDashboardContent = () => {
    const [user] = useState({ id: 'mock-association-id', email: 'association@example.com' });
    const [activeTab, setActiveTab] = useState('directory');

    const [homeStats, setHomeStats] = useState({ totalCompanies: 0, activeEmployees: 0, totalRevenue: 0, totalCost: 0, totalProfit: 0, upcomingRenewals: 0 });
    const [revenueChartData, setRevenueChartData] = useState([]);
    const [dateFilter, setDateFilter] = useState('month');
    const [customStartDate, setCustomStartDate] = useState('');
    const [customEndDate, setCustomEndDate] = useState('');

    const [companies, setCompanies] = useState([]);
    const [sortField, setSortField] = useState('company_name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companyEmployees, setCompanyEmployees] = useState([]);
    const [showEmployeeModal, setShowEmployeeModal] = useState(false);

    const [revenueSummary, setRevenueSummary] = useState({ totalRevenue: 0, totalCost: 0, totalProfit: 0, profitMargin: 0 });
    const [revenueFilter, setRevenueFilter] = useState('month');
    const [revenueBreakdown, setRevenueBreakdown] = useState([]);

    const [analyticsOverview, setAnalyticsOverview] = useState({ activeEmployees: 0, totalCost: 0, totalSavings: 0, returnMultiple: 0, associationProfit: 0 });
    const [analyticsCompanies, setAnalyticsCompanies] = useState([]);
    const [selectedAnalyticsCompany, setSelectedAnalyticsCompany] = useState(null);
    const [showCompanyAnalytics, setShowCompanyAnalytics] = useState(false);
    const [savingsBreakdown, setSavingsBreakdown] = useState(null);
    const [discountsByCategory, setDiscountsByCategory] = useState([]);
    const [certificateRedemptions, setCertificateRedemptions] = useState([]);

    const [renewalCompanies, setRenewalCompanies] = useState([]);
    const [renewalFilter, setRenewalFilter] = useState('30');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) return;
    }, [user, activeTab, showCompanyAnalytics, selectedAnalyticsCompany]);

    useEffect(() => {
        if (user) {
            if (activeTab === 'home') fetchHomeData();
            else if (activeTab === 'companies') fetchCompanies();
            else if (activeTab === 'revenue') fetchRevenueSummary();
            else if (activeTab === 'analytics') fetchAnalyticsData();
            else if (activeTab === 'renewals') fetchRenewalData();
        }
    }, [user, activeTab, dateFilter, revenueFilter, renewalFilter]);

    const fetchHomeData = async () => {
        setLoading(true);
        try {
            // Mock data or empty state
            setHomeStats({ totalCompanies: 0, activeEmployees: 0, totalRevenue: 0, totalCost: 0, totalProfit: 0, upcomingRenewals: 0 });
            const chartData = generateChartData([], dateFilter);
            setRevenueChartData(chartData);
        } catch (error) {
            console.error('Error fetching home data:', error);
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const generateChartData = (companiesData, filter) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        return months.map(month => ({ month, revenue: Math.random() * 10000 + 5000, cost: Math.random() * 7000 + 3000, profit: Math.random() * 3000 + 1000 }));
    };

    const fetchCompanies = async () => {
        setLoading(true);
        try {
            // Supabase logic removed
            setCompanies([]);
        } catch (error) {
            console.error('Error fetching companies:', error);
            toast.error('Failed to load companies');
        } finally {
            setLoading(false);
        }
    };

    const fetchCompanyEmployees = async (companyId) => {
        try {
            // Supabase logic removed
            setCompanyEmployees([]);
        } catch (error) {
            console.error('Error fetching employees:', error);
            toast.error('Failed to load employees');
        }
    };

    const handleViewEmployees = async (company) => {
        setSelectedCompany(company);
        await fetchCompanyEmployees(company.id);
        setShowEmployeeModal(true);
    };

    const handleSort = (field) => {
        if (sortField === field) setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        else { setSortField(field); setSortDirection('asc'); }
    };

    const fetchRevenueSummary = async () => {
        setLoading(true);
        try {
            // Supabase logic removed
            setRevenueSummary({ totalRevenue: 0, totalCost: 0, totalProfit: 0, profitMargin: 0 });
            setRevenueBreakdown([]);
        } catch (error) {
            console.error('Error fetching revenue summary:', error);
            toast.error('Failed to load revenue data');
        } finally {
            setLoading(false);
        }
    };

    const fetchAnalyticsData = async () => {
        setLoading(true);
        try {
            // Supabase logic removed
            setAnalyticsOverview({ activeEmployees: 0, totalCost: 0, totalSavings: 0, returnMultiple: 0, associationProfit: 0 });
            setAnalyticsCompanies([]);
        } catch (error) {
            console.error('Error fetching analytics:', error);
            toast.error('Failed to load analytics data');
        } finally {
            setLoading(false);
        }
    };

    const fetchCompanyAnalyticsDetail = async (companyId) => {
        try {
            // Supabase logic removed
            setSavingsBreakdown(null);
            setDiscountsByCategory([]);
            setCertificateRedemptions([]);
        } catch (error) {
            console.error('Error fetching company analytics detail:', error);
            toast.error('Failed to load company analytics');
        }
    };

    const handleViewCompanyAnalytics = async (company) => {
        setSelectedAnalyticsCompany(company);
        await fetchCompanyAnalyticsDetail(company.id);
        setShowCompanyAnalytics(true);
    };

    const fetchRenewalData = async () => {
        setLoading(true);
        try {
            // Supabase logic removed
            setRenewalCompanies([]);
        } catch (error) {
            console.error('Error fetching renewal data:', error);
            toast.error('Failed to load renewal data');
        } finally {
            setLoading(false);
        }
    };

    const handleSendReminder = async (company) => {
        try {
            // Supabase logic removed
            toast.success(`Reminder sent to ${company.contact_name}`);
        } catch (error) {
            console.error('Error sending reminder:', error);
            toast.error('Failed to send reminder');
        }
    };

    const exportToCSV = (data, filename, headers) => {
        if (!data || data.length === 0) { toast.error('No data to export'); return; }
        const csvHeaders = headers || Object.keys(data[0]);
        const csvContent = [csvHeaders.join(','), ...data.map(row => csvHeaders.map(header => JSON.stringify(row[header] || '')).join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('CSV exported successfully');
    };

    const handleExportMembers = () => {
        const exportData = companies.flatMap(company => companyEmployees.map(emp => ({ company_name: company.company_name, employee_name: emp.employee_name, email: emp.email, phone: emp.phone, status: emp.membership_status, expiry_date: emp.expiry_date })));
        exportToCSV(exportData, 'association_members');
    };

    const exportRevenueToPDF = () => {
        exportToCSV(revenueBreakdown, 'revenue_summary', ['company_name', 'qty_employees', 'revenue', 'cost', 'profit']);
    };

    const getReturnMultipleColor = (rm) => {
        if (rm < 1) return 'text-red-600';
        if (rm < 2) return 'text-yellow-600';
        if (rm < 4) return 'text-green-500';
        return 'text-green-700';
    };

    const getStatusColor = (status) => {
        if (status === 'active') return 'bg-green-100 text-green-700';
        if (status === 'expiring_soon') return 'bg-orange-100 text-orange-700';
        return 'bg-red-100 text-red-700';
    };

    const getStatusLabel = (status) => {
        if (status === 'active') return 'Active';
        if (status === 'expiring_soon') return 'Expiring Soon';
        return 'Expired';
    };

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Decorative background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-125 h-125 bg-green-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <Toaster position="top-right" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-2">Association Dashboard</h1>
                    <p className="text-lg text-slate-600">Manage your association members and revenue</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-10 overflow-hidden">
                    <div className="border-b border-slate-100 px-6">
                        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
                            {[
                                { key: 'home', label: 'Overview', icon: 'HomeIcon' },
                                { key: 'companies', label: 'Companies', icon: 'BuildingOfficeIcon' },
                                { key: 'revenue', label: 'Revenue', icon: 'CurrencyDollarIcon' },
                                { key: 'analytics', label: 'Analytics', icon: 'ChartBarIcon' },
                                { key: 'renewals', label: 'Renewals', icon: 'ClockIcon' },
                                { key: 'profile', label: 'Profile', icon: 'UserCircleIcon' },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`py-4 border-b-2 font-semibold transition-colors whitespace-nowrap flex items-center gap-2 ${
                                        activeTab === tab.key
                                            ? 'border-[#1C4D8D] text-[#1C4D8D]'
                                            : 'border-transparent text-slate-500 hover:text-slate-900'
                                    }`}
                                >
                                    <Icon name={tab.icon} size={20} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6">
                        {activeTab === 'home' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-slate-900">Dashboard Overview</h2>
                                    <button onClick={handleExportMembers} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 font-medium">
                                        <Icon name="ArrowDownTrayIcon" size={18} /> Export Members
                                    </button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { icon: 'BuildingOfficeIcon', color: 'bg-blue-500', value: homeStats.totalCompanies, label: 'Total Companies' },
                                        { icon: 'UsersIcon', color: 'bg-green-500', value: homeStats.activeEmployees, label: 'Active Employees' },
                                        { icon: 'CurrencyDollarIcon', color: 'bg-purple-500', value: `$${homeStats.totalRevenue.toFixed(2)}`, label: 'Total Revenue' },
                                        { icon: 'BanknotesIcon', color: 'bg-orange-500', value: `$${homeStats.totalCost.toFixed(2)}`, label: 'Total Cost' },
                                        { icon: 'ArrowTrendingUpIcon', color: 'bg-green-600', value: `$${homeStats.totalProfit.toFixed(2)}`, label: 'Total Profit' },
                                        { icon: 'ClockIcon', color: 'bg-red-500', value: homeStats.upcomingRenewals, label: 'Upcoming Renewals (30 Days)' },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/5`}><Icon name={card.icon} size={24} className="text-white" /></div>
                                                <div><p className="text-2xl font-bold text-slate-900">{card.value}</p><p className="text-sm text-slate-500">{card.label}</p></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-lg font-bold text-slate-900">Revenue vs Cost vs Profit</h2>
                                        <div className="flex gap-2">
                                            {['month', 'quarter', 'year', 'custom'].map(f => (
                                                <button key={f} onClick={() => setDateFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === f ? 'bg-[#1C4D8D] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                                                    {f.charAt(0).toUpperCase() + f.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    {dateFilter === 'custom' && (
                                        <div className="flex gap-4 mb-6">
                                            <input type="date" value={customStartDate} onChange={(e) => setCustomStartDate(e.target.value)} className="px-4 py-2 border border-slate-200 rounded-lg" />
                                            <input type="date" value={customEndDate} onChange={(e) => setCustomEndDate(e.target.value)} className="px-4 py-2 border border-slate-200 rounded-lg" />
                                        </div>
                                    )}
                                    <ResponsiveContainer width="100%" height={400}>
                                        <LineChart data={revenueChartData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
                                            <Legend />
                                            <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} name="Revenue" />
                                            <Line type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={2} name="Cost" />
                                            <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )}

                        {activeTab === 'companies' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">Registered Companies</h2>
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-slate-50">
                                                <tr className="border-b border-slate-200">
                                                    {[{ f: 'company_name', l: 'Company Name' }, { f: 'contact_name', l: 'Contact Name' }, { f: null, l: 'Email' }, { f: null, l: 'Phone' }, { f: 'qty_employees', l: 'Qty Employees' }, { f: 'status', l: 'Status' }, { f: 'renewal_date', l: 'Renewal Date' }, { f: null, l: 'Actions' }].map((col, i) => (
                                                        <th key={i} className={`text-left py-4 px-6 text-sm font-bold text-slate-600 ${col.f ? 'cursor-pointer hover:bg-slate-100' : ''}`} onClick={() => col.f && handleSort(col.f)}>
                                                            {col.l} {col.f && sortField === col.f && (sortDirection === 'asc' ? '↑' : '↓')}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {loading ? <tr><td colSpan={8} className="text-center py-8 text-slate-500">Loading...</td></tr>
                                                    : companies.length === 0 ? <tr><td colSpan={8} className="text-center py-8 text-slate-500">No companies found</td></tr>
                                                        : companies.map((company) => (
                                                            <tr key={company.id} className="hover:bg-slate-50/80 transition-colors">
                                                                <td className="py-4 px-6"><button onClick={() => handleViewEmployees(company)} className="text-[#1C4D8D] hover:underline font-bold">{company.company_name}</button></td>
                                                                <td className="py-4 px-6 text-slate-600">{company.contact_name}</td>
                                                                <td className="py-4 px-6 text-slate-600">{company.contact_email}</td>
                                                                <td className="py-4 px-6 text-slate-600">{company.contact_phone}</td>
                                                                <td className="py-4 px-6 text-slate-600">{company.qty_employees}</td>
                                                                <td className="py-4 px-6"><span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(company.status)}`}>{getStatusLabel(company.status)}</span></td>
                                                                <td className="py-4 px-6 text-slate-600">{company.renewal_date ? new Date(company.renewal_date).toLocaleDateString() : 'N/A'}</td>
                                                                <td className="py-4 px-6"><button onClick={() => handleViewEmployees(company)} className="px-4 py-2 bg-[#1C4D8D] text-white rounded-lg hover:bg-[#1C4D8D]/90 transition-colors text-sm font-medium">View Employees</button></td>
                                                            </tr>
                                                        ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'revenue' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">Revenue Summary (P&L)</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { label: 'Total Revenue', value: `$${revenueSummary.totalRevenue.toFixed(2)}`, color: '' },
                                        { label: 'Total Cost', value: `$${revenueSummary.totalCost.toFixed(2)}`, color: '' },
                                        { label: 'Total Profit', value: `$${revenueSummary.totalProfit.toFixed(2)}`, color: 'text-green-600' },
                                        { label: 'Profit Margin %', value: `${revenueSummary.profitMargin.toFixed(1)}%`, color: '' },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                            <p className="text-sm text-slate-500 mb-2">{card.label}</p>
                                            <p className={`text-3xl font-bold ${card.color || 'text-slate-900'}`}>{card.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {['month', 'quarter', 'year', 'custom'].map(f => (
                                        <button key={f} onClick={() => setRevenueFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${revenueFilter === f ? 'bg-[#1C4D8D] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                                            {f === 'month' ? 'This Month' : f === 'quarter' ? 'This Quarter' : f === 'year' ? 'This Year' : 'Custom Range'}
                                        </button>
                                    ))}
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-lg font-bold text-slate-900">Breakdown by Company</h2>
                                        <button onClick={exportRevenueToPDF} className="px-4 py-2 bg-[#1C4D8D] text-white rounded-lg hover:bg-[#1C4D8D]/90 transition-colors text-sm font-medium">Export to PDF</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead><tr className="border-b border-slate-200">{['Company Name', 'Qty Employees', 'Revenue', 'Cost', 'Profit'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {loading ? <tr><td colSpan={5} className="text-center py-8 text-slate-500">Loading...</td></tr>
                                                    : revenueBreakdown.length === 0 ? <tr><td colSpan={5} className="text-center py-8 text-slate-500">No data available</td></tr>
                                                        : revenueBreakdown.map(company => (
                                                            <tr key={company.id} className="hover:bg-slate-50">
                                                                <td className="py-3 px-4 text-slate-900 font-medium">{company.company_name}</td>
                                                                <td className="py-3 px-4 text-slate-600">{company.qty_employees}</td>
                                                                <td className="py-3 px-4 text-slate-600">${parseFloat(company.revenue || 0).toFixed(2)}</td>
                                                                <td className="py-3 px-4 text-slate-600">${parseFloat(company.cost || 0).toFixed(2)}</td>
                                                                <td className="py-3 px-4 text-emerald-600 font-bold">${parseFloat(company.profit || 0).toFixed(2)}</td>
                                                            </tr>
                                                        ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'analytics' && !showCompanyAnalytics && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">Analytics (Usage + Savings + ROI)</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Total Active Employees</p><p className="text-3xl font-bold text-slate-900">{analyticsOverview.activeEmployees}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Total Cost</p><p className="text-3xl font-bold text-slate-900">${analyticsOverview.totalCost.toFixed(2)}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Total Savings</p><p className="text-3xl font-bold text-slate-900">${analyticsOverview.totalSavings.toFixed(2)}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 col-span-1 md:col-span-2 lg:col-span-1"><p className="text-sm text-slate-500 mb-2">Return Multiple</p><p className={`text-4xl font-bold ${getReturnMultipleColor(analyticsOverview.returnMultiple)}`}>{analyticsOverview.totalCost > 0 ? `${analyticsOverview.returnMultiple.toFixed(1)}× Return` : 'N/A'}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Association Profit</p><p className="text-3xl font-bold text-emerald-600">${analyticsOverview.associationProfit.toFixed(2)}</p></div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                    <h2 className="text-lg font-bold text-slate-900 mb-6">Company Analytics</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead><tr className="border-b border-slate-200">{['Company Name', 'Qty', 'Cost', 'Savings', 'Return', 'Actions'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {loading ? <tr><td colSpan={6} className="text-center py-8 text-slate-500">Loading...</td></tr>
                                                    : analyticsCompanies.length === 0 ? <tr><td colSpan={6} className="text-center py-8 text-slate-500">No data available</td></tr>
                                                        : analyticsCompanies.map(company => (
                                                            <tr key={company.id} className="hover:bg-slate-50">
                                                                <td className="py-3 px-4"><button onClick={() => handleViewCompanyAnalytics(company)} className="text-[#1C4D8D] hover:underline font-medium">{company.company_name}</button></td>
                                                                <td className="py-3 px-4 text-slate-600">{company.qty_employees}</td>
                                                                <td className="py-3 px-4 text-slate-600">${parseFloat(company.total_cost || 0).toFixed(2)}</td>
                                                                <td className="py-3 px-4 text-slate-600">${parseFloat(company.total_savings || 0).toFixed(2)}</td>
                                                                <td className="py-3 px-4"><span className={`font-bold ${getReturnMultipleColor(company.return_multiple)}`}>{company.return_multiple > 0 ? `${company.return_multiple.toFixed(1)}×` : 'N/A'}</span></td>
                                                                <td className="py-3 px-4"><button onClick={() => handleViewCompanyAnalytics(company)} className="px-4 py-2 bg-[#1C4D8D] text-white rounded-lg hover:bg-[#1C4D8D]/90 transition-colors text-sm">View Details</button></td>
                                                            </tr>
                                                        ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'analytics' && showCompanyAnalytics && selectedAnalyticsCompany && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setShowCompanyAnalytics(false)} className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="ArrowLeftIcon" size={24} /></button>
                                    <h1 className="text-2xl font-bold text-slate-900">{selectedAnalyticsCompany.company_name} Analytics</h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Total Cost</p><p className="text-3xl font-bold text-slate-900">${parseFloat(selectedAnalyticsCompany.total_cost || 0).toFixed(2)}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"><p className="text-sm text-slate-500 mb-2">Total Savings</p><p className="text-3xl font-bold text-slate-900">${parseFloat(selectedAnalyticsCompany.total_savings || 0).toFixed(2)}</p></div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 col-span-1 md:col-span-2"><p className="text-sm text-slate-500 mb-2">Return Multiple</p><p className={`text-5xl font-bold ${getReturnMultipleColor(selectedAnalyticsCompany.return_multiple)}`}>{selectedAnalyticsCompany.return_multiple > 0 ? `${selectedAnalyticsCompany.return_multiple.toFixed(1)}× Return` : 'N/A'}</p></div>
                                </div>
                                {savingsBreakdown && (
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                        <h2 className="text-lg font-bold text-slate-900 mb-6">Savings Breakdown by Channel</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { label: 'Travel Savings', value: savingsBreakdown.travel, bg: 'bg-blue-50' },
                                                { label: 'Discount Savings', value: savingsBreakdown.discount, bg: 'bg-emerald-50' },
                                                { label: 'Certificate Redemptions', value: savingsBreakdown.certificate, bg: 'bg-purple-50' },
                                            ].map((ch, i) => {
                                                const total = savingsBreakdown.travel + savingsBreakdown.discount + savingsBreakdown.certificate;
                                                return (
                                                    <div key={i} className={`p-4 ${ch.bg} rounded-xl`}>
                                                        <p className="text-sm text-slate-500 mb-2">{ch.label}</p>
                                                        <p className="text-2xl font-bold text-slate-900">${ch.value.toFixed(2)}</p>
                                                        <p className="text-sm text-slate-500 mt-2">{total > 0 ? ((ch.value / total) * 100).toFixed(1) : 0}% of total</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                {discountsByCategory.length > 0 && (
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                        <h2 className="text-lg font-bold text-slate-900 mb-6">Discounts - Savings by Category</h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead><tr className="border-b border-slate-200">{['Category', 'Total Savings', 'Redemption Count', 'Avg Savings per Redemption'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                                <tbody className="divide-y divide-slate-100">{discountsByCategory.map((cat, i) => (
                                                    <tr key={i} className="hover:bg-slate-50">
                                                        <td className="py-3 px-4 text-slate-900 font-medium">{cat.category}</td>
                                                        <td className="py-3 px-4 text-slate-600">${parseFloat(cat.total_savings || 0).toFixed(2)}</td>
                                                        <td className="py-3 px-4 text-slate-600">{cat.redemption_count}</td>
                                                        <td className="py-3 px-4 text-slate-600">${parseFloat(cat.avg_savings_per_redemption || 0).toFixed(2)}</td>
                                                    </tr>
                                                ))}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                                {certificateRedemptions.length > 0 && (
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                        <h2 className="text-lg font-bold text-slate-900 mb-6">Certificate Redemptions by Category</h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead><tr className="border-b border-slate-200">{['Category', 'Redeemed Value', 'Redemption Count', 'Avg Value per Redemption'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                                <tbody className="divide-y divide-slate-100">{certificateRedemptions.map((cert, i) => (
                                                    <tr key={i} className="hover:bg-slate-50">
                                                        <td className="py-3 px-4 text-slate-900 font-medium">{cert.category}</td>
                                                        <td className="py-3 px-4 text-slate-600">${parseFloat(cert.redeemed_value || 0).toFixed(2)}</td>
                                                        <td className="py-3 px-4 text-slate-600">{cert.redemption_count}</td>
                                                        <td className="py-3 px-4 text-slate-600">${parseFloat(cert.avg_value_per_redemption || 0).toFixed(2)}</td>
                                                    </tr>
                                                ))}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'renewals' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">Renewal Tracking</h2>
                                <div className="flex gap-2">
                                    {[{ k: '30', l: 'Expiring in 30 Days' }, { k: '60', l: 'Expiring in 60 Days' }, { k: 'expired', l: 'Expired' }].map(f => (
                                        <button key={f.k} onClick={() => setRenewalFilter(f.k)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${renewalFilter === f.k ? 'bg-[#1C4D8D] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{f.l}</button>
                                    ))}
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead><tr className="border-b border-slate-200">{['Company Name', 'Contact Name', 'Email', 'Phone', 'Qty Employees', 'Status', 'Renewal Date', 'Actions'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {loading ? <tr><td colSpan={8} className="text-center py-8 text-slate-500">Loading...</td></tr>
                                                    : renewalCompanies.length === 0 ? <tr><td colSpan={8} className="text-center py-8 text-slate-500">No companies found</td></tr>
                                                        : renewalCompanies.map(company => (
                                                            <tr key={company.id} className="hover:bg-slate-50">
                                                                <td className="py-3 px-4 text-slate-900 font-medium">{company.company_name}</td>
                                                                <td className="py-3 px-4 text-slate-600">{company.contact_name}</td>
                                                                <td className="py-3 px-4 text-slate-600">{company.contact_email}</td>
                                                                <td className="py-3 px-4 text-slate-600">{company.contact_phone}</td>
                                                                <td className="py-3 px-4 text-slate-600">{company.qty_employees}</td>
                                                                <td className="py-3 px-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(company.status)}`}>{getStatusLabel(company.status)}</span></td>
                                                                <td className="py-3 px-4 text-slate-600">{company.renewal_date ? new Date(company.renewal_date).toLocaleDateString() : 'N/A'}</td>
                                                                <td className="py-3 px-4"><button onClick={() => handleSendReminder(company)} className="px-4 py-2 bg-[#1C4D8D] text-white rounded-lg hover:bg-[#1C4D8D]/90 transition-colors text-sm">Send Reminder</button></td>
                                                            </tr>
                                                        ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'profile' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">Company Profile</h2>
                                <div className="bg-white rounded-2xl p-12 border border-dashed border-slate-200 text-center">
                                    <Icon name="UserCircleIcon" size={48} className="mx-auto text-slate-300 mb-4" />
                                    <p className="text-slate-500">Company profile management coming soon...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showEmployeeModal && selectedCompany && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">{selectedCompany.company_name} - Employees</h2>
                            <button onClick={() => setShowEmployeeModal(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><Icon name="XMarkIcon" size={24} /></button>
                        </div>
                        <div className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead><tr className="border-b border-slate-200">{['Employee Name', 'Email', 'Phone', 'Membership Status', 'Expiry Date'].map(h => <th key={h} className="text-left py-3 px-4 font-bold text-slate-600 text-sm">{h}</th>)}</tr></thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {companyEmployees.length === 0 ? <tr><td colSpan={5} className="text-center py-8 text-slate-500">No employees found</td></tr>
                                            : companyEmployees.map(employee => (
                                                <tr key={employee.id} className="hover:bg-slate-50">
                                                    <td className="py-3 px-4 text-slate-900">{employee.employee_name}</td>
                                                    <td className="py-3 px-4 text-slate-600">{employee.email}</td>
                                                    <td className="py-3 px-4 text-slate-600">{employee.phone}</td>
                                                    <td className="py-3 px-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(employee.membership_status)}`}>{getStatusLabel(employee.membership_status)}</span></td>
                                                    <td className="py-3 px-4 text-slate-600">{employee.expiry_date ? new Date(employee.expiry_date).toLocaleDateString() : 'N/A'}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AssociationDashboardContent