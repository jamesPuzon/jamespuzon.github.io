# Content Management Guide

This guide will help you update your personal website without needing to edit HTML or CSS files. All content is managed through a single JSON file.

## Quick Start

All website content is stored in the `content.json` file in the root directory. To update your website:

1. Open `content.json` in any text editor
2. Make your changes following the structure outlined below
3. Save the file
4. Your changes will appear automatically when the page is refreshed

## Understanding JSON Structure

JSON (JavaScript Object Notation) is a simple format for storing data. Here are the basics:

- Use double quotes `"` for all text
- Separate items with commas `,`
- Use curly braces `{}` for objects
- Use square brackets `[]` for lists
- Don't add a comma after the last item in a list or object

## Content Structure

### Header Section

Controls the site name and title:

```json
"header": {
  "name": "James Puzon",
  "title": "James Puzon - Personal Website"
}
```

- **name**: Your name displayed in the header
- **title**: Browser tab/window title

### Home Page

Controls the homepage content:

```json
"home": {
  "profileImage": "images/profile.jpg",
  "welcomeText": "Welcome to my personal website...",
  "exploreTitle": "Explore My Website",
  "exploreDescription": "Navigate through the different sections..."
}
```

- **profileImage**: Path to your profile photo (see Adding Images section)
- **welcomeText**: Introduction paragraph
- **exploreTitle**: Title for the navigation section
- **exploreDescription**: Description under the explore title

### About Page

Contains multiple sections about your background:

```json
"about": {
  "sections": [
    {
      "title": "Education",
      "content": "Your educational background description...",
      "details": [
        "Bullet point 1",
        "Bullet point 2"
      ],
      "image": "images/education.jpg"
    }
  ]
}
```

Each section can have:
- **title**: Section heading
- **content**: Main paragraph text
- **details**: Optional list of bullet points (can be omitted)
- **image**: Optional image (can be empty `""`)

**Example: Adding a new section**

```json
{
  "title": "Skills",
  "content": "I have expertise in various areas including...",
  "details": [
    "Web Development",
    "Project Management",
    "Team Leadership"
  ],
  "image": ""
}
```

### Portfolio Page

Displays your projects:

```json
"portfolio": {
  "title": "My Portfolio",
  "description": "Welcome to my portfolio...",
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "image": "images/project1.jpg",
      "link": "https://project-url.com"
    }
  ]
}
```

- **title**: Portfolio page title
- **description**: Introduction text
- **projects**: Array of project objects

Each project has:
- **title**: Project name
- **description**: What the project is about
- **image**: Screenshot or photo (optional)
- **link**: URL to the project (optional, can be empty `""`)

**Example: Adding a new project**

```json
{
  "title": "My Website Redesign",
  "description": "A complete redesign of a local business website using modern web technologies.",
  "image": "images/website-project.jpg",
  "link": "https://example-site.com"
}
```

### Contact Page

Your contact information:

```json
"contact": {
  "title": "Get In Touch",
  "description": "I'd love to hear from you...",
  "email": "your.email@example.com",
  "phone": "+1-234-567-8900",
  "social": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "yourusername",
    "twitter": "yourhandle"
  },
  "additionalInfo": "Feel free to connect..."
}
```

- **title**: Contact page heading
- **description**: Introduction text
- **email**: Your email address
- **phone**: Phone number (optional)
- **social**: Social media links
  - Can be full URLs or just usernames
  - Leave empty `""` to hide a social link
- **additionalInfo**: Additional message at the bottom

## Adding Images

### Step 1: Prepare Your Image

1. Choose a descriptive filename (e.g., `profile-photo.jpg`, `project-website.png`)
2. Optimize the image size:
   - Profile photos: 400x400 pixels recommended
   - Project images: 800x600 pixels recommended
   - Keep file size under 1MB for best performance

### Step 2: Upload to Images Folder

1. Place your image file in the `images/` directory
2. Note the exact filename (including extension)

### Step 3: Reference in JSON

Use the path format: `"images/filename.jpg"`

```json
"profileImage": "images/my-photo.jpg"
```

### Image Best Practices

- Use JPG for photographs
- Use PNG for graphics with transparency
- Compress images before uploading
- Use descriptive filenames with hyphens (no spaces)
- Keep filenames lowercase for consistency

### Placeholder Images

