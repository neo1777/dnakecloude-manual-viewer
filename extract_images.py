from pathlib import Path
import zipfile
import shutil
import os

def extract_images_from_docx(docx_path, output_dir):
    docx_path = Path(docx_path)
    output_dir = Path(output_dir)
    
    if not docx_path.exists():
        print(f"Error: {docx_path} not found.")
        return

    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"Opening {docx_path}...")
    
    with zipfile.ZipFile(docx_path, 'r') as docx:
        image_files = [f for f in docx.namelist() if f.startswith('word/media/')]
        
        if not image_files:
            print("No images found in word/media/ folder.")
            return

        print(f"Found {len(image_files)} images. Extracting to {output_dir.absolute()}...")
        for image_file in image_files:
            filename = Path(image_file).name
            target_path = output_dir / filename
            
            print(f"Extracting {image_file} to {target_path}...")
            try:
                with docx.open(image_file) as source, open(target_path, 'wb') as target:
                    shutil.copyfileobj(source, target)
            except Exception as e:
                print(f"Failed to extract {filename}: {e}")

    print(f"Done! {len(image_files)} images processed.")

if __name__ == "__main__":
    base_dir = Path(__file__).parent.absolute()
    docx_file = base_dir / "dnakecloudplatform-manual" / "DNAKE Cloud Platform V2.2.0 User Manual_V1.0.docx"
    output_folder = base_dir / "extracted_images"
    
    print(f"Base dir: {base_dir}")
    print(f"Docx file: {docx_file}")
    print(f"Output folder: {output_folder}")
    
    extract_images_from_docx(docx_file, output_folder)
