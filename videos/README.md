# Videos Directory

This directory contains all short video clips used in your personal website.

## How to Add Videos

1. **Upload Your Videos**: Place your video files in this `videos/` directory
2. **Recommended Formats**: MP4 (H.264 codec) and WebM for broad browser compatibility
3. **Naming Convention**: Use descriptive, lowercase names with hyphens (e.g., `robotics-demo.mp4`, `rover-test-run.webm`)

## Video Guidelines

### File Size and Compression
- **Maximum File Size**: Keep videos under 50-100 MB per video
- **Recommended Tools**: 
  - HandBrake (free, cross-platform)
  - FFmpeg for command-line conversion
  - Online tools like CloudConvert
- **Compression Tips**:
  - Use H.264 codec for MP4 files
  - Set CRF value between 23-28 for good quality/size balance
  - Consider two-pass encoding for best results

### Resolution
- **Recommended**: 1080p (1920x1080) maximum
- **For Smaller Files**: 720p (1280x720) offers good quality with smaller file size
- **Aspect Ratio**: 16:9 is standard and works well with responsive layouts

### Best Practices
- **Short Clips Only**: This folder is for short video clips (under 2-3 minutes)
- **Long-form Videos**: Host on YouTube or Vimeo and embed instead
- **Optimize Before Upload**: Always compress videos before uploading
- **Provide Multiple Formats**: Include both MP4 and WebM when possible for better browser support
- **Add Captions**: Consider adding captions for accessibility

## Referencing Videos in HTML

When you add a video to this directory, reference it in your HTML pages like this:

```html
<video width="100%" style="max-width: 800px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" controls>
    <source src="../videos/your-video-name.mp4" type="video/mp4">
    <source src="../videos/your-video-name.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

## Example FFmpeg Commands

Convert and compress a video to MP4:
```bash
ffmpeg -i input.mov -c:v libx264 -crf 25 -preset medium -c:a aac -b:a 128k output.mp4
```

Convert to WebM:
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

Resize to 720p:
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -preset medium -c:a copy output-720p.mp4
```

## Video Placeholders

If you reference a video that doesn't exist yet, browsers will display a standard "video not found" message. Plan your content structure and add videos when ready.
