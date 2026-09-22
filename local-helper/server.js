import express from "express"
import cors from "cors"
import { spawn } from "child_process"

const app = express()

app.use(cors())
app.use(express.json())

app.post("/download", (req, res) => {
    const { url } = req.body

    if (!url) {
        return res.status(400).json({ error: "Missing URL" })
    }

    const process = spawn("yt-dlp", [
        "-o",
        "%(title)s.%(ext)s",
        url
    ])

    process.on("close", (code) => {
        console.log(`yt-dlp exited with ${code}`)
    })

    res.json({
        success: true,
        message: "Download started"
    })
})

app.listen(8765, "127.0.0.1", () => {
    console.log("QTools local helper running on port 8765")
})