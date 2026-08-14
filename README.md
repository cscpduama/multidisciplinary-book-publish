# Computer Science Department Book Publications Portal

Welcome! This is the official file repository for the book publishing portal of the Department of Computer Science, Pandit Deendayal Upadhyaya Adarsha Mahavidyalaya (PDUAM), Amjonga.

This page explains how the files are organized, what public web links they map to, and how teachers and editorial staff can make simple updates.

---

## 🌐 Public Web Links (URLs)
The files in this repository are served on the internet at these specific web addresses:

| Web Link (URL) | What Page It Opens |
| :--- | :--- |
| **[csc.pduamamjonga.in/multidisciplinary-book-publish](https://csc.pduamamjonga.in/multidisciplinary-book-publish)** | The **Main Portal Homepage** (shows all books) |
| **[csc.pduamamjonga.in/multidisciplinary-book-publish/edition-1/](https://csc.pduamamjonga.in/multidisciplinary-book-publish/edition-1/)** | **First Edition (2025)** chapter listing and search |
| **[csc.pduamamjonga.in/multidisciplinary-book-publish/edition-2/](https://csc.pduamamjonga.in/multidisciplinary-book-publish/edition-2/)** | **Second Edition (2026)** chapter listing and search |

---

## 📂 Folders and Files Guide

Here is a simple map of what files are located in this folder:

* 📄 **`index.html`** (Main Portal Home)
  * This is the front page of the book portal. It displays the summary of the book publishing series, advisory boards, and displays cards linking to each edition.
* 📄 **`404.html`** (Custom Error Page)
  * Displays a polite message if a visitor enters a broken link.
* 📂 **`edition-1/`** (First Edition Folder)
  * Contains all pages and files for the first book published in 2025.
  * 📘 **[First Edition Guide & Instructions (`edition-1/README.md`)](edition-1/README.md)** (Click here to read)
* 📂 **`edition-2/`** (Second Edition Folder)
  * Contains all pages and files for the second book published in 2026.
  * 📘 **[Second Edition Guide & Instructions (`edition-2/README.md`)](edition-2/README.md)** (Click here to read)

---

## 📝 How to Manage the Portal (For Teachers & Editors)

### 1. How to Correct Contributor Names or Titles
If there is a typo in a chapter title, author name, or institutional affiliation:
1. Go to the folder of the edition you want to edit (e.g., `edition-2/`).
2. Open the `index.html` file inside that folder.
3. Search for the text you want to correct, edit it, and save the file.

### 2. How to Upload or Replace a Chapter PDF
If you need to upload a chapter or replace an existing file:
1. Name your PDF file matching the standard format (e.g., `chapter20.pdf`).
2. Place it in the `chapters/` folder inside that edition (e.g., `edition-2/chapters/`).
3. If it is a new file, make sure it is linked correctly in the `index.html` chapter list.

### 3. How to Add a Future Edition (e.g., 3rd Edition)
1. Copy one of the existing edition folders (like `edition-2/`) and rename it to `edition-3/`.
2. Delete the old PDF files inside `edition-3/chapters/` and upload your new chapter PDFs.
3. Open `edition-3/index.html` and update the titles, authors, and book metadata (ISBN, Editors, Year).
4. Update the root `index.html` to add a new card linking to `/multidisciplinary-book-publish/edition-3/`.

---

## 📬 Editorial Contacts
For any portal queries or requests:
* **Editorial Email:** `cscpduambookchapter@gmail.com`
* **Department Website:** `https://csc.pduamamjonga.in`
