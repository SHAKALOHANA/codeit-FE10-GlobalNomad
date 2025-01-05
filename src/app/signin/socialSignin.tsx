import { useState , useEffect } from "react";

const SocialLogin = ()=> {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
    }
  }, []);
  const handleSocialLogin = async (provider: string) => {
    if (provider === "KAKAO") {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/oauth/kakao',
      });
    } else if (provider === "GOOGLE") {
      const url = `https://winereview-api.vercel.app/10-1/auth/signIn/${provider}`;
      const appKey = process.env.NEXT_PUBLIC_GOOGLE_APP_KEY;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appKey: appKey,
          provider: provider,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("구글 로그인 성공:", data);
        router.push("/signin"); // 구글 로그인 성공 시 리다이렉트
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message || "소셜 로그인에 실패했습니다.");
      }
    }
  };
  return(
    <div>
      <button onClick={() => handleSocialLogin("GOOGLE")} className={socialBtn}>구글로 로그인</button>
      <button onClick={() => handleSocialLogin("KAKAO")} className={socialBtn}>
        카카오톡으로 로그인
      </button>
    </div>
  )
}