from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from jose import jwt, JWTError

from .dependencies import SECRET_KEY, ALGORITHM

class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Liste des chemins publics qui ne nécessitent pas d'authentification
        public_paths = ["/login", "/signup", "/docs", "/openapi.json", "/redoc"]
        
        # Les chemins commençant par ces préfixes sont accessibles sans token
        if any(request.url.path.startswith(path) for path in public_paths):
            return await call_next(request)
        
        # Vérification du token pour les chemins privés
        if request.url.path.startswith("/books") and request.method == "GET":
            # Les routes GET /books sont publiques
            return await call_next(request)
            
        # Pour tous les autres chemins, vérification du token
        token = request.headers.get("Authorization")
        
        if not token:
            raise HTTPException(status_code=403, detail="No auth token provided")
        
        try:
            scheme, jwt_token = token.split()
            
            if scheme.lower() != "bearer":
                raise HTTPException(status_code=403, detail="Invalid token scheme")
            
            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=[ALGORITHM])
            request.state.user = payload  # Stockage des informations de l'utilisateur dans la requête
            
        except (JWTError, ValueError):
            raise HTTPException(status_code=403, detail="Invalid or expired token")
        
        return await call_next(request)