from PIL import Image
import sys

def remove_black_background(input_path, output_path, threshold=30):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (r, g, b, a)
        # Check if pixel is black (or close to it)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            new_data.append((255, 255, 255, 0)) # Make it transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    remove_black_background(
        "/home/biggerfisch/.gemini/antigravity/scratch/biggerfish.io/src/images/hero-net-visual.jpg", 
        "/home/biggerfisch/.gemini/antigravity/scratch/biggerfish.io/src/images/hero-net-visual.png"
    )
