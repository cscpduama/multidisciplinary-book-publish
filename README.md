# Department of Computer Science, PDUAM Amjonga — Book Publications Portal

This repository contains the official publications portal and chapter archives for the multidisciplinary edited volumes published by the Department of Computer Science, Pandit Deendayal Upadhyaya Adarsha Mahavidyalaya (PDUAM), Amjonga, Goalpara, Assam, India.

---

## 📂 Repository Structure

The portal is designed as a lightweight, clean, and self-contained static site structure:

```text
multidisciplinary-book-publish/
├── index.html                    # Main portal home page (showcases all volumes)
├── README.md                     # Documentation & developer guide (this file)
├── edition-1/                    # First Edition: "Multidisciplinary Research: Innovations..."
│   ├── index.html                # Chapter list & contributor index
│   ├── coverImage_en.png         # Volume 1 cover photo
│   └── ch/                       # Directory containing PDF chapters and compiled book
│       ├── chapter1.pdf
│       └── finalbook.pdf
└── edition-2/                    # Second Edition: "Advances in Multidisciplinary Research..."
    ├── index.html                # Chapter list & contributor index
    ├── coverImage_en.jpg         # Volume 2 cover photo (generated)
    └── chapters/                 # Directory containing Volume 2 PDF chapters
        └── .gitkeep
```

---

## 🚀 Deployment & Reverse Proxy Setup

This repository is designed to be hosted independently (e.g., on Vercel as `multidisciplinary-book-publish.vercel.app`) but accessed seamlessly through the main department website domain via a reverse proxy rewrite.

### Main Site Vercel Configuration (`vercel.json`)
The main repository (`cscpduam`) routing rules map incoming traffic from `/books-publish` directly to this project:

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/books-publish",
      "destination": "https://multidisciplinary-book-publish.vercel.app"
    },
    {
      "source": "/books-publish/:path*",
      "destination": "https://multidisciplinary-book-publish.vercel.app/:path*"
    }
  ]
}
```

This configuration ensures:
- The books portal loads at: `https://csc.pduam.dpdns.org/books-publish`
- Edition 1 loads at: `https://csc.pduam.dpdns.org/books-publish/edition-1`
- Edition 2 loads at: `https://csc.pduam.dpdns.org/books-publish/edition-2`

---

## ➕ How to Add a Future Edition (e.g., 3rd Edition)

To add a new edition in the future, follow this step-by-step procedure:

### Step 1: Create the Folder Structure
Create a new folder in this root directory named `edition-3` (use lowercase, hyphenated naming):
```text
multidisciplinary-book-publish/
└── edition-3/
    ├── index.html
    ├── coverImage_en.jpg
    └── chapters/
```

### Step 2: Prepare the Sub-Index & PDFs
1. Copy the structure of `index.html` from `edition-2` or `edition-1` to act as the chapter index page.
2. Edit the metadata (ISBN, E-ISBN, DOI, Editors, Chapter list) in `edition-3/index.html`.
3. Put the chapter PDF files in `edition-3/chapters/`.
4. Ensure all link paths are **fully relative** so they do not break when hosted under a subdirectory (e.g., link to chapters as `chapters/chapter1.pdf` instead of absolute paths).

### Step 3: Add to the Main Portal
Open the root `index.html` in this repository and update the **Published Volumes** section:
1. Move the `Latest Volume` badge from Edition 2 to your new Edition 3 card.
2. Duplicate one of the `<article class="volume-card">` nodes and paste it at the top of the `<div class="volumes-container">` container.
3. Update the details for the 3rd Edition (Title, description, ISBNs, editors, chapter stats, and cover image source).
4. Point the "Browse Chapter Index" button to: `edition-3/index.html`.

### Step 4: Commit and Push
Commit your changes to git and push them to your deployment branch. Vercel will automatically compile the build and the new volume will be immediately live under `/books-publish/edition-3/`!

---

## 📬 Editorial Board & Contacts
For issues regarding book publishing or updates to the chapter indexes:
- **Email:** `cscpduambookchapter@gmail.com`
- **Department portal:** `https://csc.pduam.dpdns.org`