If you leave an image field empty (`""`) or the image doesn't exist:
- Profile images show a default placeholder
- Project images are simply hidden
- The page continues to work normally

## Common Editing Tasks

### Change Your Name

Edit the header section:

```json
"header": {
  "name": "Your New Name",
  "title": "Your New Name - Personal Website"
}
```

### Update Welcome Message

Edit the home section:

```json
"home": {
  "welcomeText": "Your new welcome message here..."
}
```

### Add a New Project

Add a new object to the projects array (don't forget the comma):

```json
"projects": [
  {
    "title": "Existing Project",
    "description": "...",
    "image": "images/project1.jpg",
    "link": ""
  },
  {
    "title": "New Project",
    "description": "Description of the new project",
    "image": "images/new-project.jpg",
    "link": "https://new-project.com"
  }
]
```

### Update Contact Information

Edit the contact section:

```json
"contact": {
  "email": "newemail@example.com",
  "phone": "+1-555-123-4567",
  "social": {
    "linkedin": "https://linkedin.com/in/newprofile",
    "github": "newusername",
    "twitter": "newhandle"
  }
}
```

### Remove a Section

To remove a section from the About page, simply delete the entire object (including the curly braces and its contents). Make sure to fix commas - there should be no comma after the last item.

Before:
```json
"sections": [
  {
    "title": "Section 1",
    "content": "..."
  },
  {
    "title": "Section 2 - DELETE THIS",
    "content": "..."
  },
  {
    "title": "Section 3",
    "content": "..."
  }
]
```

After:
```json
"sections": [
  {
    "title": "Section 1",
    "content": "..."
  },
  {
    "title": "Section 3",
    "content": "..."
  }
]
```

## Mobile-Friendly Content Tips

Your website is fully responsive, but keep these tips in mind for the best mobile experience:

### Text Content

- Keep paragraphs reasonably short (3-5 sentences)
- Use bullet points for lists of items
- Break up long content into multiple sections

### Images

- Use landscape orientation (800x600) or square (600x600) for best results
- Optimize image file sizes (under 500KB per image is ideal)
- Images automatically scale on mobile devices

### Project Descriptions

- Keep project descriptions concise (2-3 sentences)
- Highlight the most important information first
- Use the link field to let users learn more

## Testing Your Changes

After editing `content.json`:

1. Save the file
2. Refresh your website in a browser
3. Check all pages (Home, About, Portfolio, Contact)
4. Test on different screen sizes:
   - Desktop (full width)
   - Tablet (medium width)
   - Mobile phone (small width)

## Troubleshooting

### Changes Don't Appear

- **Hard refresh**: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- **Clear cache**: Clear your browser cache and reload
- **Check JSON syntax**: Make sure all quotes and commas are correct

### JSON Syntax Errors

If the page stops working after editing:

1. Check for missing or extra commas
2. Ensure all text uses double quotes `"`
3. Verify brackets `{}` and `[]` are properly closed
4. Use a JSON validator tool online to check for errors

Common mistakes:
- Comma after the last item: `"item": "value",` ❌
- Single quotes instead of double: `'text'` ❌
- Missing comma between items ❌

### Images Don't Show

- Verify the image file exists in the `images/` folder
- Check the filename exactly matches (including extension)
- Check the path format: `"images/filename.jpg"`
- Ensure the image file isn't corrupted
- Try a different image format (JPG vs PNG)

## Need Help?

If you run into issues:

1. Check the browser console for error messages (F12 key)
2. Validate your JSON syntax using an online validator
3. Revert to a previous working version of `content.json`
4. Start with small changes and test frequently

## Example: Complete Update

Here's an example of updating your portfolio with a new project:

1. Add the project image to `images/` folder: `my-new-project.jpg`

2. Open `content.json` and find the portfolio section

3. Add your project (note the comma after the previous project):

```json
"portfolio": {
  "title": "My Portfolio",
  "description": "...",
  "projects": [
    {
      "title": "Existing Project",
      "description": "...",
      "image": "images/project1.jpg",
      "link": ""
    },
    {
      "title": "My New Project",
      "description": "A mobile app that helps users track their fitness goals with gamification features.",
      "image": "images/my-new-project.jpg",
      "link": "https://my-new-project.com"
    }
  ]
}
```

4. Save the file and refresh your website

Your new project now appears on the portfolio page!

---

**Remember**: You never need to edit HTML or CSS files. All content updates happen in `content.json`. Happy updating!
