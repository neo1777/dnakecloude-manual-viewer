import os
from pathlib import Path

def generate_gallery(image_dir, output_file):
    image_dir = Path(image_dir)
    images = sorted([f.name for f in image_dir.iterdir() if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.gif')])
    
    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extracted Images Gallery</title>
    <style>
        body {{ font-family: sans-serif; background: #f0f2f5; margin: 20px; }}
        h1 {{ text-align: center; color: #1a1a1a; }}
        .gallery {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; padding: 20px; }}
        .item {{ background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; }}
        .img-container {{ height: 200px; display: flex; align-items: center; justify-content: center; background: #eee; overflow: hidden; }}
        img {{ max-width: 100%; max-height: 100%; object-fit: contain; }}
        .label {{ padding: 10px; text-align: center; font-size: 14px; font-weight: bold; background: #fff; border-top: 1px solid #eee; }}
    </style>
</head>
<body>
    <h1>DNAKE Manual Extracted Images ({len(images)})</h1>
    <div class="gallery">
"""
    
    for img in images:
        html_content += f"""
        <div class="item">
            <div class="img-container">
                <img src="{image_dir.name}/{img}" alt="{img}">
            </div>
            <div class="label">{img}</div>
        </div>
"""
        
    html_content += """
    </div>
</body>
</html>
"""
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Gallery generated: {output_file}")

if __name__ == "__main__":
    base_dir = Path(__file__).parent.absolute()
    image_folder = base_dir / "extracted_images"
    gallery_file = base_dir / "images_gallery.html"
    generate_gallery(image_folder, gallery_file)
