# tesseract_scan.py
import pytesseract
from PIL import Image

# Define risk classification keywords
HIGH_RISK_KEYWORDS = {"illegal work", "damage report", "loan repayment issue", "NOC violation", "unauthorized construction"}
MEDIUM_RISK_KEYWORDS = {"work order", "land documents", "contract breach", "payment delay"}
LOW_RISK_KEYWORDS = {"general notice", "approval granted", "regular updates"}

def classify_risk(text):
    lower_text = text.lower()
    
    if any(keyword in lower_text for keyword in HIGH_RISK_KEYWORDS):
        return "High Risk"
    elif any(keyword in lower_text for keyword in MEDIUM_RISK_KEYWORDS):
        return "Medium Risk"
    else:
        return "Low Risk"

def extract_text_from_image(image_path):
    try:
        # For Windows, you might need this line:
        pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        
        # Open the image
        image = Image.open(image_path)
        
        # Extract text from image
        text = pytesseract.image_to_string(image)
        title = text.split('\n')
        risk_level = classify_risk(text)
        
        # Basic analysis
        analysis = {
            'extracted_text': text,
            'title': title[0],
            'word_count': len(text.split()),
            'has_numbers': any(char.isdigit() for char in text)
        }
        
        return analysis
    
    except Exception as e:
        return {'error': str(e)}