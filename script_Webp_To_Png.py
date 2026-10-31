from PIL import Image
import os

# Dossier source et format de sortie ('JPEG' ou 'PNG')
input_dir = '.'
output_format = 'PNG'  # ou 'JPEG'

for filename in os.listdir(input_dir):
  if filename.lower().endswith(('.webp', '.gif')):
    filepath = os.path.join(input_dir, filename)
    try:
      with Image.open(filepath) as img:
        # S'assurer de convertir en RGB si on exporte en JPEG (qui ne gère pas la transparence)
        if output_format == 'JPEG' and img.mode in ('RGBA', 'LA'):
          background = Image.new('RGB', img.size, (255, 255, 255))
          background.paste(img, mask=img.split()[-1])
          img = background
        elif output_format == 'JPEG':
          img = img.convert('RGB')

        base_name = os.path.splitext(filename)[0]
        out_filename = f'{base_name}.{output_format.lower()}'
        out_path = os.path.join(input_dir, out_filename)

        img.save(out_path, output_format)
        print(f'Converti : {filename} -> {out_filename}')
    except Exception as e:
      print(f'Erreur sur {filename}: {e}')
