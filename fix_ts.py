import os
import glob

files = glob.glob('frontend/src/**/*.ts', recursive=True)
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace('onclick="(window as any).', 'onclick="window.')\
                         .replace('onchange="(window as any).', 'onchange="window.')\
                         .replace('onsubmit="(window as any).', 'onsubmit="window.')
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed {f}")
