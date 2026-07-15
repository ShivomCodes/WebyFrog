import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  
  if (url.pathname.startsWith('/admin')) {
    const sessionCookie = req.cookies.get('admin_session');

    if (!sessionCookie || sessionCookie.value !== process.env.ADMIN_PASSWORD) {
      // Redirect to custom login page
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // If they are on login but already have a valid session, redirect to admin
  if (url.pathname === '/login') {
    const sessionCookie = req.cookies.get('admin_session');
    if (sessionCookie && sessionCookie.value === process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
