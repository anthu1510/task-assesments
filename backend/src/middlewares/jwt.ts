import { RequestHandler, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../configs/env"
import * as UserTypes from "../types"

export const generateAccessToken = (payload: UserTypes.IJwtPayload): string => {
    return jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {expiresIn: env.ACCESS_TOKEN_EXPIRE_TIME});
}

export const generateRefreshToken = (payload: UserTypes.IJwtPayload): string => {
    return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {expiresIn: env.REFRESH_TOKEN_EXPIRE_TIME});
}

export const generateTokens = (payload: UserTypes.IJwtPayload): UserTypes.ILoginResponse => {
    let tokens = {
        status: true,
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload),
    };
    return tokens;
}

export const authenticateJWT: RequestHandler = (
    req,
    res,
    next
  ): void | Response<{ error: string }> => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token.split(' ')[1], env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      return next();
    });
  };