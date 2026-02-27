// import React, { useEffect } from 'react'
// import {useNavigate, useSearchParams } from 'react-router-dom';

// const AuthcallbackPage = () => {
//     const navigate = useNavigate();
//     const [searchParams] = useSearchParams();

//     useEffect(() => {
//         const handleCallback = async () => {
//             const code = searchParams.get('code');
//             const next = searchParams.get('next') || '/member-dashboard';

//             if (code) {
//                 try {
//                     const supabase = UNSAFE_createClientRoutes();
//                     const { error } = await supabase.auth.exchangeCodeForSession(code);
//                     if (!error) {
//                         navigate(next, { replace: true });
//                         return;
//                     }
//                 } catch (err) {
//                     console.error('Auth callback error:', err);
//                 }
//             }

//             navigate('/login?error=auth-code-error', { replace: true });
//         };

//         handleCallback();
//     }, [searchParams, navigate]);
//     return (
//         <div className="min-h-screen bg-background flex items-center justify-center">
//             <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
//         </div>
//     )
// }

// export default AuthcallbackPage