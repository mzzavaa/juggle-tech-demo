# JuggleTech Dashboard

![JuggleTech Dashboard](https://via.placeholder.com/800x400?text=JuggleTech+Dashboard)

JuggleTech is an open-source **learning dashboard** created by AWS Hero **Linda Mohamed** from Austria. The project combines technical learning with real-world project building, using juggling as a metaphor for skill acquisition.

## Features

- **Dashboard** - Get an overview of your learning progress
- **Modules** - Track your progress through technical, business, and foundational modules
- **Practice Log** - Record your "juggling practice" (hands-on coding sessions)
- **Achievements** - Unlock and showcase your learning milestones
- **News Feed** - Stay updated with relevant tech news and insights
- **GitHub Integration** - Display your GitHub stats and activity

## The Juggling Metaphor

Just as juggling requires practice, patience, and progressive skill building, so does learning new technologies. JuggleTech uses this metaphor to make the learning journey more engaging:

- **One Ball** modules focus on mastering a single concept
- **Two Ball** modules introduce coordination between multiple components
- **Three Ball** modules orchestrate complex systems working together
- Different **props** (balls, rings, clubs) represent different types of skills

## Learning Philosophy

JuggleTech is built on three core principles:

1. **Technical Skills** - Learn practical, hands-on technical capabilities
2. **Real-World Use Cases** - Apply skills to build actual projects (like OTTO, our AI assistant)
3. **Business Validation** - Understand the ROI and business value of what you're building

## Getting Started

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.110.0 or later)
- [Node.js](https://nodejs.org/) (v16 or later)
- [Git](https://git-scm.com/)

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/juggletech.git
   cd juggletech
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit http://localhost:1313

### Deployment Notes

The project uses relative URLs throughout, making it flexible for deployment in any environment:

- **Local Development**: Works out of the box with `hugo server`
- **GitHub Pages**: The GitHub Actions workflow automatically sets the correct baseURL for production
- **Custom Hosting**: No configuration changes needed - the site adapts to where it's hosted

This approach ensures maximum portability without requiring manual configuration changes.

## How to Fork and Deploy Your Own JuggleTech

1. **Fork the Repository**
   - Go to the [JuggleTech GitHub repository](https://github.com/yourusername/juggletech)
   - Click the "Fork" button in the top-right corner

2. **Enable GitHub Pages**
   - Go to your repository's Settings > Pages
   - Select "GitHub Actions" as the source

3. **Customize Your Dashboard**
   - Edit `hugo.toml` to update your GitHub username and site title
   - Modify `data/modules.json` to track your learning modules
   - Update `data/achievements.json` to reflect your achievements
   - Log your practice sessions in `data/practice.json`

4. **Commit and Push Changes**
   - After making your changes, commit and push them to your repository
   - The GitHub Action will automatically build and deploy your site

5. **Access Your Dashboard**
   - Your personalized JuggleTech dashboard will be available at `https://yourusername.github.io/juggletech/`

## Contributing

We welcome contributions to the JuggleTech project! If you've created courses or use cases that you think would benefit others:

1. **Create a Branch**
   ```bash
   git checkout -b feature/my-new-courses
   ```

2. **Make Your Changes**
   - Add new courses to `data/modules.json`
   - Add new achievements to `data/achievements.json`
   - Ensure you follow the existing format

3. **Submit a Pull Request**
   - Push your branch to your fork
   - Submit a pull request to the main repository

## License

**Important:** JuggleTech is available under a dual-license model:

- **Free for personal and educational use** under the JuggleTech Community License
- **Commercial use requires a separate license** - please contact us for details

See the [LICENSE](LICENSE) file for more information.

## About the Creator

**Linda Mohamed** is an AWS Community Hero specializing in AI/ML, who bridges cloud technology with human skills. She literally juggles as a hobby!

JuggleTech is to help people learn by doing and build practical use cases while showcasing their achievements.
