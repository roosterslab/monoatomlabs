from PIL import Image
import sys

def crop_image(input_path, output_path, threshold=240):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if pixel is "near white" based on threshold
            # item is (R, G, B, A)
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((255, 255, 255, 0)) # Make transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        
        # Determine bounding box of non-transparent content
        bbox = img.getbbox()
        if bbox:
            # Crop to the bounding box
            cropped = img.crop(bbox)
            cropped.save(output_path)
            print(f"Successfully cropped {input_path} to {output_path} with threshold {threshold}")
        else:
            print("Image is blank or all white/transparent")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python crop_image.py <input> <output> [threshold]")
    else:
        thresh = int(sys.argv[3]) if len(sys.argv) > 3 else 240
        crop_image(sys.argv[1], sys.argv[2], thresh)
