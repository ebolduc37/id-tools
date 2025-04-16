export default function handler(req, res) {
  const { name = "World" } = req.query
  return res.json({
    message: `Hello ${name}!`,
    timestamp: new Date().toISOString(),
  })
}
