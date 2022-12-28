import { NextRequest, NextResponse } from 'next/server';
import {decrypt} from './helpers/common';

export const config = {
  matcher: ['/admin/dashboard/:path*'],
}
export default async function middleware(request:NextRequest) {
  console.log(request);
  const { pathname } = request.nextUrl
  console.log("request");
  console.log(pathname)
  // const is_authenticated = localStorage.getItem('is_authenticated');;
  // // auhorization: Beaer <token>
  // if (is_authenticated) {
  //   const auth = JSON.parse(decrypt(is_authenticated));
  //   const validToken=auth.email;

  //   if (validToken) {
  //     return NextResponse.next();
  //   }
  // }

  // return NextResponse.redirect(new URL('/users/login', request.url))
}

