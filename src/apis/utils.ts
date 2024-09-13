// Jwt 토큰 디코딩
export const parseJwtPayload = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
};

export function getAccessToken(): string | null {
  const sessionData = sessionStorage.getItem("ACCESS_TOKEN");
  return sessionData ? JSON.parse(sessionData).token : null;
}

export function getRefreshToken(): string | null {
  return sessionStorage.getItem("REFRESH_TOKEN");
}

export function setTokens(accessToken: string, refreshToken: string) {
  sessionStorage.setItem("ACCESS_TOKEN", JSON.stringify({ token: accessToken }));
  sessionStorage.setItem("REFRESH_TOKEN", refreshToken);
}

export function removeTokens() {
  sessionStorage.removeItem("ACCESS_TOKEN");
  sessionStorage.removeItem("REFRESH_TOKEN");
}
