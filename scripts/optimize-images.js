import sharp from 'sharp';
import { readdir, statSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, '../src/assets');
const optimizedDir = join(__dirname, '../src/assets/optimized');

// Create optimized directory if it doesn't exist
if (!existsSync(optimizedDir)) {
  mkdirSync(optimizedDir);
}

// Configuration for different image types
const config = {
  jpg: {
    quality: 80,
    maxWidth: 1200
  },
  jpeg: {
    quality: 80,
    maxWidth: 1200
  },
  png: {
    quality: 80,
    maxWidth: 1200
  }
};

// Special config for background image
const backgroundConfig = {
  quality: 100,
  maxWidth: 2400, // Larger width for high-resolution displays
  format: 'webp', // Using WebP for better compression while maintaining quality
  options: {
    effort: 6, // Higher compression effort
    lossless: true, // Preserve full quality
    nearLossless: true, // Use near-lossless compression
    smartSubsample: true, // Intelligent chroma subsampling
  }
};

// Process all images in the assets directory
readdir(assetsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const ext = extname(file).toLowerCase().slice(1);
    if (['jpg', 'jpeg', 'png'].includes(ext)) {
      const inputPath = join(assetsDir, file);
      const isBackground = file.includes('sharyu-background-new');
      
      // Use .webp extension for background image
      const outputFileName = isBackground ? 
        `optimized-${file.replace(/\.[^/.]+$/, '.webp')}` : 
        `optimized-${file}`;
      const outputPath = join(optimizedDir, outputFileName);

      // Create sharp pipeline
      let pipeline = sharp(inputPath)
        .resize({
          width: isBackground ? backgroundConfig.maxWidth : config[ext].maxWidth,
          height: null,
          withoutEnlargement: true,
          fit: 'inside'
        });

      // Process image based on type
      if (isBackground) {
        pipeline = pipeline
          .webp(backgroundConfig.options)
          .toFile(outputPath)
          .then(info => {
            console.log(`Optimized ${file} (WebP):`, info);
            const originalSize = statSync(inputPath).size;
            const optimizedSize = info.size;
            const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
            console.log(`Size reduced by ${savings}% while maintaining original quality`);
          })
          .catch(err => {
            console.error(`Error processing ${file}:`, err);
          });
      } else {
        pipeline
          .jpeg({ quality: config[ext].quality })
          .toFile(outputPath)
          .then(info => {
            console.log(`Optimized ${file}:`, info);
            const originalSize = statSync(inputPath).size;
            const optimizedSize = info.size;
            const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
            console.log(`Size reduced by ${savings}%`);
          })
          .catch(err => {
            console.error(`Error processing ${file}:`, err);
          });
      }
    }
  });
}); 