# Images Directory

This directory contains all images used in your personal website.

## How to Add Images

1. **Upload Your Images**: Place your image files in this `images/` directory
2. **Supported Formats**: JPG, PNG, GIF, SVG, and WEBP
3. **Naming Convention**: Use descriptive, lowercase names with hyphens (e.g., `profile-photo.jpg`, `project-screenshot.png`)

## Image Guidelines

### Profile Image
- **Filename**: `profile.jpg` (or update the filename in `content.json`)
- **Recommended Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **Max File Size**: 500KB for optimal loading speed

### Portfolio Project Images
- **Recommended Size**: 800x600 pixels (landscape) or 600x800 pixels (portrait)
- **Format**: JPG or PNG
- **Max File Size**: 1MB per image

### General Tips
- Optimize images before uploading to reduce file size
- Use descriptive filenames that relate to the content
- Maintain consistent aspect ratios for similar types of images
- Consider using compressed formats (WEBP) for better performance

## Referencing Images in content.json

When you add an image to this directory, reference it in `content.json` like this:

```json
"image": "images/your-image-name.jpg"
```

For example:
```json
{
  "profileImage": "images/profile.jpg",
  "projects": [
    {
      "title": "My Project",
      "image": "images/project-screenshot.png"
    }
  ]
}
```

## Image Placeholders

If an image path is empty (`""`) or the image file doesn't exist, the website will display a placeholder automatically. This allows you to set up your content structure before having all images ready.
