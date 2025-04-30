# Google Docs Clone

A real-time collaborative document editing application built with Next.js, React, and Liveblocks. This project emulates core functionalities of Google Docs, enabling multiple users to edit documents simultaneously with live updates.

## 🚀 Features

- **Real-Time Collaboration**: Multiple users can edit the same document concurrently, with changes reflected instantly across all clients.
- **Rich Text Editing**: Utilizes Quill.js for a comprehensive rich text editing experience.
- **User Presence Indicators**: Displays active users and their cursors within the document.
- **Document Persistence**: Changes are saved automatically to ensure data is not lost.
- **Responsive Design**: Optimized for various screen sizes and devices.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Editor**: Tiptap Editor
- **Real-Time Backend**: Liveblocks
- **State Management**: Convex
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/NodePulse/google-docs-clone.git
   cd google-docs-clone
   ```

2. **Install dependencies:**

   ```
   npm install
   # or
   yarn install
   ```

3. **Setup Environment Variables**

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your keys from Liveblocks, Convex, and Clerk:

```env
# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_public_liveblocks_key
LIVEBLOCK_SECRET_KEY=your_secret_liveblocks_key

# Convex
CONVEX_DEPLOYMENT=your_convex_deployment_url
NEXT_PUBLIC_CONVEX_URL=your_convex_public_url

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. **Run the Development Server**
   ```
   npm run dev
   # or
   yarn dev
   ```

## 📤 Deployment

This project is optimized for deployment on **Vercel**.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 🙌 Acknowledgements

- [Liveblocks](https://liveblocks.io/)
- [Tiptap Editor](https://quilljs.com/)
- [Convex](https://www.convex.dev/)
- [Vercel](https://vercel.com/)
- [Clerk](https://clerk.dev/)
