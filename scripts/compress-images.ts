import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve('src/assets/images');
const outDir = path.resolve('public/images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imageMap: { src: string; target: string; maxWidth: number; quality: number }[] = [
  {
    src: 'hero_luxury_flacon_1791983037147.jpg',
    target: 'haute-parfumerie-flacon-hero.webp',
    maxWidth: 1200,
    quality: 75,
  },
  {
    src: 'fragrance_men_flacon_1791983039572.jpg',
    target: 'sauvage-elixir-dior-men-flacon.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'fragrance_women_luxury_1791983038689.jpg',
    target: 'baccarat-rouge-540-flacon-women.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_edp_vs_edt_1791983079068.jpg',
    target: 'eau-de-parfum-vs-parfum-flacons.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_summer_fresh_1791983079641.jpg',
    target: 'wulong-cha-nishane-summer-citrus.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'perfume_gift_box_silver_1791983040058.jpg',
    target: 'angels-share-kilian-gift-box.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_perfume_notes_1791983081417.jpg',
    target: 'perfume-notes-botanical-pyramid.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_perfume_longevity_1791983080782.jpg',
    target: 'perfume-atomizer-longevity-mist.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'perfume_oud_wood_bottle_1791983040038.jpg',
    target: 'oud-wood-tom-ford-agarwood.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_affordable_luxury_1791983134132.jpg',
    target: 'encre-noire-lalique-affordable-luxury.webp',
    maxWidth: 800,
    quality: 75,
  },
  {
    src: 'blog_perfume_lifestyle_1791983081984.jpg',
    target: 'another-13-le-labo-perfume-lifestyle.webp',
    maxWidth: 800,
    quality: 75,
  },
];

async function compressAll() {
  console.log('Compressing and converting all images to WebP under 100 KB...');
  const results = [];

  for (const item of imageMap) {
    const inputPath = path.join(srcDir, item.src);
    const outputPath = path.join(outDir, item.target);

    if (!fs.existsSync(inputPath)) {
      console.warn(`Source not found: ${inputPath}`);
      continue;
    }

    let q = item.quality;
    let buffer = await sharp(inputPath)
      .resize({ width: item.maxWidth, withoutEnlargement: true })
      .webp({ quality: q, effort: 6 })
      .toBuffer();

    // If over 95KB, reduce quality progressively
    while (buffer.length > 95 * 1024 && q > 40) {
      q -= 5;
      buffer = await sharp(inputPath)
        .resize({ width: item.maxWidth, withoutEnlargement: true })
        .webp({ quality: q, effort: 6 })
        .toBuffer();
    }

    fs.writeFileSync(outputPath, buffer);
    const sizeKb = (buffer.length / 1024).toFixed(1);
    results.push({ target: item.target, sizeKb: `${sizeKb} KB`, under100: buffer.length <= 100 * 1024 });
    console.log(`Saved ${item.target} (${sizeKb} KB, quality: ${q})`);
  }

  console.log('All images compressed successfully.');
}

compressAll().catch(console.error);
