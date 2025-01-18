import { NextResponse } from 'next/server';
import axios from 'axios';

const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao'; // 리디렉션 URI

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  console.log(code);

  if (!code) {
    return NextResponse.json({ message: 'No code provided' }, { status: 400 });
  }

  try {
    // 액세스 토큰 요청
    const tokenResponse = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_KAKAO_APP_KEY,
          redirect_uri: REDIRECT_URI,
          code,
        },
      }
    );
    console.log(tokenResponse);

    const accessToken = tokenResponse.data.access_token;

    // 사용자 정보 요청
    const userInfoResponse = await axios.get(
      'https://kapi.kakao.com/v2/user/me?property_keys=["kakao_account.name"]',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(userInfoResponse);

    const userInfo = userInfoResponse.data;

    // 사용자 정보 반환
    return NextResponse.json(userInfo);
  } catch (error) {
    console.error('Error fetching data from Kakao:', error);
    return NextResponse.json(
      { message: 'Error fetching data from Kakao' },
      { status: 500 }
    );
  }
}
