from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from tesseract_scan import extract_text_from_image  # Import the function


app = Flask(__name__)
CORS(app)  # This allows requests from your React frontend

# Create uploads folder if it doesn't exist
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Configure upload folder
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Allowed file extensions
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'webp'}

@app.route('/test', methods=['GET'])
def test_route():
    return jsonify({"message": "Backend is working!"})

@app.route('/api/upload', methods=['POST'])
def upload_file():
    # Check if file is present in request
    if request.method == 'POST':   
        file = request.files['file'] 
        file.save(file.filename)
        analysis_result = extract_text_from_image(file)
        return jsonify({
                'success': True,
                'analysis': analysis_result
            }), 200
        
    # If user doesn't select file
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

if __name__ == '__main__':
    app.run(debug=True)