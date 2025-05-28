import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, '../src');

async function updateImports(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Regular expression to match image imports
    const importRegex = /import\s+(\w+)\s+from\s+["']@\/assets\/([^"']+)["']/g;
    
    // Replace imports with optimized versions
    const updatedContent = content.replace(importRegex, (match, importName, imagePath) => {
      return `import ${importName} from "@/assets/optimized/optimized-${imagePath}"`;
    });
    
    // Write the updated content back to the file
    if (content !== updatedContent) {
      await writeFile(filePath, updatedContent);
      console.log(`Updated imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        await updateImports(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
  }
}

// Start processing from the src directory
processDirectory(srcDir)
  .then(() => console.log('Finished updating image imports'))
  .catch(error => console.error('Error:', error)); 