import * as fs from 'fs';
import * as path from 'path';

interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
}

const categoryMapping: Record<string, string> = {
  'ice-dam-prevention-south-shore': 'Seasonal Maintenance',
  'winterizing-guide-massachusetts': 'Seasonal Maintenance',
  'preparing-home-noreaster-massachusetts': 'Seasonal Maintenance',
  'spring-maintenance-checklist-massachusetts': 'Seasonal Maintenance',
  'summer-ac-maintenance-coastal-homes': 'Seasonal Maintenance',
  'fall-gutter-drainage-maintenance': 'Seasonal Maintenance',
  'basement-waterproofing-guide-new-england': 'Home Systems',
  'roof-repair-vs-replacement-massachusetts': 'Home Systems',
  'colonial-home-common-issues': 'Home Styles',
  'cape-cod-style-home-maintenance': 'Home Styles',
  'historic-home-maintenance-massachusetts': 'Home Styles',
  'finding-reliable-contractors-south-shore': 'South Shore Guides',
  'first-year-homeowner-south-shore': 'South Shore Guides',
  'understanding-home-inspection-report': 'South Shore Guides',
};

const tagsMapping: Record<string, string[]> = {
  'ice-dam-prevention-south-shore': ['winter', 'ice dams', 'south shore', 'prevention', 'colonial homes'],
  'winterizing-guide-massachusetts': ['winter', 'maintenance', 'seasonal', 'checklist', 'preparation'],
  'preparing-home-noreaster-massachusetts': ['winter', 'storms', 'nor\'easter', 'preparation', 'emergency'],
  'spring-maintenance-checklist-massachusetts': ['spring', 'maintenance', 'seasonal', 'checklist', 'inspection'],
  'summer-ac-maintenance-coastal-homes': ['summer', 'air conditioning', 'HVAC', 'coastal', 'maintenance'],
  'fall-gutter-drainage-maintenance': ['fall', 'gutters', 'drainage', 'maintenance', 'water management'],
  'basement-waterproofing-guide-new-england': ['basement', 'waterproofing', 'moisture', 'foundation', 'prevention'],
  'roof-repair-vs-replacement-massachusetts': ['roofing', 'repair', 'replacement', 'costs', 'maintenance'],
  'colonial-home-common-issues': ['colonial homes', 'common problems', 'maintenance', 'historic', 'south shore'],
  'cape-cod-style-home-maintenance': ['cape cod', 'home maintenance', 'coastal', 'architecture', 'care'],
  'historic-home-maintenance-massachusetts': ['historic homes', 'preservation', 'maintenance', 'old houses', 'restoration'],
  'finding-reliable-contractors-south-shore': ['contractors', 'hiring', 'south shore', 'professionals', 'home improvement'],
  'first-year-homeowner-south-shore': ['first-time homeowner', 'guide', 'south shore', 'maintenance', 'tips'],
  'understanding-home-inspection-report': ['home inspection', 'buying', 'reports', 'real estate', 'guidance'],
};

function extractTitle(content: string): string {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1] : 'Untitled';
}

function extractDescription(content: string): string {
  // Get the first paragraph after the title and subtitle
  const lines = content.split('\n');
  let foundTitle = false;
  let foundSubtitle = false;

  for (const line of lines) {
    if (line.startsWith('# ') && !foundTitle) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.startsWith('*') && !foundSubtitle) {
      foundSubtitle = true;
      continue;
    }
    if (foundTitle && foundSubtitle && line.trim() && !line.startsWith('#')) {
      return line.trim().substring(0, 160);
    }
  }

  return 'Expert home maintenance advice for South Shore Massachusetts homeowners.';
}

function convertToMDX(filename: string, content: string): string {
  const slug = filename.replace('.md', '');
  const title = extractTitle(content);
  const description = extractDescription(content);
  const category = categoryMapping[slug] || 'Home Maintenance';
  const tags = tagsMapping[slug] || ['home maintenance', 'south shore'];

  const frontmatter = `---
title: "${title}"
description: "${description}"
date: "2025-02-12"
category: "${category}"
tags: ${JSON.stringify(tags)}
author: "Zeke"
---

`;

  return frontmatter + content;
}

function convertAllArticles() {
  const sourceDir = path.join(__dirname, '../../content');
  const targetDir = path.join(__dirname, '../content/blog');

  // Read all markdown files from source
  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.md'));

  console.log(`Converting ${files.length} articles to MDX...`);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    const mdxContent = convertToMDX(file, content);

    const targetFilename = file.replace('.md', '.mdx');
    const targetPath = path.join(targetDir, targetFilename);

    fs.writeFileSync(targetPath, mdxContent);
    console.log(`✓ Converted ${file} → ${targetFilename}`);
  });

  console.log(`\nSuccessfully converted ${files.length} articles!`);
}

convertAllArticles();
