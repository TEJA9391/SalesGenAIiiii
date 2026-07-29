import os
import re

directory = 'c:/Users/tejrt/Downloads/sales/SalesGenAI/frontend/src/pages'

text_dummy = 'Somewhat. Dummy data. To showcase.'
email_dummy = 'dummy@showcase.com'
url_dummy = 'https://showcase.com'
date_dummy = '2026-07-29T12:00'
number_dummy = '10'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find <input ...> that DO NOT have a value attribute
    # We'll match the opening tag, extract the attributes, and append value=".." if appropriate
    
    def repl_input(match):
        full_tag = match.group(0)
        
        # Skip if it already has a value attribute
        if re.search(r'\bvalue\s*=', full_tag):
            return full_tag
            
        # Determine type
        type_match = re.search(r'type\s*=\s*["\']([^"\']+)["\']', full_tag)
        input_type = type_match.group(1).lower() if type_match else 'text'
        
        # Skip checkboxes, radios, files, submit, etc.
        if input_type in ['checkbox', 'radio', 'file', 'submit', 'button', 'hidden', 'search']:
            # wait, they said "anyone", maybe don't touch search
            # wait, we can add value to search too but let's just stick to typical text fields
            # Actually search is text, so we can add it.
            if input_type in ['checkbox', 'radio', 'file', 'submit', 'button', 'hidden']:
                return full_tag
                
        # Determine value to inject
        if input_type == 'email':
            val = email_dummy
        elif input_type == 'url':
            val = url_dummy
        elif input_type in ['datetime-local', 'date']:
            val = date_dummy
        elif input_type == 'number':
            val = number_dummy
        elif input_type == 'password':
            val = 'password123'
        else:
            val = text_dummy
            
        # Inject value attribute right before the closing >
        # We need to handle self-closing /> or just >
        if full_tag.endswith('/>'):
            new_tag = full_tag[:-2] + f' value="{val}" />'
        else:
            new_tag = full_tag[:-1] + f' value="{val}">'
        return new_tag

    new_content = re.sub(r'<input\b[^>]*>', repl_input, content)
    
    # Process textareas
    def repl_textarea(match):
        full_tag = match.group(0)
        open_tag = match.group(1)
        inner_content = match.group(2)
        close_tag = match.group(3)
        
        # If it's already got content, maybe don't overwrite? Or overwrite since they said "add somewhat... don't be empty"
        if not inner_content.strip():
            return f'{open_tag}{text_dummy}{close_tag}'
        return full_tag

    new_content = re.sub(r'(<textarea\b[^>]*>)(.*?)(</textarea>)', repl_textarea, new_content, flags=re.DOTALL)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated inputs in {filepath}")

for filename in os.listdir(directory):
    if filename.endswith('.ts'):
        process_file(os.path.join(directory, filename))
