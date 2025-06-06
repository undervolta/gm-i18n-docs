# GM-I18n Documentation

Welcome to the **GM-I18n** documentation project! This project uses [Docus](https://docus.dev) to generate beautiful documentation for the GM-I18n internationalization library.

## 🚀 Contributing

We welcome contributions! Follow this guide to set up the development environment using **Bun runtime** for optimal performance.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Git** - For the version control
- **Bun** - JavaScript runtime and package manager (we'll install this in the next step)

### Step 1: Install Bun Runtime

Bun is a fast JavaScript runtime and package manager that significantly improves development experience.

#### On Windows:
```powershell
# Using PowerShell (run as administrator)
irm bun.sh/install.ps1 | iex
```

#### On macOS/Linux:
```bash
# Using curl
curl -fsSL https://bun.sh/install | bash

# Or using npm (if you have Node.js installed)
npm install -g bun
```

#### Verify Bun Installation:
```bash
bun --version
```

If you see the version number, Bun is installed correctly.

### Step 2: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/undervolta/gm-i18n-docs.git
```

### Step 3: Install Dependencies

Install all project dependencies using Bun:

```bash
# make sure you're in the project directory
cd gm-i18n-docs

# and then
bun install
```

This command will:
- Read the `package.json` file
- Install all dependencies listed in `devDependencies`
- Create a `bun.lockb` file (Bun's lockfile format)
- Set up the project for development

### Step 4: Start Development Server

Launch the development server:

```bash
bun run dev
```

This will:
- Start the Nuxt development server
- Enable hot module replacement (HMR)
- Make the documentation available at `http://localhost:3000`
- Watch for file changes and automatically reload

### Step 5: Verify Setup

1. Open your browser and navigate to `http://localhost:3000`
2. You should see the GM-I18n documentation homepage
3. Try editing a file in the `content/` directory to see live updates

## 📝 Development Workflow

### Project Structure

```
gm-i18n-docs/
├── content/          # Markdown documentation files
|   └── v0/           # Version 0 of the documentation
├── components/       # Vue components
├── public/           # Static assets
├── app.config.ts     # App configuration
├── nuxt.config.ts    # Nuxt configuration
└── package.json      # Dependencies and scripts
```

### Making Changes

1. **Documentation** - Edit files in the `content/` directory
2. **Components** - Add or modify Vue components in `components/`
3. **Styling** - Customize themes using Docus configuration
4. **Configuration** - Modify `nuxt.config.ts` or `app.config.ts` as needed

### Deployment

You don't need to deploy the documentation. Just make changes and create a pull request, and I will deploy it automatically.

## 🛠️ Troubleshooting

### Common Issues

1. **Bun not found** - Ensure Bun is properly installed and in your PATH
2. **Port already in use** - The dev server uses port 3000 by default. Kill other processes or change the port
3. **Dependencies issues** - Try removing `node_modules` and running `bun install` again

### Getting Help

- Check the [Docus documentation](https://docus.dev)
- Review [Nuxt 3 documentation](https://nuxt.com)
- Open an issue in this repository for project-specific problems

## 📄 License

This documentation project follows the same license as the main [GM-I18n](https://github.com/undervolta/GM-I18n/blob/main/README.md) project.

---

Thank you for contributing to **GM-I18n** documentation!
