const { verifyToken } = require("../utils/jwtTokens");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("[authMiddleware] token:", token);

    if (!token) {
      console.warn("[authMiddleware] No token provided");
      return res.status(401).json({ error: "No token provided." });
    }

    const decoded = verifyToken(token);
    console.log("[authMiddleware] decoded user:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.error("[authMiddleware] Token verification failed:", error.message);
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
