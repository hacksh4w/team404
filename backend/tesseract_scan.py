# tesseract_scan.py
import pytesseract
from PIL import Image

def extract_text_from_image(image_path):
    try:
        # For Windows, you might need this line:
        pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        
        # Open the image
        image = Image.open(image_path)
        
        # Extract text from image
        text = pytesseract.image_to_string(image)
        
        # Basic analysis
        analysis = {
            'extracted_text': text,
            'word_count': len(text.split()),
            'has_numbers': any(char.isdigit() for char in text)
        }
        
        return analysis
    
    except Exception as e:
        return {'error': str(e)}